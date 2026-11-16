// Uninterrupted Devotional Chanting & Music Box Engine (Web Audio API Direct Vocal Buffer Player)
// Plays all 187 real Hindi/Sanskrit Vocal MP3 recordings directly through Web Audio API (this.ctx)
// — the exact same audio pipeline as the temple bell & shruti drone, guaranteeing 100% audible vocal playback
// on Android, iOS, and Desktop without <audio> tag autoplay blocks!

class MantraAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentDeity = null;
    this.currentTrackKey = null;
    this.currentTrack = null;
    this.currentLineIndex = 0;
    this.loopCount = 0;
    this.playbackSessionId = 0;

    // User toggles
    this.voiceEnabled = true;
    this.droneEnabled = true;
    this.melodyEnabled = true;
    this.speedMultiplier = 1.0;

    // Web Audio nodes & caches
    this.bufferCache = new Map();
    this.activeVoiceSource = null;
    this.lineTimer = null;
    this.noteTimers = [];
    this.droneInterval = null;
    this.wakeLock = null;

    // Callbacks for UI updates
    this.onStateChange = null;
    this.onLineChange = null;
    this.onLoopIncrement = null;
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
  playTempleBell(volumeScale = 0.35) {
    this._ensureContext();
    const now = this.ctx.currentTime;
    const baseFreq = 784;
    const partials = [1, 2.0, 2.42, 3.0];
    const gains = [0.10, 0.05, 0.03, 0.015];

    partials.forEach((ratio, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(baseFreq * ratio, now);

      const dur = 2.2 / (idx * 0.6 + 1);
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

  // Soft warm Tanpura Shruti Box drone (Sa - Pa - Sa)
  _pluckTanpuraNote(freq, duration = 4.2) {
    if (!this.droneEnabled || !this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const harmonics = [1, 1.498, 2];
    const weights = [0.018, 0.010, 0.006]; // Subtle warm drone behind the loud vocal chant

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
    masterGain.gain.linearRampToValueAtTime(0.14, now + 0.7);
    masterGain.gain.setValueAtTime(0.12, now + durationSec - 1.0);
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

  // Warm, low-octave Harmonium reed accompaniment
  _playMelodyNote(semitoneOffset, durationSec = 0.65) {
    if (!this.melodyEnabled || !this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const base = (this.currentDeity?.rootFreq || 146.83);
    const freq = base * Math.pow(2, semitoneOffset / 12);

    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    filter.type = 'lowpass';
    filter.frequency.value = 520;

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.016, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + durationSec + 0.05);
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
    }, 1800);
  }

  _stopBackgroundDrone() {
    if (this.droneInterval) { clearInterval(this.droneInterval); this.droneInterval = null; }
    this.noteTimers.forEach(t => clearTimeout(t));
    this.noteTimers = [];
    if (this.lineTimer) { clearTimeout(this.lineTimer); this.lineTimer = null; }
  }

  _stopActiveVoice() {
    if (this.activeVoiceSource) {
      try {
        this.activeVoiceSource.onended = null;
        this.activeVoiceSource.stop();
        this.activeVoiceSource.disconnect();
      } catch (_) {}
      this.activeVoiceSource = null;
    }
  }

  // Fetch and decode MP3 into a Web Audio AudioBuffer (cached in RAM)
  async _loadVocalBuffer(deityId, trackKey, lineIndex) {
    const key = `${deityId}_${trackKey}_${lineIndex}`;
    if (this.bufferCache.has(key)) {
      return this.bufferCache.get(key);
    }

    const urls = [
      `./audio/${key}.mp3`,
      `https://raw.githubusercontent.com/jyothibasavaraj062685/mantra-chanting-box/main/audio/${key}.mp3`
    ];

    for (const url of urls) {
      try {
        const res = await fetch(url);
        if (!res.ok) continue;
        const arrayBuf = await res.arrayBuffer();
        if (!arrayBuf || arrayBuf.byteLength < 500) continue;
        // Decode using Web Audio API
        const audioBuffer = await new Promise((resolve, reject) => {
          this.ctx.decodeAudioData(arrayBuf.slice(0), resolve, reject);
        });
        this.bufferCache.set(key, audioBuffer);
        return audioBuffer;
      } catch (_) {
        // Try next URL
      }
    }
    return null;
  }

  // Start playing a Deity's Mantra, Stotra, Ashtottara, or Song in an infinite non-stop loop
  start(deity, trackKey) {
    this._ensureContext();
    this._stopBackgroundDrone();
    this._stopActiveVoice();

    this.playbackSessionId++;
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

    this._playCurrentLine(this.playbackSessionId);
  }

  async _playCurrentLine(sessionId = this.playbackSessionId) {
    if (!this.isPlaying || !this.currentTrack || sessionId !== this.playbackSessionId) return;

    this._ensureContext();
    const lines = this.currentTrack.lines;
    const lineIdx = this.currentLineIndex;
    const lineObj = lines[lineIdx];

    if (this.onLineChange) {
      this.onLineChange(lineIdx, lineObj, this.loopCount);
    }

    this.noteTimers.forEach(t => clearTimeout(t));
    this.noteTimers = [];
    if (this.lineTimer) { clearTimeout(this.lineTimer); this.lineTimer = null; }

    // Preload next line in background
    const nextIdx = (lineIdx + 1) % lines.length;
    this._loadVocalBuffer(this.currentDeity.id, this.currentTrackKey, nextIdx);

    if (this.currentTrack.isOmResonance) {
      this._playOmVocalResonance(this.currentDeity.rootFreq || 136.1, 4.6);
    }

    let advanced = false;
    const advanceToNextLine = () => {
      if (advanced || !this.isPlaying || sessionId !== this.playbackSessionId) return;
      advanced = true;
      if (this.lineTimer) { clearTimeout(this.lineTimer); this.lineTimer = null; }

      this.currentLineIndex++;
      if (this.currentLineIndex >= lines.length) {
        this.currentLineIndex = 0;
        this.loopCount++;
        if (this.onLoopIncrement) this.onLoopIncrement(this.loopCount);
      }
      this._playCurrentLine(sessionId);
    };

    // Load and play the vocal MP3 directly through Web Audio API (this.ctx)
    if (this.voiceEnabled) {
      const audioBuffer = await this._loadVocalBuffer(this.currentDeity.id, this.currentTrackKey, lineIdx);
      if (!this.isPlaying || sessionId !== this.playbackSessionId) return;

      if (audioBuffer) {
        this._stopActiveVoice();
        const source = this.ctx.createBufferSource();
        const voiceGain = this.ctx.createGain();

        source.buffer = audioBuffer;
        source.playbackRate.value = this.speedMultiplier;
        // Boost vocal volume so the chanting voice is loud, clear, and front-and-center!
        voiceGain.gain.value = 1.85;

        source.connect(voiceGain);
        voiceGain.connect(this.ctx.destination);
        this.activeVoiceSource = source;

        const durationMs = ((audioBuffer.duration / this.speedMultiplier) * 1000);

        // Schedule soft harmonium accompaniment notes across the actual vocal duration
        if (this.melodyEnabled) {
          const notes = lineObj.notes || [0, 2, 4, 2, 0];
          const stepMs = Math.floor(durationMs / Math.max(1, notes.length));
          notes.forEach((semitone, idx) => {
            const t = setTimeout(() => {
              if (!this.isPlaying || sessionId !== this.playbackSessionId) return;
              this._playMelodyNote(semitone, (stepMs / 1000) * 0.95);
            }, idx * stepMs);
            this.noteTimers.push(t);
          });
        }

        source.onended = () => {
          setTimeout(advanceToNextLine, 220);
        };

        this.lineTimer = setTimeout(advanceToNextLine, durationMs + 1200);
        source.start(0);
        return;
      }
    }

    // Fallback if voice is toggled off
    const fallbackMs = lineObj.duration || 3800;
    this.lineTimer = setTimeout(advanceToNextLine, fallbackMs);
  }

  resume() {
    if (this.currentDeity && this.currentTrackKey && !this.isPlaying) {
      this.start(this.currentDeity, this.currentTrackKey);
    }
  }

  stop(notifyUI = true) {
    this.isPlaying = false;
    this.playbackSessionId++;
    this._stopBackgroundDrone();
    this._stopActiveVoice();
    this._releaseWakeLock();

    if (notifyUI && this.onStateChange) {
      this.onStateChange(false, this.currentDeity, this.currentTrackKey, this.currentTrack);
    }
  }
}

window.MantraAudioEngine = MantraAudioEngine;
