// Main UI Controller for Divya Mantra Chanting Box App

document.addEventListener('DOMContentLoaded', () => {
  const engine = new window.MantraAudioEngine();
  const deities = window.DEITIES_DATA;
  const illustrations = window.DEITY_ILLUSTRATIONS;

  const deityGrid = document.getElementById('deityGrid');
  const quickPills = document.getElementById('quickPills');
  const chantStage = document.getElementById('chantStage');
  const stagePortrait = document.getElementById('stagePortrait');
  const stageDeityTitle = document.getElementById('stageDeityTitle');
  const stageTrackName = document.getElementById('stageTrackName');
  const loopBadge = document.getElementById('loopBadge');
  const modeTabs = document.getElementById('modeTabs');
  const lyricsBox = document.getElementById('lyricsBox');
  const meaningBanner = document.getElementById('meaningBanner');

  // Bottom bar elements
  const npStatus = document.getElementById('npStatus');
  const npTitle = document.getElementById('npTitle');
  const npLyricPreview = document.getElementById('npLyricPreview');
  const mainStopBtn = document.getElementById('mainStopBtn');
  const mainPlayBtn = document.getElementById('mainPlayBtn');

  // Top instrument buttons
  document.getElementById('bellBtn').addEventListener('click', () => engine.playTempleBell());
  document.getElementById('shankhaBtn').addEventListener('click', () => engine.playShankha());

  // Sound toggles
  const toggleVoice = document.getElementById('toggleVoice');
  const toggleDrone = document.getElementById('toggleDrone');
  const toggleMelody = document.getElementById('toggleMelody');
  const toggleSpeed = document.getElementById('toggleSpeed');

  toggleVoice.addEventListener('click', () => {
    engine.voiceEnabled = !engine.voiceEnabled;
    toggleVoice.classList.toggle('on', engine.voiceEnabled);
    toggleVoice.textContent = engine.voiceEnabled ? '🗣️ Voice: ON' : '🗣️ Voice: OFF';
    if (!engine.voiceEnabled && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  });

  toggleDrone.addEventListener('click', () => {
    engine.droneEnabled = !engine.droneEnabled;
    toggleDrone.classList.toggle('on', engine.droneEnabled);
    toggleDrone.textContent = engine.droneEnabled ? '🪕 Tanpura: ON' : '🪕 Tanpura: OFF';
  });

  toggleMelody.addEventListener('click', () => {
    engine.melodyEnabled = !engine.melodyEnabled;
    toggleMelody.classList.toggle('on', engine.melodyEnabled);
    toggleMelody.textContent = engine.melodyEnabled ? '🎹 Melody: ON' : '🎹 Melody: OFF';
  });

  toggleSpeed.addEventListener('click', () => {
    if (engine.speedMultiplier < 0.85) {
      engine.speedMultiplier = 0.95;
      toggleSpeed.textContent = '🐢 Tempo: Normal';
    } else if (engine.speedMultiplier < 1.0) {
      engine.speedMultiplier = 1.12;
      toggleSpeed.textContent = '🐇 Tempo: Brisk';
    } else {
      engine.speedMultiplier = 0.78;
      toggleSpeed.textContent = '👶 Tempo: Kids Slow';
    }
  });

  // Famous Quick-Play Songs list (<= 10 famous chants/songs as requested)
  const famousShortcuts = [
    { label: '🕉️ Om.. Om.. Om..', deityId: 'om', trackKey: 'mantra' },
    { label: '🪔 Om Jai Lakshmi Mata', deityId: 'lakshmi', trackKey: 'song' },
    { label: '🙏 Om Jai Jagadish Hare', deityId: 'vishnu', trackKey: 'song' },
    { label: '🪈 Achyutam Keshavam', deityId: 'krishna', trackKey: 'song' },
    { label: '🦚 Shri Krishna Govinda', deityId: 'krishna', trackKey: 'song2' },
    { label: '🌺 Jai Ganesh Deva', deityId: 'ganapati', trackKey: 'song' },
    { label: '🔱 Karpura Gauram', deityId: 'shiva', trackKey: 'stotra' },
    { label: '🌸 Sarva Mangala Mangalye', deityId: 'gowri', trackKey: 'stotra' },
    { label: '🐒 Raghupati Raghava', deityId: 'hanuman', trackKey: 'song' },
    { label: '📿 Gurur Brahma', deityId: 'guru', trackKey: 'stotra' }
  ];

  function renderQuickPills() {
    quickPills.innerHTML = '';
    famousShortcuts.forEach(sc => {
      const btn = document.createElement('button');
      btn.className = 'quick-pill';
      btn.dataset.deity = sc.deityId;
      btn.dataset.track = sc.trackKey;
      btn.textContent = sc.label;
      btn.addEventListener('click', () => {
        const deity = deities.find(d => d.id === sc.deityId);
        if (deity) startDeityTrack(deity, sc.trackKey, true);
      });
      quickPills.appendChild(btn);
    });
  }

  function renderDeityCards() {
    deityGrid.innerHTML = '';
    deities.forEach(deity => {
      const card = document.createElement('div');
      card.className = `deity-card ${deity.id === 'om' ? 'featured-om' : ''}`;
      card.id = `card-${deity.id}`;
      card.style.background = deity.bgGradient;

      const svgArt = illustrations[deity.id] || illustrations.om;

      // Buttons for each card: Stotra, Song/Aarti, Mantra, Ashtottara
      const hasSecondSong = Boolean(deity.items.song2);

      card.innerHTML = `
        <div class="playing-indicator">🔊 PLAYING ∞</div>
        <div class="portrait-wrap">${svgArt}</div>
        <div class="card-content" style="width:100%">
          <div class="deity-name">${deity.name}</div>
          <div class="deity-sub">${deity.subtitle}</div>
          <div class="card-actions">
            <button class="card-btn" data-deity="${deity.id}" data-track="stotra">📜 Stotra</button>
            <button class="card-btn" data-deity="${deity.id}" data-track="song">🎵 Song/Aarti</button>
            <button class="card-btn" data-deity="${deity.id}" data-track="mantra">🕉️ Mantra</button>
            <button class="card-btn" data-deity="${deity.id}" data-track="ashtottara">🌺 108 Names</button>
            ${hasSecondSong ? `<button class="card-btn" style="grid-column: span 2" data-deity="${deity.id}" data-track="song2">🪈 Shri Krishna Govinda</button>` : ''}
          </div>
        </div>
      `;

      // Clicking the portrait or card title starts the default favorite track (Stotra or Mantra for Om)
      card.addEventListener('click', (e) => {
        const btn = e.target.closest('.card-btn');
        if (btn) {
          e.stopPropagation();
          const tKey = btn.dataset.track;
          startDeityTrack(deity, tKey, true);
          return;
        }
        const defaultKey = deity.id === 'om' ? 'mantra' : 'stotra';
        startDeityTrack(deity, defaultKey, true);
      });

      deityGrid.appendChild(card);
    });
  }

  function startDeityTrack(deity, trackKey, scrollToStage = false) {
    engine.start(deity, trackKey);
    renderStage(deity, trackKey);
    if (scrollToStage) {
      chantStage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function renderStage(deity, trackKey) {
    const track = deity.items[trackKey];
    if (!track) return;

    chantStage.classList.add('visible');
    stagePortrait.innerHTML = illustrations[deity.id] || illustrations.om;
    stageDeityTitle.textContent = deity.name;
    stageTrackName.textContent = track.title;
    loopBadge.textContent = `🔁 Loop #${engine.loopCount} (∞)`;
    meaningBanner.innerHTML = `<strong>✨ Meaning for Kids:</strong> ${track.meaning}`;

    // Render Mode Tabs for this Deity
    modeTabs.innerHTML = '';
    const tabOrder = [
      { key: 'mantra', label: '🕉️ Mantra' },
      { key: 'stotra', label: '📜 1-Para Stotra' },
      { key: 'ashtottara', label: '🌺 Ashtottara' },
      { key: 'song', label: '🎵 Song / Aarti' }
    ];
    if (deity.items.song2) {
      tabOrder.push({ key: 'song2', label: '🪈 Govinda Song' });
    }

    tabOrder.forEach(t => {
      if (!deity.items[t.key]) return;
      const tab = document.createElement('button');
      tab.className = `mode-tab ${t.key === trackKey ? 'active' : ''}`;
      tab.textContent = t.label;
      tab.addEventListener('click', () => startDeityTrack(deity, t.key, false));
      modeTabs.appendChild(tab);
    });

    // Render Karaoke Lines
    lyricsBox.innerHTML = '';
    track.lines.forEach((line, idx) => {
      const div = document.createElement('div');
      div.className = `lyric-line ${idx === engine.currentLineIndex ? 'current' : ''}`;
      div.id = `lyric-line-${idx}`;
      div.innerHTML = `
        <div class="lyric-sanskrit">${line.sanskrit}</div>
        <div class="lyric-english">${line.english}</div>
      `;
      div.addEventListener('click', () => {
        engine.currentLineIndex = idx;
        engine._playCurrentLine();
      });
      lyricsBox.appendChild(div);
    });

    updateActiveHighlights(deity.id, trackKey);
  }

  function updateActiveHighlights(deityId, trackKey) {
    document.querySelectorAll('.deity-card').forEach(c => {
      c.classList.toggle('playing', engine.isPlaying && c.id === `card-${deityId}`);
    });

    document.querySelectorAll('.card-btn').forEach(b => {
      const isMatch = engine.isPlaying && b.dataset.deity === deityId && b.dataset.track === trackKey;
      b.classList.toggle('active-track', isMatch);
    });

    document.querySelectorAll('.quick-pill').forEach(p => {
      const isMatch = engine.isPlaying && p.dataset.deity === deityId && p.dataset.track === trackKey;
      p.classList.toggle('active', isMatch);
    });
  }

  // Engine Callbacks
  engine.onStateChange = (playing, deity, trackKey, track) => {
    if (playing && deity && track) {
      npStatus.classList.remove('stopped');
      npStatus.innerHTML = `<span>● NON-STOP CHANTING (LOOP #${engine.loopCount} ∞)</span>`;
      npTitle.textContent = `${deity.name} • ${track.title}`;
      mainStopBtn.style.display = 'inline-flex';
      mainPlayBtn.style.display = 'none';
    } else {
      npStatus.classList.add('stopped');
      npStatus.innerHTML = `<span>⏹️ STOPPED — TAP ANY GOD CARD TO PLAY</span>`;
      mainStopBtn.style.display = 'none';
      mainPlayBtn.style.display = deity ? 'inline-flex' : 'none';
    }
    updateActiveHighlights(deity?.id, trackKey);
  };

  engine.onLineChange = (lineIndex, lineObj, loopCount) => {
    loopBadge.textContent = `🔁 Loop #${loopCount} (∞)`;
    npStatus.innerHTML = `<span>● NON-STOP CHANTING (LOOP #${loopCount} ∞)</span>`;
    npLyricPreview.textContent = lineObj.english;

    document.querySelectorAll('.lyric-line').forEach((el, idx) => {
      el.classList.toggle('current', idx === lineIndex);
    });

    const activeEl = document.getElementById(`lyric-line-${lineIndex}`);
    if (activeEl && lyricsBox) {
      const boxRect = lyricsBox.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      if (elRect.top < boxRect.top || elRect.bottom > boxRect.bottom) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  engine.onLoopIncrement = (loopCount) => {
    loopBadge.textContent = `🔁 Loop #${loopCount} (∞)`;
  };

  mainStopBtn.addEventListener('click', () => {
    engine.stop(true);
  });

  mainPlayBtn.addEventListener('click', () => {
    if (engine.currentDeity && engine.currentTrackKey) {
      engine.resume();
    } else {
      startDeityTrack(deities[0], 'mantra', true);
    }
  });

  renderQuickPills();
  renderDeityCards();
});
