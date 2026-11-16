// Ornate, colorful devotional SVG portraits for each Deity Card
window.DEITY_ILLUSTRATIONS = {
  om: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="deity-svg">
      <defs>
        <radialGradient id="omGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFF59D"/>
          <stop offset="45%" stop-color="#FFB300"/>
          <stop offset="80%" stop-color="#E65100"/>
          <stop offset="100%" stop-color="#3E1200" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="omGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFDE7"/>
          <stop offset="50%" stop-color="#FFD54F"/>
          <stop offset="100%" stop-color="#FF8F00"/>
        </linearGradient>
      </defs>
      <!-- Aura & Rays -->
      <circle cx="100" cy="100" r="88" fill="url(#omGlow)" opacity="0.85"/>
      <circle cx="100" cy="100" r="74" fill="none" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.7"/>
      <circle cx="100" cy="100" r="64" fill="#4A1800" fill-opacity="0.55" stroke="#FFB300" stroke-width="2"/>
      <!-- Sacred Lotus Petals at Base -->
      <g fill="#FF6F00" stroke="#FFD54F" stroke-width="1.2" opacity="0.9">
        <path d="M100 172 C88 152 86 142 100 132 C114 142 112 152 100 172 Z"/>
        <path d="M78 168 C66 150 68 140 84 136 C92 146 88 156 78 168 Z"/>
        <path d="M122 168 C134 150 132 140 116 136 C108 146 112 156 122 168 Z"/>
        <path d="M58 158 C50 142 56 134 72 136 C76 146 68 154 58 158 Z"/>
        <path d="M142 158 C150 142 144 134 128 136 C124 146 132 154 142 158 Z"/>
      </g>
      <!-- Large Sacred Om Symbol -->
      <text x="100" y="122" text-anchor="middle" font-size="88" font-weight="bold" font-family="'Noto Sans Devanagari', 'Mangal', serif" fill="url(#omGold)" stroke="#5D1900" stroke-width="2" filter="drop-shadow(0 4px 10px rgba(255,215,0,0.8))">ॐ</text>
    </svg>
  `,

  ganapati: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="deity-svg">
      <defs>
        <radialGradient id="ganGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#FFE082"/>
          <stop offset="60%" stop-color="#FF7043"/>
          <stop offset="100%" stop-color="#880E4F" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="crownGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFF59D"/>
          <stop offset="50%" stop-color="#FFC107"/>
          <stop offset="100%" stop-color="#FF6F00"/>
        </linearGradient>
      </defs>
      <!-- Golden Prabhamandala Aura -->
      <circle cx="100" cy="95" r="82" fill="url(#ganGlow)" opacity="0.85"/>
      <circle cx="100" cy="95" r="68" fill="none" stroke="#FFD54F" stroke-width="2" stroke-dasharray="5 3"/>
      <!-- Big Auspicious Ears -->
      <path d="M58 76 C22 58 18 112 52 126 C62 130 66 118 64 96 Z" fill="#FF8A65" stroke="#BF360C" stroke-width="2.5"/>
      <path d="M142 76 C178 58 182 112 148 126 C138 130 134 118 136 96 Z" fill="#FF8A65" stroke="#BF360C" stroke-width="2.5"/>
      <!-- Shoulders & Garland -->
      <path d="M46 174 C52 138 148 138 154 174 Z" fill="#FF7043" stroke="#BF360C" stroke-width="2"/>
      <path d="M68 144 Q100 172 132 144" fill="none" stroke="#FFD54F" stroke-width="5" stroke-linecap="round"/>
      <path d="M72 148 Q100 174 128 148" fill="none" stroke="#E91E63" stroke-width="3" stroke-dasharray="4 5" stroke-linecap="round"/>
      <!-- Head & Curved Trunk -->
      <circle cx="100" cy="94" r="36" fill="#FF8A65" stroke="#BF360C" stroke-width="2.2"/>
      <path d="M88 102 C88 132 90 154 112 154 C126 154 128 140 118 136 C112 134 110 142 114 144" fill="none" stroke="#FF8A65" stroke-width="18" stroke-linecap="round"/>
      <path d="M88 102 C88 132 90 154 112 154 C126 154 128 140 118 136" fill="none" stroke="#BF360C" stroke-width="2.2" stroke-linecap="round"/>
      <!-- Golden Modak / Laddu in Trunk -->
      <circle cx="122" cy="134" r="8" fill="#FFD54F" stroke="#E65100" stroke-width="1.5"/>
      <!-- Tusks (Ekadanta) -->
      <path d="M80 112 L72 122 L83 118 Z" fill="#FFFDF7" stroke="#8D6E63" stroke-width="1"/>
      <path d="M120 112 L125 117 L117 117 Z" fill="#FFFDF7" stroke="#8D6E63" stroke-width="1"/>
      <!-- Kind Eyes & Vibhuti Tilak -->
      <ellipse cx="83" cy="90" rx="5" ry="3.5" fill="#212121"/>
      <ellipse cx="117" cy="90" rx="5" ry="3.5" fill="#212121"/>
      <circle cx="84" cy="89" r="1.3" fill="#FFF"/>
      <circle cx="118" cy="89" r="1.3" fill="#FFF"/>
      <!-- Tilak -->
      <path d="M90 76 Q100 79 110 76" stroke="#FFF9C4" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M92 81 Q100 84 108 81" stroke="#FFF9C4" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="100" cy="79" r="4" fill="#D50000"/>
      <!-- Ornate Mukut (Crown) -->
      <path d="M68 68 L132 68 L120 34 L100 16 L80 34 Z" fill="url(#crownGold)" stroke="#B71C1C" stroke-width="2"/>
      <circle cx="100" cy="46" r="6" fill="#E91E63" stroke="#FFF" stroke-width="1.2"/>
      <circle cx="84" cy="54" r="4" fill="#00E676"/>
      <circle cx="116" cy="54" r="4" fill="#00E676"/>
      <rect x="65" y="64" width="70" height="8" rx="4" fill="#FFD54F" stroke="#B71C1C" stroke-width="1.5"/>
    </svg>
  `,

  shiva: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="deity-svg">
      <defs>
        <radialGradient id="shivaGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#E0F7FA"/>
          <stop offset="55%" stop-color="#29B6F6"/>
          <stop offset="100%" stop-color="#0D47A1" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="95" r="82" fill="url(#shivaGlow)" opacity="0.8"/>
      <!-- Golden Trishul (Trident) & Damaru on Right -->
      <g stroke="#FFD54F" stroke-width="3" fill="none" stroke-linecap="round">
        <line x1="154" y1="34" x2="154" y2="170"/>
        <path d="M140 52 C140 72 168 72 168 52"/>
        <path d="M140 52 L140 38"/>
        <path d="M168 52 L168 38"/>
        <path d="M154 26 L154 58"/>
      </g>
      <!-- Flowing Ganga Stream from Top Lock -->
      <path d="M100 28 C114 10 136 16 144 32" fill="none" stroke="#B3E5FC" stroke-width="4" stroke-linecap="round"/>
      <path d="M102 26 C118 16 130 22 136 36" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      <!-- Matted Jata (Hair) -->
      <circle cx="100" cy="40" r="18" fill="#263238" stroke="#111" stroke-width="1.5"/>
      <path d="M56 96 C48 64 68 46 100 46 C132 46 152 64 144 96 C152 126 146 156 136 170 L64 170 C54 156 48 126 56 96 Z" fill="#263238"/>
      <!-- Crescent Moon (Chandrashekhara) -->
      <path d="M116 32 C124 38 126 48 116 54 C128 52 134 40 124 28 Z" fill="#FFF9C4" stroke="#FFD54F" stroke-width="1"/>
      <!-- Shoulders & Neelakantha Face -->
      <path d="M48 174 C56 142 144 142 152 174 Z" fill="#81D4FA" stroke="#0277BD" stroke-width="2"/>
      <!-- Glowing Blue Throat (Neelakantha) -->
      <ellipse cx="100" cy="138" rx="14" ry="10" fill="#1565C0"/>
      <!-- Rudraksha Mala & Vasuki Snake -->
      <path d="M74 134 Q100 154 126 134" fill="none" stroke="#5D4037" stroke-width="6" stroke-dasharray="2 5" stroke-linecap="round"/>
      <!-- Face -->
      <ellipse cx="100" cy="96" rx="32" ry="38" fill="#B3E5FC" stroke="#0288D1" stroke-width="2"/>
      <!-- Tripundra Vibhuti & Third Eye -->
      <line x1="82" y1="74" x2="118" y2="74" stroke="#FFF9C4" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="80" y1="79" x2="120" y2="79" stroke="#FFF9C4" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="82" y1="84" x2="118" y2="84" stroke="#FFF9C4" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="100" cy="79" rx="3.5" ry="6" fill="#FF3D00" stroke="#FFF" stroke-width="1"/>
      <!-- Meditative Serene Eyes & Smile -->
      <path d="M78 95 Q86 100 92 95" fill="none" stroke="#1A237E" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M108 95 Q114 100 122 95" fill="none" stroke="#1A237E" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M90 116 Q100 123 110 116" fill="none" stroke="#01579B" stroke-width="2.2" stroke-linecap="round"/>
    </svg>
  `,

  gowri: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="deity-svg">
      <defs>
        <radialGradient id="gowriGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#FFF59D"/>
          <stop offset="55%" stop-color="#F48FB1"/>
          <stop offset="100%" stop-color="#880E4F" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="95" r="82" fill="url(#gowriGlow)" opacity="0.85"/>
      <circle cx="100" cy="95" r="68" fill="none" stroke="#FFD54F" stroke-width="2" stroke-dasharray="4 4"/>
      <!-- Silk Saree Drape & Shoulders -->
      <path d="M46 174 C54 136 146 136 154 174 Z" fill="#D81B60" stroke="#FFD54F" stroke-width="2.5"/>
      <path d="M70 140 Q100 168 130 140" fill="none" stroke="#FFD54F" stroke-width="5"/>
      <circle cx="100" cy="156" r="5" fill="#00E676" stroke="#FFD54F" stroke-width="1.5"/>
      <!-- Hair & Golden Crown -->
      <path d="M62 96 C58 58 142 58 138 96 L144 142 L56 142 Z" fill="#1A1A1A"/>
      <path d="M70 68 L130 68 L118 32 L100 16 L82 32 Z" fill="#FFD54F" stroke="#C2185B" stroke-width="2"/>
      <circle cx="100" cy="46" r="6" fill="#E91E63" stroke="#FFF" stroke-width="1.2"/>
      <!-- Golden Face of Mother Gowri -->
      <ellipse cx="100" cy="98" rx="30" ry="35" fill="#FFE0B2" stroke="#E65100" stroke-width="1.8"/>
      <!-- Jhumka Earrings & Nose Ring (Nath) -->
      <circle cx="68" cy="104" r="6" fill="#FFD54F" stroke="#E65100" stroke-width="1.5"/>
      <circle cx="132" cy="104" r="6" fill="#FFD54F" stroke="#E65100" stroke-width="1.5"/>
      <circle cx="105" cy="107" r="4.5" fill="none" stroke="#FFD54F" stroke-width="1.5"/>
      <!-- Auspicious Red Kumkum Bindi -->
      <circle cx="100" cy="79" r="5" fill="#D50000"/>
      <circle cx="100" cy="71" r="2" fill="#FFD54F"/>
      <!-- Compassionate Eyes & Gentle Smile -->
      <path d="M79 92 Q86 87 93 92" fill="none" stroke="#212121" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M107 92 Q114 87 121 92" fill="none" stroke="#212121" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="86" cy="93" r="3" fill="#212121"/>
      <circle cx="114" cy="93" r="3" fill="#212121"/>
      <path d="M91 116 Q100 123 109 116" fill="none" stroke="#C2185B" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Blooming Pink Lotus on Left -->
      <g transform="translate(36, 125) scale(0.75)">
        <path d="M20 30 C10 15 12 5 20 0 C28 5 30 15 20 30 Z" fill="#F48FB1" stroke="#AD1457" stroke-width="1.5"/>
        <path d="M20 30 C4 20 2 10 10 4 C16 10 18 20 20 30 Z" fill="#F06292" stroke="#AD1457" stroke-width="1.5"/>
        <path d="M20 30 C36 20 38 10 30 4 C24 10 22 20 20 30 Z" fill="#F06292" stroke="#AD1457" stroke-width="1.5"/>
      </g>
    </svg>
  `,

  lakshmi: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="deity-svg">
      <defs>
        <radialGradient id="lakGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#FFF9C4"/>
          <stop offset="55%" stop-color="#FFD54F"/>
          <stop offset="100%" stop-color="#B45309" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="95" r="84" fill="url(#lakGlow)" opacity="0.9"/>
      <!-- Large Pink Padma (Lotus) Throne at Base -->
      <g fill="#F48FB1" stroke="#C2185B" stroke-width="1.8">
        <path d="M40 166 C50 144 74 146 100 166"/>
        <path d="M160 166 C150 144 126 146 100 166"/>
        <path d="M58 172 C70 146 86 146 100 172"/>
        <path d="M142 172 C130 146 114 146 100 172"/>
        <path d="M100 176 C84 148 86 136 100 128 C114 136 116 148 100 176 Z" fill="#EC407A"/>
      </g>
      <!-- Two Lotuses Held on Both Sides -->
      <g transform="translate(26, 74)">
        <circle cx="18" cy="18" r="14" fill="#F48FB1" stroke="#AD1457" stroke-width="1.5"/>
        <circle cx="18" cy="18" r="6" fill="#FFD54F"/>
      </g>
      <g transform="translate(138, 74)">
        <circle cx="18" cy="18" r="14" fill="#F48FB1" stroke="#AD1457" stroke-width="1.5"/>
        <circle cx="18" cy="18" r="6" fill="#FFD54F"/>
      </g>
      <!-- Gold Coins Showering -->
      <circle cx="44" cy="134" r="5" fill="#FFD54F" stroke="#B45309" stroke-width="1.2"/>
      <circle cx="52" cy="146" r="5" fill="#FFD54F" stroke="#B45309" stroke-width="1.2"/>
      <circle cx="156" cy="134" r="5" fill="#FFD54F" stroke="#B45309" stroke-width="1.2"/>
      <circle cx="148" cy="146" r="5" fill="#FFD54F" stroke="#B45309" stroke-width="1.2"/>
      <!-- Red & Gold Saree & Kasu Mala -->
      <path d="M54 166 C62 134 138 134 146 166 Z" fill="#C62828" stroke="#FFD54F" stroke-width="2.5"/>
      <path d="M72 138 Q100 164 128 138" fill="none" stroke="#FFD54F" stroke-width="6" stroke-dasharray="4 2"/>
      <!-- Crown & Face -->
      <path d="M70 64 L130 64 L118 28 L100 12 L82 28 Z" fill="#FFD54F" stroke="#B71C1C" stroke-width="2"/>
      <circle cx="100" cy="42" r="6" fill="#D50000" stroke="#FFF" stroke-width="1.2"/>
      <ellipse cx="100" cy="94" rx="29" ry="34" fill="#FFE082" stroke="#E65100" stroke-width="1.8"/>
      <circle cx="69" cy="100" r="6" fill="#FFD54F" stroke="#B71C1C" stroke-width="1.5"/>
      <circle cx="131" cy="100" r="6" fill="#FFD54F" stroke="#B71C1C" stroke-width="1.5"/>
      <!-- Kumkum & Serene Eyes -->
      <circle cx="100" cy="76" r="5" fill="#D50000"/>
      <circle cx="86" cy="90" r="3.2" fill="#212121"/>
      <circle cx="114" cy="90" r="3.2" fill="#212121"/>
      <path d="M79 88 Q86 83 93 88" fill="none" stroke="#212121" stroke-width="2" stroke-linecap="round"/>
      <path d="M107 88 Q114 83 121 88" fill="none" stroke="#212121" stroke-width="2" stroke-linecap="round"/>
      <path d="M91 112 Q100 119 109 112" fill="none" stroke="#B71C1C" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  krishna: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="deity-svg">
      <defs>
        <radialGradient id="kriGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#FFF9C4"/>
          <stop offset="55%" stop-color="#4FC3F7"/>
          <stop offset="100%" stop-color="#01579B" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="95" r="82" fill="url(#kriGlow)" opacity="0.85"/>
      <!-- Pitambara Yellow Silk & Vaijayanti Garland -->
      <path d="M48 174 C56 138 144 138 152 174 Z" fill="#FFB300" stroke="#E65100" stroke-width="2"/>
      <path d="M70 140 Q100 168 130 140" fill="none" stroke="#FFF" stroke-width="4" stroke-dasharray="3 4" stroke-linecap="round"/>
      <!-- Dark Curly Hair & Golden Crown -->
      <circle cx="68" cy="78" r="14" fill="#1A237E"/>
      <circle cx="132" cy="78" r="14" fill="#1A237E"/>
      <circle cx="64" cy="98" r="12" fill="#1A237E"/>
      <circle cx="136" cy="98" r="12" fill="#1A237E"/>
      <!-- Peacock Feather (Mor Pankh) -->
      <g transform="translate(106, 12) rotate(18)">
        <ellipse cx="12" cy="22" rx="13" ry="20" fill="#00C853" stroke="#FFD54F" stroke-width="1.5"/>
        <ellipse cx="12" cy="22" rx="8" ry="13" fill="#00B0FF"/>
        <ellipse cx="12" cy="24" rx="4.5" ry="7" fill="#1A237E"/>
        <circle cx="12" cy="22" r="2" fill="#FFD54F"/>
      </g>
      <!-- Golden Mukut -->
      <path d="M72 68 L128 68 L118 40 L100 28 L82 40 Z" fill="#FFD54F" stroke="#E65100" stroke-width="2"/>
      <circle cx="100" cy="52" r="5" fill="#E91E63"/>
      <!-- Shyamsundar Face -->
      <ellipse cx="100" cy="96" rx="31" ry="35" fill="#81D4FA" stroke="#0277BD" stroke-width="2"/>
      <!-- Vaishnava Tilak -->
      <path d="M95 70 L95 84 Q100 88 105 84 L105 70" fill="none" stroke="#FFF9C4" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="100" cy="81" r="2.5" fill="#D50000"/>
      <!-- Joyful Eyes & Smile -->
      <circle cx="85" cy="93" r="3.8" fill="#1A237E"/>
      <circle cx="115" cy="93" r="3.8" fill="#1A237E"/>
      <circle cx="86" cy="92" r="1.2" fill="#FFF"/>
      <circle cx="116" cy="92" r="1.2" fill="#FFF"/>
      <path d="M90 112 Q100 120 110 112" fill="none" stroke="#01579B" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Golden Bansuri (Flute) Across Below Lips -->
      <rect x="44" y="122" width="118" height="9" rx="4.5" fill="#FFD54F" stroke="#B45309" stroke-width="1.8"/>
      <circle cx="76" cy="126.5" r="2" fill="#5D4037"/>
      <circle cx="90" cy="126.5" r="2" fill="#5D4037"/>
      <circle cx="104" cy="126.5" r="2" fill="#5D4037"/>
      <circle cx="118" cy="126.5" r="2" fill="#5D4037"/>
      <circle cx="152" cy="134" r="4" fill="#E91E63"/>
    </svg>
  `,

  vishnu: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="deity-svg">
      <defs>
        <radialGradient id="visGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#FFF59D"/>
          <stop offset="55%" stop-color="#7986CB"/>
          <stop offset="100%" stop-color="#1A237E" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="95" r="84" fill="url(#visGlow)" opacity="0.85"/>
      <!-- Sudarshana Chakra on Top Right & Panchajanya Shankha on Top Left -->
      <g transform="translate(154, 52)">
        <circle cx="0" cy="0" r="18" fill="none" stroke="#FFD54F" stroke-width="3" stroke-dasharray="4 2"/>
        <circle cx="0" cy="0" r="11" fill="#FF8F00" stroke="#FFF59D" stroke-width="2"/>
        <circle cx="0" cy="0" r="4" fill="#FFF"/>
      </g>
      <g transform="translate(46, 52)">
        <ellipse cx="0" cy="0" rx="12" ry="17" fill="#FFFDF7" stroke="#FFD54F" stroke-width="2"/>
        <path d="M-6 -6 Q0 -12 6 -6 Q0 4 -6 6" fill="none" stroke="#FFB300" stroke-width="1.8"/>
      </g>
      <!-- Royal Pitambara Shoulders & Kaustubha Gem -->
      <path d="M46 174 C54 138 146 138 154 174 Z" fill="#FFB300" stroke="#E65100" stroke-width="2.2"/>
      <path d="M68 140 Q100 170 132 140" fill="none" stroke="#FFD54F" stroke-width="5"/>
      <circle cx="100" cy="154" r="6" fill="#D50000" stroke="#FFF" stroke-width="1.5"/>
      <!-- Tall Kiritamukuta (Vishnu Crown) -->
      <path d="M72 68 L128 68 L120 20 L100 8 L80 20 Z" fill="#FFD54F" stroke="#B45309" stroke-width="2.2"/>
      <rect x="66" y="62" width="68" height="8" rx="4" fill="#FFB300" stroke="#B45309" stroke-width="1.5"/>
      <circle cx="100" cy="38" r="6" fill="#00E676" stroke="#FFF" stroke-width="1.2"/>
      <!-- Meghavarna (Sky Blue) Face -->
      <ellipse cx="100" cy="98" rx="30" ry="34" fill="#90CAF9" stroke="#1565C0" stroke-width="2"/>
      <circle cx="68" cy="102" r="6" fill="#FFD54F" stroke="#B45309" stroke-width="1.5"/>
      <circle cx="132" cy="102" r="6" fill="#FFD54F" stroke="#B45309" stroke-width="1.5"/>
      <!-- Urdhva Pundra (Vaishnava Namam) -->
      <path d="M93 72 L93 88 Q100 92 107 88 L107 72" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      <line x1="100" y1="73" x2="100" y2="89" stroke="#D50000" stroke-width="2.8" stroke-linecap="round"/>
      <!-- Lotus Eyes & Peaceful Smile -->
      <circle cx="85" cy="95" r="3.5" fill="#1A237E"/>
      <circle cx="115" cy="95" r="3.5" fill="#1A237E"/>
      <path d="M90 116 Q100 123 110 116" fill="none" stroke="#0D47A1" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  hanuman: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="deity-svg">
      <defs>
        <radialGradient id="hanGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#FFF59D"/>
          <stop offset="55%" stop-color="#FF7043"/>
          <stop offset="100%" stop-color="#BF360C" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="95" r="84" fill="url(#hanGlow)" opacity="0.85"/>
      <!-- Golden Gada (Mace) Resting by Shoulder -->
      <g transform="translate(152, 62) rotate(12)">
        <rect x="-4" y="18" width="8" height="84" rx="3" fill="#FFD54F" stroke="#B45309" stroke-width="1.8"/>
        <circle cx="0" cy="8" r="18" fill="#FFD54F" stroke="#B45309" stroke-width="2.2"/>
        <ellipse cx="0" cy="8" rx="18" ry="6" fill="none" stroke="#D84315" stroke-width="2"/>
        <path d="M-5 -10 L0 -20 L5 -10 Z" fill="#FFD54F" stroke="#B45309" stroke-width="1.5"/>
      </g>
      <!-- Strong Saffron Shoulders & Garland -->
      <path d="M46 174 C54 138 146 138 154 174 Z" fill="#FF7043" stroke="#BF360C" stroke-width="2.2"/>
      <path d="M70 140 Q100 168 130 140" fill="none" stroke="#FFD54F" stroke-width="5"/>
      <!-- Golden Crown -->
      <path d="M70 66 L130 66 L120 26 L100 12 L80 26 Z" fill="#FFD54F" stroke="#B71C1C" stroke-width="2"/>
      <circle cx="100" cy="42" r="6" fill="#D50000" stroke="#FFF" stroke-width="1.2"/>
      <rect x="65" y="62" width="70" height="8" rx="4" fill="#FFB300" stroke="#B71C1C" stroke-width="1.5"/>
      <!-- Ears & Anjaneya Face -->
      <circle cx="65" cy="94" r="10" fill="#FFAB91" stroke="#BF360C" stroke-width="2"/>
      <circle cx="135" cy="94" r="10" fill="#FFAB91" stroke="#BF360C" stroke-width="2"/>
      <circle cx="65" cy="104" r="5" fill="#FFD54F" stroke="#B45309" stroke-width="1.5"/>
      <circle cx="135" cy="104" r="5" fill="#FFD54F" stroke="#B45309" stroke-width="1.5"/>
      <ellipse cx="100" cy="94" rx="31" ry="30" fill="#FFAB91" stroke="#BF360C" stroke-width="2"/>
      <ellipse cx="100" cy="112" rx="26" ry="20" fill="#FFCCBC" stroke="#BF360C" stroke-width="1.8"/>
      <!-- Sindoor Tilak -->
      <path d="M95 72 L100 86 L105 72" fill="#FF3D00"/>
      <!-- Brave Kind Eyes & Smile -->
      <circle cx="85" cy="89" r="3.8" fill="#3E2723"/>
      <circle cx="115" cy="89" r="3.8" fill="#3E2723"/>
      <circle cx="86" cy="88" r="1.2" fill="#FFF"/>
      <circle cx="116" cy="88" r="1.2" fill="#FFF"/>
      <ellipse cx="100" cy="104" rx="6" ry="4" fill="#BF360C"/>
      <path d="M86 116 Q100 125 114 116" fill="none" stroke="#BF360C" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  guru: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="deity-svg">
      <defs>
        <radialGradient id="guruGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#FFF9C4"/>
          <stop offset="55%" stop-color="#69F0AE"/>
          <stop offset="100%" stop-color="#004D40" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="95" r="84" fill="url(#guruGlow)" opacity="0.85"/>
      <circle cx="100" cy="95" r="68" fill="none" stroke="#FFD54F" stroke-width="1.8" stroke-dasharray="5 3"/>
      <!-- Saffron Robe & Rudraksha Mala -->
      <path d="M46 174 C56 136 144 136 154 174 Z" fill="#FF8F00" stroke="#E65100" stroke-width="2.2"/>
      <path d="M72 138 Q100 166 128 138" fill="none" stroke="#5D4037" stroke-width="6" stroke-dasharray="2 5" stroke-linecap="round"/>
      <!-- Top Jata / Sage Hair -->
      <circle cx="100" cy="40" r="16" fill="#37474F"/>
      <path d="M64 94 C60 56 140 56 136 94" fill="#37474F"/>
      <!-- Serene Guru Face -->
      <ellipse cx="100" cy="96" rx="30" ry="35" fill="#FFE0B2" stroke="#E65100" stroke-width="1.8"/>
      <!-- Vibhuti & Kumkum on Forehead -->
      <line x1="84" y1="75" x2="116" y2="75" stroke="#FFF9C4" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="82" y1="80" x2="118" y2="80" stroke="#FFF9C4" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="100" cy="78" r="4" fill="#D50000"/>
      <!-- Peaceful Eyes & Chinmudra / Blessing Hand -->
      <path d="M80 94 Q86 89 92 94" fill="none" stroke="#212121" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M108 94 Q114 89 120 94" fill="none" stroke="#212121" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="86" cy="95" r="3" fill="#212121"/>
      <circle cx="114" cy="95" r="3" fill="#212121"/>
      <path d="M90 115 Q100 122 110 115" fill="none" stroke="#BF360C" stroke-width="2.4" stroke-linecap="round"/>
      <!-- Abhaya / Chinmudra Blessing Hand with Om -->
      <g transform="translate(132, 118)">
        <rect x="0" y="0" width="24" height="34" rx="12" fill="#FFE0B2" stroke="#E65100" stroke-width="1.8"/>
        <text x="12" y="23" text-anchor="middle" font-size="14" font-weight="bold" fill="#D50000">ॐ</text>
      </g>
    </svg>
  `
};
