// Uninterrupted Devotional Audio & Chanting Engine
// Combines:
// 1. Continuous Tanpura / Shruti Drone (Sa - Pa - Sa)
// 2. Resonant Formant "Om.. Om.. Om.." Choir Synthesizer
// 3. Harmonium / Bansuri Melodic Synthesizer playing each song's swaras
// 4. Manjira (Temple Cymbals) & Temple Bell / Shankha
// 5. Web Speech API Vocal Chanting (Hindi/Sanskrit/Indian English) with mobile anti-stall watchdog
// 6. Screen Wake Lock + Background Keep-Alive Audio so phone playback never stops until STOP is pressed.

class MantraAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentDeity = null;
    this.currentTrackKey = null;
    this.currentTrack = null;
    this.currentLineIndex = 0;
    this.loopCount = 0;

    // User toggles
    this.voiceEnabled = true;
    this.droneEnabled = true;
    this.melodyEnabled = true;
    this.cymbalsEnabled = true;
    this.speedMultiplier = 0.92; // Kid-friendly clear speed by default

    // Timers & nodes
    this.lineTimer = null;
    this.noteTimers = [];
    this.droneInterval = null;
    this.cymbalInterval = null;
    this.omInterval = null;
    this.keepAliveOsc = null;
    this.wakeLock = null;

    // Callbacks for UI updates
    this.onStateChange = null;
    this.onLineChange = null;
    this.onLoopIncrement = null;

    this.selectedVoice = null;
    this._initVoices();
  }

  _initVoices() {
    if (!('speechSynthesis' in window)) return;
    const pickBestVoice = () => {
      const voices = window.speechSynthesis.getVoices() || [];
      if (!voices.length) return;
      // Prefer Hindi / Sanskrit / Indian English voices for authentic pronunciation
      const priorities = [
        v => v.lang && v.lang.toLowerCase().startsWith('hi-in'),
        v => v.lang && v.lang.toLowerCase().startsWith('sa-in'),
        v => v.lang && v.lang.toLowerCase().startsWith('mr-in'),
        v => v.lang && v.lang.toLowerCase().startsWith('te-in'),
        v => v.lang && v.lang.toLowerCase().startsWith('kn-in'),
        v => v.lang && v.lang.toLowerCase().startsWith('ta-in'),
        v => v.lang && v.lang.toLowerCase().startsWith('en-in'),
        v => /india|hindi|lekha|heera|rishi|swara|kalpana/i.test(v.name),
        v => v.default
      ];
      for (const test of priorities) {
        const match = voices.find(test);
        if (match) {
          this.selectedVoice = match;
          break;
        }
      }
      if (!this.selectedVoice) this.selectedVoice = voices[0];
    };
    pickBestVoice();
    window.speechSynthesis.onvoiceschanged = pickBestVoice;
  }

  _ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  async _acquireWakeLock() {
    try {
      if ('wakeLock' in navigator && !this.wakeLock) {
        this.wakeLock = await navigator.wakeLock.request('screen');
        this.wakeLock.addEventListener('release', () => {
          this.wakeLock = null;
        });
      }
    } catch (_) {
      // Ignore if wakeLock not permitted
    }
  }

  _releaseWakeLock() {
    if (this.wakeLock) {
      try { this.wakeLock.release(); } catch (_) {}
      this.wakeLock = null;
    }
  }

  // Silent sub-audible keep-alive oscillator + Android HTML5 Audio loop so Android lock screen never stops playback
  _startKeepAlive() {
    this._stopKeepAlive();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.frequency.value = 40;
      gain.gain.value = 0.0005;
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      this.keepAliveOsc = osc;
    } catch (_) {}

    // Create a 1-second silent WAV loop for Android MediaSession / background lock-screen persistence
    try {
      if (!this.androidAudioEl) {
        const sampleRate = 8000;
        const numSamples = sampleRate;
        const buffer = new ArrayBuffer(44 + numSamples * 2);
        const view = new DataView(buffer);
        const writeStr = (offset, str) => {
          for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
        };
        writeStr(0, 'RIFF');
        view.setUint32(4, 36 + numSamples * 2, true);
        writeStr(8, 'WAVE');
        writeStr(12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, 1, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * 2, true);
        view.setUint16(32, 2, true);
        view.setUint16(34, 16, true);
        writeStr(36, 'data');
        view.setUint32(40, numSamples * 2, true);
        const blob = new Blob([buffer], { type: 'audio/wav' });
        this.androidAudioEl = new Audio(URL.createObjectURL(blob));
        this.androidAudioEl.loop = true;
        this.androidAudioEl.volume = 0.01;
      }
      this.androidAudioEl.play().catch(() => {});
    } catch (_) {}
  }

  _stopKeepAlive() {
    if (this.keepAliveOsc) {
      try { this.keepAliveOsc.stop(); this.keepAliveOsc.disconnect(); } catch (_) {}
      this.keepAliveOsc = null;
    }
    if (this.androidAudioEl) {
      try { this.androidAudioEl.pause(); } catch (_) {}
    }
  }

  // Play interactive Temple Bell (Ghanta)
  playTempleBell() {
    this._ensureContext();
    const now = this.ctx.currentTime;
    const baseFreq = 784; // G5 temple bell fundamental
    const partials = [1, 2.0, 2.42, 3.0, 4.18, 5.43];
    const gains = [0.22, 0.14, 0.10, 0.07, 0.04, 0.02];

    partials.forEach((ratio, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(baseFreq * ratio, now);

      const dur = 3.2 / (idx * 0.6 + 1);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(gains[idx], now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + dur + 0.05);
    });
  }

  // Play auspicious Shankha (Conch Shell)
  playShankha() {
    this._ensureContext();
    const now = this.ctx.currentTime;
    const dur = 3.4;
    const baseFreq = 272.2; // Cosmic 2x Om

    [1, 2, 3].forEach((harm, i) => {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(baseFreq * harm * 0.96, now);
      osc.frequency.linearRampToValueAtTime(baseFreq * harm, now + 0.45);
      osc.frequency.setValueAtTime(baseFreq * harm, now + dur - 0.6);
      osc.frequency.linearRampToValueAtTime(baseFreq * harm * 0.97, now + dur);

      filter.type = 'bandpass';
      filter.frequency.value = baseFreq * harm;
      filter.Q.value = 6;

      const peak = (0.14 / (i + 1));
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(peak, now + 0.55);
      gain.gain.setValueAtTime(peak, now + dur - 0.7);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + dur + 0.05);
    });
  }

  // Play soft Manjira (hand cymbal) tap
  _playManjira(accent = false) {
    if (!this.cymbalsEnabled || !this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const freqs = [3120, 4680, 6240, 7910];
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);
      const amp = (accent ? 0.022 : 0.011) / (i + 1);
      const decay = accent ? 0.32 : 0.14;
      gain.gain.setValueAtTime(amp, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decay);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + decay + 0.02);
    });
  }

  // Pluck a single Tanpura string (Sa - Pa - Sa - Sa)
  _pluckTanpuraNote(freq, duration = 3.8) {
    if (!this.droneEnabled || !this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const harmonics = [1, 2, 3, 4, 5];
    const weights = [0.055, 0.035, 0.025, 0.012, 0.006];

    harmonics.forEach((h, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = i === 0 ? 'triangle' : 'sine';
      // Slight jawari detune shimmer
      osc.frequency.setValueAtTime(freq * h + (i % 2 === 0 ? 0.35 : -0.35), now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(weights[i], now + 0.45);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration + 0.1);
    });
  }

  // Resonant Vocal Formant "Ommm..." Synthesizer (A -> U -> M)
  _playOmVocalResonance(rootFreq = 136.1, durationSec = 4.8) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    // 3 rich vocal oscillators (fundamental, octave, fifth)
    const freqs = [rootFreq, rootFreq * 2, rootFreq * 1.498];
    const levels = [0.14, 0.08, 0.04];

    // Formant filter transitioning from 'Aaa' (750Hz) -> 'Ooo/Uuu' (420Hz) -> 'Mmm' (240Hz)
    const formant1 = this.ctx.createBiquadFilter();
    formant1.type = 'bandpass';
    formant1.Q.value = 3.2;
    formant1.frequency.setValueAtTime(720, now);
    formant1.frequency.linearRampToValueAtTime(450, now + durationSec * 0.48);
    formant1.frequency.linearRampToValueAtTime(240, now + durationSec * 0.85);

    const lowWarmth = this.ctx.createBiquadFilter();
    lowWarmth.type = 'lowpass';
    lowWarmth.frequency.setValueAtTime(950, now);
    lowWarmth.frequency.linearRampToValueAtTime(360, now + durationSec * 0.85);

    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.linearRampToValueAtTime(0.24, now + 0.75);
    masterGain.gain.setValueAtTime(0.22, now + durationSec - 1.1);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

    formant1.connect(masterGain);
    lowWarmth.connect(masterGain);
    masterGain.connect(this.ctx.destination);

    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = idx === 2 ? 'sine' : 'sawtooth';
      osc.frequency.setValueAtTime(f, now);
      g.gain.value = levels[idx];
      osc.connect(formant1);
      osc.connect(lowWarmth);
      osc.start(now);
      osc.stop(now + durationSec + 0.1);
    });
  }

  // Play a Harmonium / Bansuri melodic note (semitone offset from root * 2)
  _playMelodyNote(semitoneOffset, durationSec = 0.55) {
    if (!this.melodyEnabled || !this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const base = (this.currentDeity?.rootFreq || 146.83) * 2; // Melodic octave
    const freq = base * Math.pow(2, semitoneOffset / 12);

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 2, now); // Soft octave harmonic like a reed harmonium

    filter.type = 'lowpass';
    filter.frequency.value = 1400;

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.065, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + durationSec + 0.04);
    osc2.stop(now + durationSec + 0.04);
  }

  _startBackgroundDroneAndRhythm() {
    this._stopBackgroundDroneAndRhythm();
    const root = this.currentDeity?.rootFreq || 136.1;
    // Tanpura cycle: Pa (1.5x), Sa_high (2x), Sa_high (2x), Sa_low (1x)
    const cycle = [root * 1.498, root * 2, root * 2, root];
    let step = 0;

    this._pluckTanpuraNote(cycle[0], 3.8);
    this.droneInterval = setInterval(() => {
      if (!this.isPlaying) return;
      step = (step + 1) % cycle.length;
      this._pluckTanpuraNote(cycle[step], 3.8);
    }, 1150);

    let beat = 0;
    this.cymbalInterval = setInterval(() => {
      if (!this.isPlaying) return;
      this._playManjira(beat % 2 === 0);
      beat++;
    }, 900);
  }

  _stopBackgroundDroneAndRhythm() {
    if (this.droneInterval) { clearInterval(this.droneInterval); this.droneInterval = null; }
    if (this.cymbalInterval) { clearInterval(this.cymbalInterval); this.cymbalInterval = null; }
    if (this.omInterval) { clearInterval(this.omInterval); this.omInterval = null; }
    this.noteTimers.forEach(t => clearTimeout(t));
    this.noteTimers = [];
    if (this.lineTimer) { clearTimeout(this.lineTimer); this.lineTimer = null; }
  }

  // Start playing a Deity's Mantra, Stotra, Ashtottara, or Song in an infinite non-stop loop
  start(deity, trackKey) {
    this._ensureContext();
    this.stop(false); // Clean any previous timers without resetting UI state prematurely

    this.currentDeity = deity;
    this.currentTrackKey = trackKey;
    this.currentTrack = deity.items[trackKey];
    this.currentLineIndex = 0;
    this.loopCount = 1;
    this.isPlaying = true;

    this._acquireWakeLock();
    this._startKeepAlive();
    this.playTempleBell();
    this._startBackgroundDroneAndRhythm();

    if ('mediaSession' in navigator) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: this.currentTrack.title,
          artist: deity.name,
          album: 'Divya Mantra Box'
        });
        navigator.mediaSession.setActionHandler('play', () => this.resume());
        navigator.mediaSession.setActionHandler('pause', () => this.stop());
        navigator.mediaSession.setActionHandler('stop', () => this.stop());
      } catch (_) {}
    }

    if (this.onStateChange) this.onStateChange(true, this.currentDeity, this.currentTrackKey, this.currentTrack);
    this._playCurrentLine();
  }

  _playCurrentLine() {
    if (!this.isPlaying || !this.currentTrack) return;

    const lines = this.currentTrack.lines;
    const lineObj = lines[this.currentLineIndex];
    if (this.onLineChange) {
      this.onLineChange(this.currentLineIndex, lineObj, this.loopCount);
    }

    // Clear previous note timers
    this.noteTimers.forEach(t => clearTimeout(t));
    this.noteTimers = [];
    if (this.lineTimer) { clearTimeout(this.lineTimer); this.lineTimer = null; }

    // If this is the special "Om.. Om.. Om.." resonance track, play deep vocal Om resonance
    if (this.currentTrack.isOmResonance) {
      this._playOmVocalResonance(this.currentDeity.rootFreq || 136.1, 4.6);
    }

    // Schedule the melodic swara notes for this line
    const notes = lineObj.notes || this.currentTrack.melodyPattern || [0, 2, 4, 2, 0];
    const estimatedDurationMs = lineObj.duration || Math.max(3200, Math.min(6200, (lineObj.english.length * 95) / this.speedMultiplier));
    const stepMs = Math.floor((estimatedDurationMs - 300) / Math.max(1, notes.length));

    notes.forEach((semitone, idx) => {
      const t = setTimeout(() => {
        if (!this.isPlaying) return;
        this._playMelodyNote(semitone, (stepMs / 1000) * 0.92);
      }, idx * stepMs);
      this.noteTimers.push(t);
    });

    // Speak/chant the line aloud using Web Speech API if enabled, with a watchdog timer so playback NEVER stops
    let advanced = false;
    const advanceToNextLine = () => {
      if (advanced || !this.isPlaying) return;
      advanced = true;
      if (this.lineTimer) { clearTimeout(this.lineTimer); this.lineTimer = null; }

      this.currentLineIndex++;
      if (this.currentLineIndex >= lines.length) {
        this.currentLineIndex = 0;
        this.loopCount++;
        // Soft temple bell on every completed cycle
        this.playTempleBell();
        if (this.onLoopIncrement) this.onLoopIncrement(this.loopCount);
      }
      this._playCurrentLine();
    };

    // Fallback/watchdog timer guarantees continuous non-stop playback even if mobile TTS stalls or is muted
    this.lineTimer = setTimeout(advanceToNextLine, estimatedDurationMs + 450);

    if (this.voiceEnabled && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        // On Android, Google Speech Services pronounces Devanagari script with authentic Sanskrit/Hindi intonation
        const isIndianLang = this.selectedVoice && /^(hi|sa|mr|ne|gu|bn|kn|te|ta)/i.test(this.selectedVoice.lang || '');
        const textToSpeak = (isIndianLang && !this.currentTrack.isOmResonance)
          ? lineObj.sanskrit.replace(/[।॥0-9.]/g, ' ')
          : (lineObj.tts || lineObj.english);

        const utter = new SpeechSynthesisUtterance(textToSpeak);
        if (this.selectedVoice) utter.voice = this.selectedVoice;
        utter.lang = this.selectedVoice?.lang || 'hi-IN';
        utter.rate = this.speedMultiplier;
        utter.pitch = this.currentTrack.isOmResonance ? 0.75 : 1.0;
        utter.volume = 1.0;

        utter.onend = () => {
          setTimeout(advanceToNextLine, 350);
        };
        utter.onerror = () => {
          // Watchdog timer continues seamlessly
        };

        // 40ms delay after cancel() fixes Android Chrome WebView speech drop bug
        setTimeout(() => {
          if (this.isPlaying) window.speechSynthesis.speak(utter);
        }, 40);
      } catch (_) {
        // Watchdog timer handles progression seamlessly
      }
    }
  }

  resume() {
    if (this.currentDeity && this.currentTrackKey && !this.isPlaying) {
      this.start(this.currentDeity, this.currentTrackKey);
    }
  }

  stop(notifyUI = true) {
    this.isPlaying = false;
    this._stopBackgroundDroneAndRhythm();
    this._stopKeepAlive();
    this._releaseWakeLock();

    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch (_) {}
    }
    if (notifyUI && this.onStateChange) {
      this.onStateChange(false, this.currentDeity, this.currentTrackKey, this.currentTrack);
    }
  }
}

window.MantraAudioEngine = MantraAudioEngine;
