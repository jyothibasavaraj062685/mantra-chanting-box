// Uninterrupted Devotional Chanting & Music Box Engine
// Plays real bundled Hindi/Sanskrit Vocal MP3 recordings (./audio/<deity>_<track>_<line>.mp3)
// accompanied by a warm Tanpura Shruti Box drone, Harmonium melody swaras, and resonant Om choir!

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
    this.melodyEnabled = true; // Warm harmonium accompaniment
    this.speedMultiplier = 1.0;

    // Timers & audio elements
    this.lineTimer = null;
    this.noteTimers = [];
    this.droneInterval = null;
    this.wakeLock = null;

    // Primary vocal MP3 player + preloader for gapless transitions
    this.ttsAudio = new Audio();
    this.ttsAudio.preload = 'auto';
    this.nextAudioPreload = new Audio();
    this.nextAudioPreload.preload = 'auto';

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
      const priorities = [
        v => v.lang && v.lang.toLowerCase().startsWith('hi-in'),
        v => v.lang && v.lang.toLowerCase().startsWith('en-in'),
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
    } catch (_) {}
  }

  _releaseWakeLock() {
    if (this.wakeLock) {
      try { this.wakeLock.release(); } catch (_) {}
      this.wakeLock = null;
    }
  }

  // Interactive Temple Bell
  playTempleBell(volumeScale = 0.5) {
    this._ensureContext();
    const now = this.ctx.currentTime;
    const baseFreq = 784;
    const partials = [1, 2.0, 2.42, 3.0];
    const gains = [0.12, 0.06, 0.04, 0.02];

    partials.forEach((ratio, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(baseFreq * ratio, now);

      const dur = 2.4 / (idx * 0.6 + 1);
      gain.gain.setValueAtTime(0.0005, now);
      gain.gain.linearRampToValueAtTime(gains[idx] * volumeScale, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + dur + 0.05);
    });
  }

  // Interactive Shankha (Conch Shell)
  playShankha() {
    this._ensureContext();
    const now = this.ctx.currentTime;
    const dur = 3.0;
    const baseFreq = 272.2;

    [1, 2, 3].forEach((harm, i) => {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(baseFreq * harm * 0.96, now);
      osc.frequency.linearRampToValueAtTime(baseFreq * harm, now + 0.45);

      filter.type = 'bandpass';
      filter.frequency.value = baseFreq * harm;
      filter.Q.value = 6;

      const peak = 0.12 / (i + 1);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(peak, now + 0.5);
      gain.gain.setValueAtTime(peak, now + dur - 0.6);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + dur + 0.05);
    });
  }

  // Warm, continuous Tanpura Shruti Box drone (Sa - Pa - Sa)
  _pluckTanpuraNote(freq, duration = 4.2) {
    if (!this.droneEnabled || !this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const harmonics = [1, 1.498, 2];
    const weights = [0.025, 0.014, 0.009];

    harmonics.forEach((h, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * h, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(weights[i], now + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration + 0.1);
    });
  }

  // Deep "Ommm..." vocal resonance choir
  _playOmVocalResonance(rootFreq = 136.1, durationSec = 4.6) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    const formant = this.ctx.createBiquadFilter();
    formant.type = 'bandpass';
    formant.Q.value = 2.6;
    formant.frequency.setValueAtTime(680, now);
    formant.frequency.linearRampToValueAtTime(420, now + durationSec * 0.5);
    formant.frequency.linearRampToValueAtTime(220, now + durationSec * 0.85);

    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.linearRampToValueAtTime(0.18, now + 0.7);
    masterGain.gain.setValueAtTime(0.16, now + durationSec - 1.0);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

    formant.connect(masterGain);
    masterGain.connect(this.ctx.destination);

    [rootFreq, rootFreq * 2, rootFreq * 1.498].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      osc.type = idx === 2 ? 'sine' : 'sawtooth';
      osc.frequency.setValueAtTime(f, now);
      osc.connect(formant);
      osc.start(now);
      osc.stop(now + durationSec + 0.1);
    });
  }

  // Soft warm Harmonium reed accompaniment (follows the song's melody swaras softly behind the voice)
  _playMelodyNote(semitoneOffset, durationSec = 0.65) {
    if (!this.melodyEnabled || !this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const base = (this.currentDeity?.rootFreq || 146.83); // Warm lower-octave reed harmonium
    const freq = base * Math.pow(2, semitoneOffset / 12);

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 2, now);

    filter.type = 'lowpass';
    filter.frequency.value = 680; // Warm mellow harmonium tone, no harsh high pitch

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.022, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + durationSec + 0.05);
    osc2.stop(now + durationSec + 0.05);
  }

  _startBackgroundDrone() {
    this._stopBackgroundDrone();
    const root = this.currentDeity?.rootFreq || 136.1;
    const cycle = [root, root * 1.498, root * 2, root];
    let step = 0;

    this._pluckTanpuraNote(cycle[0], 4.2);
    this.droneInterval = setInterval(() => {
      if (!this.isPlaying) return;
      step = (step + 1) % cycle.length;
      this._pluckTanpuraNote(cycle[step], 4.2);
    }, 1700);
  }

  _stopBackgroundDrone() {
    if (this.droneInterval) { clearInterval(this.droneInterval); this.droneInterval = null; }
    this.noteTimers.forEach(t => clearTimeout(t));
    this.noteTimers = [];
    if (this.lineTimer) { clearTimeout(this.lineTimer); this.lineTimer = null; }
  }

  // Start playing a Deity's Mantra, Stotra, Ashtottara, or Song in an infinite non-stop loop
  start(deity, trackKey) {
    this._ensureContext();
    this._stopBackgroundDrone();

    try {
      this.ttsAudio.pause();
      if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
    } catch (_) {}

    this.currentDeity = deity;
    this.currentTrackKey = trackKey;
    this.currentTrack = deity.items[trackKey];
    this.currentLineIndex = 0;
    this.loopCount = 1;
    this.isPlaying = true;

    this._acquireWakeLock();
    this._startBackgroundDrone();

    if (this.onStateChange) {
      this.onStateChange(true, this.currentDeity, this.currentTrackKey, this.currentTrack);
    }

    this._playCurrentLine();
  }

  _playCurrentLine() {
    if (!this.isPlaying || !this.currentTrack) return;

    const lines = this.currentTrack.lines;
    const lineObj = lines[this.currentLineIndex];
    if (this.onLineChange) {
      this.onLineChange(this.currentLineIndex, lineObj, this.loopCount);
    }

    // Preload next line's MP3 so transition is instant
    const nextIdx = (this.currentLineIndex + 1) % lines.length;
    this.nextAudioPreload.src = `./audio/${this.currentDeity.id}_${this.currentTrackKey}_${nextIdx}.mp3`;

    this.noteTimers.forEach(t => clearTimeout(t));
    this.noteTimers = [];
    if (this.lineTimer) { clearTimeout(this.lineTimer); this.lineTimer = null; }

    if (this.currentTrack.isOmResonance) {
      this._playOmVocalResonance(this.currentDeity.rootFreq || 136.1, 4.6);
    }

    const estimatedDurationMs = lineObj.duration || Math.max(3800, Math.min(7000, (lineObj.english.length * 105) / this.speedMultiplier));

    if (this.melodyEnabled) {
      const notes = lineObj.notes || [0, 2, 4, 2, 0];
      const stepMs = Math.floor((estimatedDurationMs - 200) / Math.max(1, notes.length));
      notes.forEach((semitone, idx) => {
        const t = setTimeout(() => {
          if (!this.isPlaying) return;
          this._playMelodyNote(semitone, (stepMs / 1000) * 0.95);
        }, idx * stepMs);
        this.noteTimers.push(t);
      });
    }

    let advanced = false;
    const advanceToNextLine = () => {
      if (advanced || !this.isPlaying) return;
      advanced = true;
      if (this.lineTimer) { clearTimeout(this.lineTimer); this.lineTimer = null; }

      this.currentLineIndex++;
      if (this.currentLineIndex >= lines.length) {
        this.currentLineIndex = 0;
        this.loopCount++;
        if (this.onLoopIncrement) this.onLoopIncrement(this.loopCount);
      }
      this._playCurrentLine();
    };

    // Safety watchdog
    this.lineTimer = setTimeout(advanceToNextLine, estimatedDurationMs + 3500);

    if (!this.voiceEnabled) return;

    this._playBundledVocalMp3(lineObj, advanceToNextLine);
  }

  _playBundledVocalMp3(lineObj, onDone) {
    const mp3Path = `./audio/${this.currentDeity.id}_${this.currentTrackKey}_${this.currentLineIndex}.mp3`;
    let fallbackTriggered = false;

    const fallbackToSpeech = () => {
      if (fallbackTriggered || !this.isPlaying) return;
      fallbackTriggered = true;
      if (!('speechSynthesis' in window)) {
        setTimeout(onDone, 2500);
        return;
      }
      try {
        const utter = new SpeechSynthesisUtterance(lineObj.tts || lineObj.english);
        utter.lang = 'hi-IN';
        utter.rate = this.speedMultiplier;
        utter.onend = () => setTimeout(onDone, 250);
        utter.onerror = () => setTimeout(onDone, 1000);
        window.speechSynthesis.speak(utter);
      } catch (_) {
        setTimeout(onDone, 2000);
      }
    };

    try {
      this.ttsAudio.pause();
      this.ttsAudio.src = mp3Path;
      this.ttsAudio.playbackRate = this.speedMultiplier;
      this.ttsAudio.volume = 1.0;

      this.ttsAudio.onended = () => {
        setTimeout(onDone, 220);
      };

      this.ttsAudio.onerror = () => {
        fallbackToSpeech();
      };

      const playPromise = this.ttsAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          fallbackToSpeech();
        });
      }
    } catch (_) {
      fallbackToSpeech();
    }
  }

  resume() {
    if (this.currentDeity && this.currentTrackKey && !this.isPlaying) {
      this.start(this.currentDeity, this.currentTrackKey);
    }
  }

  stop(notifyUI = true) {
    this.isPlaying = false;
    this._stopBackgroundDrone();
    this._releaseWakeLock();

    try {
      this.ttsAudio.pause();
      this.ttsAudio.removeAttribute('src');
    } catch (_) {}

    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch (_) {}
    }
    if (notifyUI && this.onStateChange) {
      this.onStateChange(false, this.currentDeity, this.currentTrackKey, this.currentTrack);
    }
  }
}

window.MantraAudioEngine = MantraAudioEngine;
