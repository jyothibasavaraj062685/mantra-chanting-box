// Complete Deity Cards, Mantras, 1-Para Stotras, Ashtottara Namavalis, and Famous Songs (<10 famous songs)
// Each track includes melody notes (in Hz offsets/scale degrees), English lyrics for kids, Devanagari, and kid-friendly meaning.

window.DEITIES_DATA = [
  {
    id: 'om',
    name: 'Om Chanting',
    subtitle: 'Sacred Cosmic Sound',
    badge: 'Meditation & Peace',
    themeColor: '#FF8C00',
    accentColor: '#FFD700',
    bgGradient: 'linear-gradient(145deg, #3b1d00 0%, #7a3800 55%, #c86400 100%)',
    rootFreq: 136.1, // 136.1 Hz - Cosmic Om (Sadja) frequency
    items: {
      mantra: {
        title: 'Om.. Om.. Om.. (Continuous Chant)',
        type: 'Mantra',
        tempo: 'Slow & Deep',
        melodyPattern: [0, 0, 7, 0], // Sa - Sa - Pa - Sa
        isOmResonance: true,
        meaning: 'Om (A-U-M) is the peaceful sound of the universe. Take a deep breath in and chant Ommm along with the sound box!',
        lines: [
          {
            sanskrit: 'ॐ ... ॐ ... ॐ ...',
            english: 'Ommm... Ommm... Ommm...',
            tts: 'Ommmm... Ommmm... Ommmm...',
            notes: [0, 0, 0],
            duration: 5200
          },
          {
            sanskrit: 'अ - उ - म् ... ॐ ...',
            english: 'Aaa... Uuu... Mmm... Ommm...',
            tts: 'Ommmm... Shanti... Shanti... Shantihi',
            notes: [0, 4, 7, 0],
            duration: 5200
          }
        ]
      },
      stotra: {
        title: 'Om Shanti Mantra (1 Para)',
        type: 'Stotra',
        tempo: 'Easy for Kids',
        melodyPattern: [0, 2, 4, 2, 0],
        meaning: 'May everyone everywhere be happy, healthy, and peaceful!',
        lines: [
          {
            sanskrit: 'ॐ सर्वे भवन्तु सुखिनः',
            english: 'Om Sarve Bhavantu Sukhinah',
            tts: 'Om, Sarve Bhavantu Sukhinaha',
            notes: [0, 2, 4, 4, 2]
          },
          {
            sanskrit: 'सर्वे सन्तु निरामयाः ।',
            english: 'Sarve Santu Niramayah',
            tts: 'Sarve Santu Niraamayaaha',
            notes: [2, 4, 5, 4, 2]
          },
          {
            sanskrit: 'सर्वे भद्राणि पश्यन्तु',
            english: 'Sarve Bhadrani Pashyantu',
            tts: 'Sarve Bhadraani Pashyantu',
            notes: [4, 7, 7, 5, 4]
          },
          {
            sanskrit: 'मा कश्चिद्दुःखभाग्भवेत् ॥',
            english: 'Ma Kashchid Duhkha Bhag Bhavet',
            tts: 'Maa Kashchid Duhkha Bhaag Bhavet',
            notes: [4, 2, 0, -1, 0]
          },
          {
            sanskrit: 'ॐ शान्तिः शान्तिः शान्तिः ॥',
            english: 'Om Shantih Shantih Shantih',
            tts: 'Om, Shaantihi, Shaantihi, Shaantihi',
            notes: [0, 4, 2, 0]
          }
        ]
      },
      ashtottara: {
        title: 'Pancha Pranava Namavali',
        type: 'Ashtottara',
        tempo: 'Rhythmic Chant',
        melodyPattern: [0, 2, 4, 0],
        meaning: 'Sacred names of the Supreme Light chanted with Om.',
        lines: [
          { sanskrit: 'ॐ परब्रह्मणे नमः', english: '1. Om Parabrahmane Namah', tts: 'Om Para-brahmane Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ परमात्मने नमः', english: '2. Om Paramatmane Namah', tts: 'Om Paramaatmane Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ सच्चिदानन्दाय नमः', english: '3. Om Sachidanandaya Namah', tts: 'Om Sachidaanandaaya Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ प्रणवाय नमः', english: '4. Om Pranavaya Namah', tts: 'Om Pranavaaya Namaha', notes: [4, 5, 4, 2, 0] },
          { sanskrit: 'ॐ ज्योतिरूपाय नमः', english: '5. Om Jyotirupaya Namah', tts: 'Om Jyotiroopaaya Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ शान्तिस्वरूपिणे नमः', english: '6. Om Shanti Swaroopine Namah', tts: 'Om Shaanti Swaroopine Namaha', notes: [2, 4, 2, 0, 0] }
        ]
      },
      song: {
        title: 'Omkaram Bindu Samyuktam (Song)',
        type: 'Song',
        tempo: 'Melodic Chant',
        melodyPattern: [0, 4, 7, 4, 0],
        meaning: 'Meditating on the shining sound of Om grants wishes and inner joy.',
        lines: [
          { sanskrit: 'ओङ्कारं बिन्दुसंयुक्तं नित्यं ध्यायन्ति योगिनः ।', english: 'Omkaram Bindu Samyuktam, Nityam Dhyayanti Yoginah', tts: 'Omkaaram Bindu Samyuktam, Nityam Dhyaayanti Yoginaha', notes: [0, 2, 4, 7, 5, 4, 2] },
          { sanskrit: 'कामदं मोक्षदं चैव ओङ्काराय नमो नमः ॥', english: 'Kamadam Mokshadam Chaiva, Omkaraya Namo Namah', tts: 'Kaamadam Mokshadam Chaiva, Omkaaraaya Namo Namaha', notes: [4, 5, 4, 2, 0, -1, 0] },
          { sanskrit: 'ॐ ... ॐ ... ॐ ...', english: 'Ommm... Ommm... Ommm...', tts: 'Ommmm... Ommmm... Ommmm...', notes: [0, 7, 0] }
        ]
      }
    }
  },

  {
    id: 'ganapati',
    name: 'Lord Ganapati',
    subtitle: 'Vighnaharta • Wisdom & Joy',
    badge: 'Kids Favorite',
    themeColor: '#E63946',
    accentColor: '#FFB703',
    bgGradient: 'linear-gradient(145deg, #4a0e17 0%, #8f1d2c 55%, #d64527 100%)',
    rootFreq: 146.83, // D3
    items: {
      mantra: {
        title: 'Om Gam Ganapataye Namah',
        type: 'Mantra',
        tempo: 'Steady Loop',
        melodyPattern: [0, 2, 4, 2, 0],
        meaning: 'We bow to Lord Ganesha, who removes all obstacles and brings wisdom!',
        lines: [
          {
            sanskrit: 'ॐ गं गणपतये नमः ॥',
            english: 'Om Gam Ganapataye Namah',
            tts: 'Om Gam Ganapataye Namaha',
            notes: [0, 2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'श्री सिद्धिविनायकाय नमः ॥',
            english: 'Shri Siddhi Vinayakaya Namah',
            tts: 'Shree Siddhi Vinaayakaaya Namaha',
            notes: [2, 4, 7, 5, 4, 2, 0]
          }
        ]
      },
      stotra: {
        title: 'Vakratunda Mahakaya (1 Para)',
        type: 'Stotra',
        tempo: 'Kid-Friendly',
        melodyPattern: [0, 2, 4, 5, 4, 2, 0],
        meaning: 'O Lord Ganesha with the curved trunk and mighty form, shining like a million suns, please bless all my work without any obstacles!',
        lines: [
          {
            sanskrit: 'वक्रतुण्ड महाकाय',
            english: 'Vakratunda Mahakaya',
            tts: 'Vakra-tunda Mahaa-kaaya',
            notes: [0, 2, 4, 4, 5, 4]
          },
          {
            sanskrit: 'सूर्यकोटि समप्रभ ।',
            english: 'Suryakoti Samaprabha',
            tts: 'Soorya-koti Sama-prabha',
            notes: [4, 5, 7, 5, 4, 2]
          },
          {
            sanskrit: 'निर्विघ्नं कुरु मे देव',
            english: 'Nirvighnam Kuru Me Deva',
            tts: 'Nirvighnam Kuru Me Deva',
            notes: [2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'सर्वकार्येषु सर्वदा ॥',
            english: 'Sarva Karyeshu Sarvada',
            tts: 'Sarva Kaaryeshu Sarvadaa',
            notes: [0, 2, 4, 2, 0, 0]
          }
        ]
      },
      ashtottara: {
        title: 'Ganapati Ashtottara Namavali',
        type: 'Ashtottara',
        tempo: 'Easy Chant',
        melodyPattern: [0, 2, 4, 0],
        meaning: 'Sacred names of Lord Ganesha for kids to chant along easily.',
        lines: [
          { sanskrit: 'ॐ विनायकाय नमः', english: '1. Om Vinayakaya Namah', tts: 'Om Vinaayakaaya Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ विघ्नराजाय नमः', english: '2. Om Vighnarajaya Namah', tts: 'Om Vighnaraajaaya Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ गौरीपुत्राय नमः', english: '3. Om Gauriputraya Namah', tts: 'Om Gauri-putraaya Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ गणेश्वराय नमः', english: '4. Om Ganeshwaraya Namah', tts: 'Om Ganeshwaraaya Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ स्कन्दाग्रजाय नमः', english: '5. Om Skandagrajaya Namah', tts: 'Om Skanda-grajaaya Namaha', notes: [4, 5, 7, 5, 4] },
          { sanskrit: 'ॐ एकदन्ताय नमः', english: '6. Om Ekadantaya Namah', tts: 'Om Eka-dantaaya Namaha', notes: [4, 2, 0, 2, 0] },
          { sanskrit: 'ॐ लम्बोदराय नमः', english: '7. Om Lambodaraya Namah', tts: 'Om Lambo-daraaya Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ गजाननाय नमः', english: '8. Om Gajananaya Namah', tts: 'Om Gajaananaaya Namaha', notes: [2, 4, 2, 0, 0] },
          { sanskrit: 'ॐ हेरम्बाय नमः', english: '9. Om Herambaya Namah', tts: 'Om Herambaaya Namaha', notes: [0, 4, 4, 2, 0] },
          { sanskrit: 'ॐ सर्वसिद्धिप्रदायकाय नमः', english: '10. Om Sarva Siddhi Pradayakaya Namah', tts: 'Om Sarva Siddhi Pradaayakaaya Namaha', notes: [4, 5, 4, 2, 0] }
        ]
      },
      song: {
        title: 'Jai Ganesh Jai Ganesh Deva (Aarti)',
        type: 'Aarti Song',
        tempo: 'Sing-Along Aarti',
        melodyPattern: [0, 2, 4, 5, 4, 2, 0],
        meaning: 'Famous Ganapati Aarti song praising Lord Ganesha, son of Mata Parvati and Lord Mahadeva!',
        lines: [
          {
            sanskrit: 'जय गणेश जय गणेश जय गणेश देवा ।',
            english: 'Jai Ganesh, Jai Ganesh, Jai Ganesh Deva',
            tts: 'Jai Ganesh, Jai Ganesh, Jai Ganesh Devaa',
            notes: [0, 2, 4, 4, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'माता जाकी पार्वती पिता महादेवा ॥',
            english: 'Mata Jaki Parvati, Pita Mahadeva',
            tts: 'Maataa Jaaki Paarvati, Pitaa Mahaadevaa',
            notes: [2, 4, 5, 7, 5, 4, 2, 0]
          },
          {
            sanskrit: 'एकदन्त दयावन्त चार भुजा धारी ।',
            english: 'Ekadanta Dayavanta, Char Bhuja Dhari',
            tts: 'Eka-danta Dayaavanta, Chaar Bhujaa Dhaari',
            notes: [4, 4, 5, 7, 7, 5, 4, 2]
          },
          {
            sanskrit: 'माथे पर तिलक सोहे मूसे की सवारी ॥',
            english: 'Mathe Par Tilak Sohe, Moose Ki Sawari',
            tts: 'Maathe Par Tilak Sohe, Moose Ki Sawaari',
            notes: [2, 4, 5, 4, 2, 0, -1, 0]
          },
          {
            sanskrit: 'पान चढ़े फूल चढ़े और चढ़े मेवा ।',
            english: 'Paan Chadhe, Phool Chadhe, Aur Chadhe Mewa',
            tts: 'Paan Chadhe, Phool Chadhe, Aur Chadhe Mewaa',
            notes: [4, 4, 5, 7, 7, 5, 4, 2]
          },
          {
            sanskrit: 'लड्डुअन का भोग लगे सन्त करें सेवा ॥',
            english: 'Ladduan Ka Bhog Lage, Sant Karein Sewa',
            tts: 'Ladduan Kaa Bhog Lage, Sant Karein Sewaa',
            notes: [2, 4, 5, 4, 2, 0, -1, 0]
          }
        ]
      }
    }
  },

  {
    id: 'shiva',
    name: 'Lord Shiva',
    subtitle: 'Mahadeva • Peace & Strength',
    badge: 'Panchakshari',
    themeColor: '#3A86FF',
    accentColor: '#90E0EF',
    bgGradient: 'linear-gradient(145deg, #0b1936 0%, #1b3b6f 55%, #276fbf 100%)',
    rootFreq: 136.1,
    items: {
      mantra: {
        title: 'Om Namah Shivaya',
        type: 'Mantra',
        tempo: 'Calm Loop',
        melodyPattern: [0, 2, 3, 5, 3, 2, 0],
        meaning: 'I bow to Lord Shiva, the peaceful and kind protector of all.',
        lines: [
          {
            sanskrit: 'ॐ नमः शिवाय ॥',
            english: 'Om Namah Shivaya',
            tts: 'Om Namah Shivaaya',
            notes: [0, 2, 3, 5, 3, 2, 0]
          },
          {
            sanskrit: 'हर हर महादेव शम्भो ॥',
            english: 'Hara Hara Mahadeva Shambho',
            tts: 'Hara Hara Mahaa-deva Shambho',
            notes: [3, 5, 7, 5, 3, 2, 0]
          }
        ]
      },
      stotra: {
        title: 'Karpura Gauram Karunavataram (1 Para)',
        type: 'Stotra',
        tempo: 'Easy to Learn',
        melodyPattern: [0, 2, 3, 5, 3, 0],
        meaning: 'Pure and white like camphor, full of kindness, wearing the garland of eternity—I bow to Lord Shiva and Mother Bhavani!',
        lines: [
          {
            sanskrit: 'कर्पूरगौरं करुणावतारं',
            english: 'Karpura Gauram Karunavataram',
            tts: 'Karpoora Gauram Karunaavataaram',
            notes: [0, 2, 3, 5, 5, 3, 2]
          },
          {
            sanskrit: 'संसारसारं भुजगेन्द्रहारम् ।',
            english: 'Samsara Saram Bhujagendra Haram',
            tts: 'Samsaara Saaram Bhujagendra Haaram',
            notes: [2, 3, 5, 7, 5, 3, 2]
          },
          {
            sanskrit: 'सदा वसन्तं हृदयारविन्दे',
            english: 'Sada Vasantam Hridayaravinde',
            tts: 'Sadaa Vasantam Hridayaaravinde',
            notes: [3, 5, 7, 8, 7, 5, 3]
          },
          {
            sanskrit: 'भवं भवानीसहितं नमामि ॥',
            english: 'Bhavam Bhavani Sahitam Namami',
            tts: 'Bhavam Bhavaani Sahitam Namaami',
            notes: [5, 3, 2, 0, -2, 0, 0]
          }
        ]
      },
      ashtottara: {
        title: 'Shiva Ashtottara Namavali',
        type: 'Ashtottara',
        tempo: 'Rhythmic Chant',
        melodyPattern: [0, 3, 5, 0],
        meaning: 'Auspicious names of Lord Shiva that bring courage and calm.',
        lines: [
          { sanskrit: 'ॐ शिवाय नमः', english: '1. Om Shivaya Namah', tts: 'Om Shivaaya Namaha', notes: [0, 2, 3, 2, 0] },
          { sanskrit: 'ॐ महेश्वराय नमः', english: '2. Om Maheshwaraya Namah', tts: 'Om Maheshwaraaya Namaha', notes: [0, 2, 3, 2, 0] },
          { sanskrit: 'ॐ शम्भवे नमः', english: '3. Om Shambhave Namah', tts: 'Om Shambhave Namaha', notes: [2, 3, 5, 3, 2] },
          { sanskrit: 'ॐ पिनाकिने नमः', english: '4. Om Pinakine Namah', tts: 'Om Pinaakine Namaha', notes: [2, 3, 5, 3, 2] },
          { sanskrit: 'ॐ शशिशेखराय नमः', english: '5. Om Shashishekharaya Namah', tts: 'Om Shashi-shekharaaya Namaha', notes: [3, 5, 7, 5, 3] },
          { sanskrit: 'ॐ नीलकण्ठाय नमः', english: '6. Om Neelakanthaya Namah', tts: 'Om Neela-kanthaaya Namaha', notes: [5, 3, 2, 0, 0] },
          { sanskrit: 'ॐ शङ्कराय नमः', english: '7. Om Shankaraya Namah', tts: 'Om Shankaraaya Namaha', notes: [0, 2, 3, 2, 0] },
          { sanskrit: 'ॐ चन्द्रमौळये नमः', english: '8. Om Chandramौलaye Namah', tts: 'Om Chandra-maulaye Namaha', notes: [2, 3, 5, 3, 2] },
          { sanskrit: 'ॐ आशुतोषाय नमः', english: '9. Om Ashutoshaya Namah', tts: 'Om Aashutoshaaya Namaha', notes: [3, 5, 3, 2, 0] },
          { sanskrit: 'ॐ साम्बसदाशिवाय नमः', english: '10. Om Samba Sadashivaya Namah', tts: 'Om Saamba Sadaa-shivaaya Namaha', notes: [5, 3, 2, 0, 0] }
        ]
      },
      song: {
        title: 'Shivaaya Parameshwaraya (Bhajan)',
        type: 'Bhajan Song',
        tempo: 'Melodic Sing-Along',
        melodyPattern: [0, 3, 5, 7, 5, 3, 0],
        meaning: 'Famous devotional Shiva bhajan praising Lord Shiva who wears the crescent moon.',
        lines: [
          {
            sanskrit: 'शिवाय परमेश्वराय शशिशेखराय नमः ॐ ।',
            english: 'Shivaya Parameshwaraya, Shashishekharaya Namah Om',
            tts: 'Shivaaya Parameshwaraaya, Shashi-shekharaaya Namah Om',
            notes: [0, 2, 3, 5, 7, 5, 3, 2, 0]
          },
          {
            sanskrit: 'भवाय गुणसम्भवाय शिवताण्डवाय नमः ॐ ॥',
            english: 'Bhavaya Guna Sambhavaya, Shiva Tandavaya Namah Om',
            tts: 'Bhavaaya Guna Sambhavaaya, Shiva Taandavaaya Namah Om',
            notes: [3, 5, 7, 8, 7, 5, 3, 2, 0]
          },
          {
            sanskrit: 'ॐ नमः शिवाय ॐ नमः शिवाय',
            english: 'Om Namah Shivaya, Om Namah Shivaya',
            tts: 'Om Namah Shivaaya, Om Namah Shivaaya',
            notes: [0, 3, 5, 5, 3, 2, 0]
          },
          {
            sanskrit: 'हर हर भोले नमः शिवाय ॥',
            english: 'Hara Hara Bhole Namah Shivaya',
            tts: 'Hara Hara Bhole Namah Shivaaya',
            notes: [3, 5, 7, 5, 3, 2, 0]
          }
        ]
      }
    }
  },

  {
    id: 'gowri',
    name: 'Gowri / Parvati',
    subtitle: 'Divine Mother • Love & Grace',
    badge: 'Devi Stotra',
    themeColor: '#EC4899',
    accentColor: '#FDE047',
    bgGradient: 'linear-gradient(145deg, #4a0e2e 0%, #831843 55%, #be185d 100%)',
    rootFreq: 164.81, // E3
    items: {
      mantra: {
        title: 'Om Sri Matre Namah',
        type: 'Mantra',
        tempo: 'Gentle Loop',
        melodyPattern: [0, 2, 4, 5, 4, 2, 0],
        meaning: 'I bow to the Divine Mother Gowri who cares for all children with love.',
        lines: [
          {
            sanskrit: 'ॐ श्री मात्रे नमः ॥',
            english: 'Om Sri Matre Namah',
            tts: 'Om Shree Maatre Namaha',
            notes: [0, 2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'ॐ सर्वमङ्गलायै नमः ॥',
            english: 'Om Sarva Mangalayai Namah',
            tts: 'Om Sarva Mangalaayai Namaha',
            notes: [2, 4, 7, 5, 4, 2, 0]
          }
        ]
      },
      stotra: {
        title: 'Sarva Mangala Mangalye (1 Para)',
        type: 'Stotra',
        tempo: 'Kid-Friendly',
        melodyPattern: [0, 2, 4, 7, 4, 2, 0],
        meaning: 'O Mother Gowri, source of all goodness and blessings, who fulfills every good wish—we bow to You, Narayani!',
        lines: [
          {
            sanskrit: 'सर्वमङ्गलमाङ्गल्ये',
            english: 'Sarva Mangala Mangalye',
            tts: 'Sarva Mangala Maangalye',
            notes: [0, 2, 4, 4, 5, 4]
          },
          {
            sanskrit: 'शिवे सर्वार्थसाधिके ।',
            english: 'Shive Sarvartha Sadhike',
            tts: 'Shive Sarvaartha Saadhike',
            notes: [4, 5, 7, 5, 4, 2]
          },
          {
            sanskrit: 'शरण्ये त्र्यम्बके गौरि',
            english: 'Sharanye Tryambake Gauri',
            tts: 'Sharanye Tryambake Gauri',
            notes: [2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'नारायणि नमोऽस्तु ते ॥',
            english: 'Narayani Namostu Te',
            tts: 'Naaraayani Namostu Te',
            notes: [0, 2, 4, 2, 0, 0]
          }
        ]
      },
      ashtottara: {
        title: 'Gowri Ashtottara Namavali',
        type: 'Ashtottara',
        tempo: 'Easy Chant',
        melodyPattern: [0, 2, 4, 0],
        meaning: 'Sweet names of Goddess Gowri / Parvati for daily chanting.',
        lines: [
          { sanskrit: 'ॐ गौर्यै नमः', english: '1. Om Gauryai Namah', tts: 'Om Gauryai Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ पार्वत्यै नमः', english: '2. Om Parvatyai Namah', tts: 'Om Paarvatyai Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ उमायै नमः', english: '3. Om Umayai Namah', tts: 'Om Umaayai Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ शङ्कर्यै नमः', english: '4. Om Shankaryai Namah', tts: 'Om Shankaryai Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ भवान्यै नमः', english: '5. Om Bhavanyai Namah', tts: 'Om Bhavaanyai Namaha', notes: [4, 5, 7, 5, 4] },
          { sanskrit: 'ॐ अन्नपूर्णायै नमः', english: '6. Om Annapurnayai Namah', tts: 'Om Anna-poornaayai Namaha', notes: [4, 2, 0, 2, 0] },
          { sanskrit: 'ॐ ललितायै नमः', english: '7. Om Lalitayai Namah', tts: 'Om Lalitaayai Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ दुर्गायै नमः', english: '8. Om Durgayai Namah', tts: 'Om Durgaayai Namaha', notes: [2, 4, 2, 0, 0] },
          { sanskrit: 'ॐ मीनाक्ष्यै नमः', english: '9. Om Meenakshyai Namah', tts: 'Om Meenaakshyai Namaha', notes: [0, 4, 4, 2, 0] },
          { sanskrit: 'ॐ जगन्मात्रे नमः', english: '10. Om Jaganmatre Namah', tts: 'Om Jagan-maatre Namaha', notes: [4, 5, 4, 2, 0] }
        ]
      },
      song: {
        title: 'Ya Devi Sarva Bhuteshu (Devi Song)',
        type: 'Devi Song',
        tempo: 'Melodic Chant',
        melodyPattern: [0, 2, 4, 7, 5, 4, 2, 0],
        meaning: 'We bow again and again to the Divine Mother who lives in all beings as peace, kindness, and wisdom!',
        lines: [
          {
            sanskrit: 'या देवी सर्वभूतेषु मातृरूपेण संस्थिता ।',
            english: 'Ya Devi Sarva Bhuteshu, Matru Rupena Samsthita',
            tts: 'Yaa Devi Sarva Bhooteshu, Maatru Roopena Samsthitaa',
            notes: [0, 2, 4, 5, 7, 5, 4, 2]
          },
          {
            sanskrit: 'या देवी सर्वभूतेषु शान्तिरूपेण संस्थिता ।',
            english: 'Ya Devi Sarva Bhuteshu, Shanti Rupena Samsthita',
            tts: 'Yaa Devi Sarva Bhooteshu, Shaanti Roopena Samsthitaa',
            notes: [2, 4, 5, 7, 8, 7, 5, 4]
          },
          {
            sanskrit: 'नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ॥',
            english: 'Namastasyai Namastasyai Namastasyai Namo Namah',
            tts: 'Namastasyai, Namastasyai, Namastasyai Namo Namaha',
            notes: [4, 5, 4, 2, 0, -1, 0, 0]
          }
        ]
      }
    }
  },

  {
    id: 'lakshmi',
    name: 'Goddess Lakshmi',
    subtitle: 'Mahalakshmi • Prosperity & Light',
    badge: 'Om Jai Lakshmi Mata',
    themeColor: '#F59E0B',
    accentColor: '#FEF08A',
    bgGradient: 'linear-gradient(145deg, #451a03 0%, #92400e 55%, #d97706 100%)',
    rootFreq: 155.56, // D#3 / Eb3
    items: {
      mantra: {
        title: 'Om Shreem Mahalakshmyai Namah',
        type: 'Mantra',
        tempo: 'Golden Loop',
        melodyPattern: [0, 2, 4, 7, 4, 2, 0],
        meaning: 'Salutations to Goddess Mahalakshmi, who blesses our home with light, kindness, and abundance.',
        lines: [
          {
            sanskrit: 'ॐ श्रीं महालक्ष्म्यै नमः ॥',
            english: 'Om Shreem Mahalakshmyai Namah',
            tts: 'Om Shreem Mahaa-lakshmyai Namaha',
            notes: [0, 2, 4, 7, 5, 4, 2, 0]
          },
          {
            sanskrit: 'ॐ पद्मप्रियायै नमः ॥',
            english: 'Om Padmapriyayai Namah',
            tts: 'Om Padma-priyaayai Namaha',
            notes: [2, 4, 5, 4, 2, 0]
          }
        ]
      },
      stotra: {
        title: 'Mahalakshmi Ashtakam (1 Para)',
        type: 'Stotra',
        tempo: 'Easy to Learn',
        melodyPattern: [0, 2, 4, 5, 4, 2, 0],
        meaning: 'Greetings to Mother Mahalakshmi, seated on the lotus and holding the conch, disc, and mace—please bless us!',
        lines: [
          {
            sanskrit: 'नमस्तेऽस्तु महामाये',
            english: 'Namastestu Mahamaye',
            tts: 'Namastestu Mahaa-maaye',
            notes: [0, 2, 4, 4, 5, 4]
          },
          {
            sanskrit: 'श्रीपीठे सुरपूजिते ।',
            english: 'Shree Peethe Sura Poojite',
            tts: 'Shree Peethe Sura Poojite',
            notes: [4, 5, 7, 5, 4, 2]
          },
          {
            sanskrit: 'शङ्खचक्रगदाहस्ते',
            english: 'Shankha Chakra Gada Haste',
            tts: 'Shankha Chakra Gadaa Haste',
            notes: [2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'महालक्ष्मि नमोऽस्तु ते ॥',
            english: 'Mahalakshmi Namostu Te',
            tts: 'Mahaa-lakshmi Namostu Te',
            notes: [0, 2, 4, 2, 0, 0]
          }
        ]
      },
      ashtottara: {
        title: 'Lakshmi Ashtottara Namavali',
        type: 'Ashtottara',
        tempo: 'Rhythmic Chant',
        melodyPattern: [0, 2, 4, 0],
        meaning: 'Sacred names of Goddess Lakshmi sitting on a blooming lotus.',
        lines: [
          { sanskrit: 'ॐ प्रकृत्यै नमः', english: '1. Om Prakrityai Namah', tts: 'Om Prakrityai Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ विकृत्यै नमः', english: '2. Om Vikrityai Namah', tts: 'Om Vikrityai Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ विद्यायै नमः', english: '3. Om Vidyayai Namah', tts: 'Om Vidyaayai Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ कमलायै नमः', english: '4. Om Kamalayai Namah', tts: 'Om Kamalaayai Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ पद्मायै नमः', english: '5. Om Padmayai Namah', tts: 'Om Padmaayai Namaha', notes: [4, 5, 7, 5, 4] },
          { sanskrit: 'ॐ पद्मालयायै नमः', english: '6. Om Padmalayayai Namah', tts: 'Om Padmaalayaayai Namaha', notes: [4, 2, 0, 2, 0] },
          { sanskrit: 'ॐ श्रियै नमः', english: '7. Om Shriyai Namah', tts: 'Om Shriyai Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ हिरण्मय्यै नमः', english: '8. Om Hiranmayyai Namah', tts: 'Om Hiranmayyai Namaha', notes: [2, 4, 2, 0, 0] },
          { sanskrit: 'ॐ नारायण्यै नमः', english: '9. Om Narayanyai Namah', tts: 'Om Naaraayanyai Namaha', notes: [0, 4, 4, 2, 0] },
          { sanskrit: 'ॐ महालक्ष्म्यै नमः', english: '10. Om Mahalakshmyai Namah', tts: 'Om Mahaa-lakshmyai Namaha', notes: [4, 5, 4, 2, 0] }
        ]
      },
      song: {
        title: 'Om Jai Lakshmi Mata (Famous Aarti)',
        type: 'Aarti Song',
        tempo: 'Sing-Along Aarti',
        melodyPattern: [0, 2, 4, 5, 7, 5, 4, 2, 0],
        meaning: 'The famous Lakshmi Aarti sung in homes everywhere—Om Jai Lakshmi Mata!',
        lines: [
          {
            sanskrit: 'ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता ।',
            english: 'Om Jai Lakshmi Mata, Maiya Jai Lakshmi Mata',
            tts: 'Om Jai Lakshmi Maataa, Maiyaa Jai Lakshmi Maataa',
            notes: [0, 2, 4, 4, 5, 4, 2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'तुमको निशिदिन सेवत, हर विष्णु विधाता ॥',
            english: 'Tumko Nishidin Sevat, Hara Vishnu Vidhata',
            tts: 'Tumko Nishi-din Sevat, Hara Vishnu Vidhaataa',
            notes: [2, 4, 5, 7, 5, 4, 2, 4, 2, 0, 0]
          },
          {
            sanskrit: 'उमा रमा ब्रह्माणी, तुम ही जग माता ।',
            english: 'Uma Rama Brahmani, Tum Hi Jag Mata',
            tts: 'Umaa Ramaa Brahmaani, Tum Hi Jag Maataa',
            notes: [4, 4, 5, 7, 7, 5, 4, 5, 4, 2]
          },
          {
            sanskrit: 'सूर्य चन्द्रमा ध्यावत, नारद ऋषि गाता ॥',
            english: 'Surya Chandrama Dhyavat, Narad Rishi Gata',
            tts: 'Soorya Chandramaa Dhyaavat, Naarad Rishi Gaataa',
            notes: [2, 4, 5, 7, 5, 4, 2, 4, 2, 0]
          },
          {
            sanskrit: 'जिस घर में तुम रहतीं, सब सद्गुण आता ।',
            english: 'Jis Ghar Mein Tum Rahtin, Sab Sadgun Aata',
            tts: 'Jis Ghar Mein Tum Rahtin, Sab Sadgun Aataa',
            notes: [4, 4, 5, 7, 7, 5, 4, 5, 4, 2]
          },
          {
            sanskrit: 'सब सम्भव हो जाता, मन नहीं घबराता ॥',
            english: 'Sab Sambhav Ho Jata, Man Nahin Ghabrata',
            tts: 'Sab Sambhav Ho Jaataa, Man Nahin Ghabraataa',
            notes: [2, 4, 5, 4, 2, 0, -1, 0, 0]
          }
        ]
      }
    }
  },

  {
    id: 'krishna',
    name: 'Lord Krishna',
    subtitle: 'Gopala • Joy, Flute & Love',
    badge: '2 Famous Bhajans',
    themeColor: '#06B6D4',
    accentColor: '#FDE047',
    bgGradient: 'linear-gradient(145deg, #082f49 0%, #0369a1 55%, #0284c7 100%)',
    rootFreq: 146.83, // D3
    items: {
      mantra: {
        title: 'Hare Krishna Mahamantra',
        type: 'Mantra',
        tempo: 'Joyful Loop',
        melodyPattern: [0, 2, 4, 5, 4, 2, 0],
        meaning: 'The joyful Hare Krishna chant that kids love to clap and sing along to!',
        lines: [
          {
            sanskrit: 'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ।',
            english: 'Hare Krishna Hare Krishna, Krishna Krishna Hare Hare',
            tts: 'Hare Krishna Hare Krishna, Krishna Krishna Hare Hare',
            notes: [0, 2, 4, 5, 4, 2, 0, 2]
          },
          {
            sanskrit: 'हरे राम हरे राम राम राम हरे हरे ॥',
            english: 'Hare Rama Hare Rama, Rama Rama Hare Hare',
            tts: 'Hare Raama Hare Raama, Raama Raama Hare Hare',
            notes: [4, 5, 7, 5, 4, 2, 0, 0]
          }
        ]
      },
      stotra: {
        title: 'Vasudeva Sutam Devam (1 Para)',
        type: 'Stotra',
        tempo: 'Easy to Learn',
        melodyPattern: [0, 2, 4, 7, 4, 2, 0],
        meaning: 'I bow to Lord Krishna, beloved son of Vasudeva and joy of Mother Devaki, the supreme teacher of the world!',
        lines: [
          {
            sanskrit: 'वसुदेवसुतं देवं',
            english: 'Vasudeva Sutam Devam',
            tts: 'Vasudeva Sutam Devam',
            notes: [0, 2, 4, 4, 5, 4]
          },
          {
            sanskrit: 'कंसचाणूरमर्दनम् ।',
            english: 'Kamsa Chanura Mardanam',
            tts: 'Kamsa Chaanoova Mardanam',
            notes: [4, 5, 7, 5, 4, 2]
          },
          {
            sanskrit: 'देवकीपरमानन्दं',
            english: 'Devaki Paramanandam',
            tts: 'Devaki Paramaanandam',
            notes: [2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'कृष्णं वन्दे जगद्गुरुम् ॥',
            english: 'Krishnam Vande Jagadgurum',
            tts: 'Krishnam Vande Jagad-gurum',
            notes: [0, 2, 4, 2, 0, 0]
          }
        ]
      },
      ashtottara: {
        title: 'Krishna Ashtottara Namavali',
        type: 'Ashtottara',
        tempo: 'Sweet Chant',
        melodyPattern: [0, 2, 4, 0],
        meaning: 'Beloved names of little Krishna (Kanha, Govinda, Gopala, Madhava).',
        lines: [
          { sanskrit: 'ॐ श्रीकृष्णाय नमः', english: '1. Om Shri Krishnaya Namah', tts: 'Om Shree Krishnaaya Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ कमलानाथाय नमः', english: '2. Om Kamalanathaya Namah', tts: 'Om Kamalaa-naathaaya Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ वासुदेवाय नमः', english: '3. Om Vasudevaya Namah', tts: 'Om Vaasudevaaya Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ सनातनाय नमः', english: '4. Om Sanatanaya Namah', tts: 'Om Sanaatanaaya Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ देवकीनन्दनाय नमः', english: '5. Om Devakinandanaya Namah', tts: 'Om Devaki-nandanaaya Namaha', notes: [4, 5, 7, 5, 4] },
          { sanskrit: 'ॐ गोपालाय नमः', english: '6. Om Gopalaya Namah', tts: 'Om Gopaalaaya Namaha', notes: [4, 2, 0, 2, 0] },
          { sanskrit: 'ॐ गोविन्दाय नमः', english: '7. Om Govindaya Namah', tts: 'Om Govindaaya Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ माधवाय नमः', english: '8. Om Madhavaya Namah', tts: 'Om Maadhavaaya Namaha', notes: [2, 4, 2, 0, 0] },
          { sanskrit: 'ॐ मुरलीधराय नमः', english: '9. Om Muralidharaya Namah', tts: 'Om Murali-dharaaya Namaha', notes: [0, 4, 4, 2, 0] },
          { sanskrit: 'ॐ जगद्गुरवे नमः', english: '10. Om Jagadgurave Namah', tts: 'Om Jagad-gurave Namaha', notes: [4, 5, 4, 2, 0] }
        ]
      },
      song: {
        title: 'Achyutam Keshavam Krishna Damodaram',
        type: 'Famous Bhajan',
        tempo: 'Kids Sing-Along',
        melodyPattern: [0, 2, 4, 7, 5, 4, 2, 0],
        meaning: 'One of the sweetest and easiest Krishna songs in the world—sing along with every line!',
        lines: [
          {
            sanskrit: 'अच्युतं केशवं कृष्ण दामोदरं',
            english: 'Achyutam Keshavam Krishna Damodaram',
            tts: 'Achyutam Keshavam Krishna Daamodaram',
            notes: [0, 2, 4, 4, 5, 7, 5, 4, 2]
          },
          {
            sanskrit: 'राम नारायणं जानकी वल्लभम् ॥',
            english: 'Rama Narayanam Janaki Vallabham',
            tts: 'Raama Naaraayanam Jaanaki Vallabham',
            notes: [2, 4, 5, 4, 2, 0, -1, 0, 0]
          },
          {
            sanskrit: 'कौन कहते हैं भगवान आते नहीं',
            english: 'Kaun Kehte Hain Bhagwan Aate Nahin',
            tts: 'Kaun Kehte Hain Bhagwaan Aate Nahin',
            notes: [4, 5, 7, 7, 8, 7, 5, 4]
          },
          {
            sanskrit: 'तुम मीरा के जैसे बुलाते नहीं ॥',
            english: 'Tum Meera Ke Jaise Bulate Nahin',
            tts: 'Tum Meeraa Ke Jaise Bulaate Nahin',
            notes: [2, 4, 5, 4, 2, 0, -1, 0]
          },
          {
            sanskrit: 'कौन कहते हैं भगवान खाते नहीं',
            english: 'Kaun Kehte Hain Bhagwan Khate Nahin',
            tts: 'Kaun Kehte Hain Bhagwaan Khaate Nahin',
            notes: [4, 5, 7, 7, 8, 7, 5, 4]
          },
          {
            sanskrit: 'बेर शबरी के जैसे खिलाते नहीं ॥',
            english: 'Ber Shabari Ke Jaise Khilate Nahin',
            tts: 'Ber Shabari Ke Jaise Khilaate Nahin',
            notes: [2, 4, 5, 4, 2, 0, -1, 0]
          }
        ]
      },
      song2: {
        title: 'Shri Krishna Govinda Hare Murare',
        type: 'Famous Dhun',
        tempo: 'Peaceful Sing-Along',
        melodyPattern: [0, 4, 5, 7, 5, 4, 2, 0],
        meaning: 'Extremely famous and soothing Krishna dhun: O Shri Krishna, Govinda, Hare Murare, O He Natha Narayana Vasudeva!',
        lines: [
          {
            sanskrit: 'श्री कृष्ण गोविन्द हरे मुरारे',
            english: 'Shri Krishna Govinda Hare Murare',
            tts: 'Shree Krishna Govinda Hare Muraare',
            notes: [0, 4, 5, 7, 7, 8, 7, 5, 4]
          },
          {
            sanskrit: 'हे नाथ नारायण वासुदेवा ॥',
            english: 'He Natha Narayana Vasudeva',
            tts: 'He Naatha Naaraayana Vaasudevaa',
            notes: [4, 5, 7, 5, 4, 2, 0, 0]
          },
          {
            sanskrit: 'पितु मात स्वामी सखा हमारे',
            english: 'Pitu Mata Swami Sakha Hamare',
            tts: 'Pitu Maata Swaami Sakhaa Hamaare',
            notes: [4, 7, 7, 8, 7, 5, 4, 2]
          },
          {
            sanskrit: 'हे नाथ नारायण वासुदेवा ॥',
            english: 'He Natha Narayana Vasudeva',
            tts: 'He Naatha Naaraayana Vaasudevaa',
            notes: [2, 4, 5, 4, 2, 0, -1, 0]
          }
        ]
      }
    }
  },

  {
    id: 'vishnu',
    name: 'Lord Vishnu',
    subtitle: 'Narayana • Protector of All',
    badge: 'Om Jai Jagadish Hare',
    themeColor: '#6366F1',
    accentColor: '#FACC15',
    bgGradient: 'linear-gradient(145deg, #1e1b4b 0%, #3730a3 55%, #4f46e5 100%)',
    rootFreq: 136.1,
    items: {
      mantra: {
        title: 'Om Namo Narayanaya',
        type: 'Mantra',
        tempo: 'Peaceful Loop',
        melodyPattern: [0, 2, 4, 5, 4, 2, 0],
        meaning: 'I bow to Lord Narayana, the peaceful protector of the universe.',
        lines: [
          {
            sanskrit: 'ॐ नमो नारायणाय ॥',
            english: 'Om Namo Narayanaya',
            tts: 'Om Namo Naaraayanaaya',
            notes: [0, 2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'ॐ नमो भगवते वासुदेवाय ॥',
            english: 'Om Namo Bhagavate Vasudevaya',
            tts: 'Om Namo Bhagavate Vaasudevaaya',
            notes: [2, 4, 7, 5, 4, 2, 0]
          }
        ]
      },
      stotra: {
        title: 'Shantakaram Bhujagashayanam (1 Para)',
        type: 'Stotra',
        tempo: 'Easy to Learn',
        melodyPattern: [0, 2, 4, 7, 4, 2, 0],
        meaning: 'I bow to Lord Vishnu, whose form is peaceful, who rests on the cosmic serpent, has lotus eyes, and shines blue like the sky!',
        lines: [
          {
            sanskrit: 'शान्ताकारं भुजगशयनं',
            english: 'Shantakaram Bhujagashayanam',
            tts: 'Shaantaa-kaaram Bhujaga-shayanam',
            notes: [0, 2, 4, 4, 5, 4]
          },
          {
            sanskrit: 'पद्मनाभं सुरेशम् ।',
            english: 'Padmanabham Suresham',
            tts: 'Padma-naabham Suresham',
            notes: [4, 5, 7, 5, 4, 2]
          },
          {
            sanskrit: 'विश्वाधारं गगनसदृशं',
            english: 'Vishwadharam Gagana Sadrisham',
            tts: 'Vishwaa-dhaaram Gagana Sadrisham',
            notes: [2, 4, 5, 7, 5, 4]
          },
          {
            sanskrit: 'मेघवर्णं शुभाङ्गम् ।',
            english: 'Meghavarnam Shubhangam',
            tts: 'Megha-varnam Shubhaangam',
            notes: [4, 2, 0, 2, 4, 2]
          },
          {
            sanskrit: 'वन्दे विष्णुं भवभयहरं',
            english: 'Vande Vishnum Bhava Bhaya Haram',
            tts: 'Vande Vishnum Bhava Bhaya Haram',
            notes: [2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'सर्वलोकैकनाथम् ॥',
            english: 'Sarva Lokaika Natham',
            tts: 'Sarva Lokaika Naatham',
            notes: [0, 2, 4, 2, 0, 0]
          }
        ]
      },
      ashtottara: {
        title: 'Vishnu Ashtottara Namavali',
        type: 'Ashtottara',
        tempo: 'Rhythmic Chant',
        melodyPattern: [0, 2, 4, 0],
        meaning: 'Ten supreme names of Lord Vishnu that protect and bless everyone.',
        lines: [
          { sanskrit: 'ॐ विष्णवे नमः', english: '1. Om Vishnave Namah', tts: 'Om Vishnave Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ लक्ष्मीपतये नमः', english: '2. Om Lakshmipataye Namah', tts: 'Om Lakshmi-pataye Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ नारायणाय नमः', english: '3. Om Narayanaya Namah', tts: 'Om Naaraayanaaya Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ पद्मनाभाय नमः', english: '4. Om Padmanabhaya Namah', tts: 'Om Padma-naabhaaya Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ केशवाय नमः', english: '5. Om Keshavaya Namah', tts: 'Om Keshavaaya Namaha', notes: [4, 5, 7, 5, 4] },
          { sanskrit: 'ॐ दामोदराय नमः', english: '6. Om Damodaraya Namah', tts: 'Om Daamodaraaya Namaha', notes: [4, 2, 0, 2, 0] },
          { sanskrit: 'ॐ अच्युताय नमः', english: '7. Om Achyutaya Namah', tts: 'Om Achyutaaya Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ जनार्दनाय नमः', english: '8. Om Janardanaya Namah', tts: 'Om Janaardanaaya Namaha', notes: [2, 4, 2, 0, 0] },
          { sanskrit: 'ॐ श्रीधराय नमः', english: '9. Om Shridharaya Namah', tts: 'Om Shree-dharaaya Namaha', notes: [0, 4, 4, 2, 0] },
          { sanskrit: 'ॐ हृषीकेशाय नमः', english: '10. Om Hrishikeshaya Namah', tts: 'Om Hrishikeshaaya Namaha', notes: [4, 5, 4, 2, 0] }
        ]
      },
      song: {
        title: 'Om Jai Jagadish Hare (Famous Aarti)',
        type: 'Aarti Song',
        tempo: 'Universal Aarti',
        melodyPattern: [0, 2, 4, 5, 7, 5, 4, 2, 0],
        meaning: 'The most famous Hindu Aarti song sung in every temple and home—Om Jai Jagadish Hare!',
        lines: [
          {
            sanskrit: 'ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे ।',
            english: 'Om Jai Jagadish Hare, Swami Jai Jagadish Hare',
            tts: 'Om Jai Jagadeesh Hare, Swaami Jai Jagadeesh Hare',
            notes: [0, 2, 4, 4, 5, 4, 2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'भक्त जनों के संकट, दास जनों के संकट, क्षण में दूर करे ॥',
            english: 'Bhakt Janon Ke Sankat, Kshan Mein Door Kare',
            tts: 'Bhakt Janon Ke Sankat, Kshan Mein Door Kare',
            notes: [2, 4, 5, 7, 5, 4, 2, 4, 2, 0, 0]
          },
          {
            sanskrit: 'जो ध्यावे फल पावे, दुःख बिनसे मन का ।',
            english: 'Jo Dhyave Phal Pave, Duhkh Binse Man Ka',
            tts: 'Jo Dhyaave Phal Paave, Duhkh Binse Man Kaa',
            notes: [4, 4, 5, 7, 7, 5, 4, 5, 4, 2]
          },
          {
            sanskrit: 'सुख सम्पत्ति घर आवे, कष्ट मिटे तन का ॥',
            english: 'Sukh Sampatti Ghar Aave, Kasht Mite Tan Ka',
            tts: 'Sukh Sampatti Ghar Aave, Kasht Mite Tan Kaa',
            notes: [2, 4, 5, 7, 5, 4, 2, 4, 2, 0]
          },
          {
            sanskrit: 'मात पिता तुम मेरे, शरण गहूँ किसकी ।',
            english: 'Mata Pita Tum Mere, Sharan Gahun Kiski',
            tts: 'Maata Pitaa Tum Mere, Sharan Gahoon Kiski',
            notes: [4, 4, 5, 7, 7, 5, 4, 5, 4, 2]
          },
          {
            sanskrit: 'तुम बिन और न दूजा, आस करूँ जिसकी ॥',
            english: 'Tum Bin Aur Na Dooja, Aas Karun Jiski',
            tts: 'Tum Bin Aur Na Doojaa, Aas Karoon Jiski',
            notes: [2, 4, 5, 4, 2, 0, -1, 0, 0]
          }
        ]
      }
    }
  },

  {
    id: 'hanuman',
    name: 'Lord Hanuman',
    subtitle: 'Bajrangbali • Courage & Devotion',
    badge: 'Kids Hero',
    themeColor: '#EA580C',
    accentColor: '#FDBA74',
    bgGradient: 'linear-gradient(145deg, #431407 0%, #9a3412 55%, #ea580c 100%)',
    rootFreq: 146.83,
    items: {
      mantra: {
        title: 'Om Sri Hanumate Namah',
        type: 'Mantra',
        tempo: 'Strong Loop',
        melodyPattern: [0, 2, 4, 7, 4, 2, 0],
        meaning: 'Salutations to mighty Hanuman, who gives kids courage, strength, and fearlessness!',
        lines: [
          {
            sanskrit: 'ॐ श्री हनुमते नमः ॥',
            english: 'Om Sri Hanumate Namah',
            tts: 'Om Shree Hanumate Namaha',
            notes: [0, 2, 4, 7, 5, 4, 2, 0]
          },
          {
            sanskrit: 'जय बजरंगबली, जय श्री राम ॥',
            english: 'Jai Bajrangbali, Jai Shri Ram',
            tts: 'Jai Bajrang-bali, Jai Shree Raam',
            notes: [4, 5, 7, 5, 4, 2, 0]
          }
        ]
      },
      stotra: {
        title: 'Manojavam Marutatulyavegam (1 Para)',
        type: 'Stotra',
        tempo: 'Easy for Kids',
        melodyPattern: [0, 2, 4, 5, 4, 2, 0],
        meaning: 'Swift as the mind and fast as the wind, wise and brave messenger of Lord Rama—I bow to Lord Hanuman!',
        lines: [
          {
            sanskrit: 'मनोजवं मारुततुल्यवेगं',
            english: 'Manojavam Maruta Tulya Vegam',
            tts: 'Mano-javam Maaruta Tulya Vegam',
            notes: [0, 2, 4, 4, 5, 4]
          },
          {
            sanskrit: 'जितेन्द्रियं बुद्धिमतां वरिष्ठम् ।',
            english: 'Jitendriyam Buddhimatam Varishtham',
            tts: 'Jitendriyam Buddhi-mataam Varishtham',
            notes: [4, 5, 7, 5, 4, 2]
          },
          {
            sanskrit: 'वातात्मजं वानरयूथमुख्यं',
            english: 'Vatatmajam Vanara Yutha Mukhyam',
            tts: 'Vaataatmajam Vaanara Yootha Mukhyam',
            notes: [2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'श्रीरामदूतं शरणं प्रपद्ये ॥',
            english: 'Shri Rama Dutam Sharanam Prapadye',
            tts: 'Shree Raama Dootam Sharanam Prapadye',
            notes: [0, 2, 4, 2, 0, 0]
          }
        ]
      },
      ashtottara: {
        title: 'Hanuman Ashtottara Namavali',
        type: 'Ashtottara',
        tempo: 'Heroic Chant',
        melodyPattern: [0, 2, 4, 0],
        meaning: 'Brave and sacred names of Anjaneya (Lord Hanuman).',
        lines: [
          { sanskrit: 'ॐ आञ्जनेयाय नमः', english: '1. Om Anjaneyaya Namah', tts: 'Om Aanjaneyaaya Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ महावीराय नमः', english: '2. Om Mahaviraya Namah', tts: 'Om Mahaa-veeraaya Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ हनुमते नमः', english: '3. Om Hanumate Namah', tts: 'Om Hanumate Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ मारुतात्मजाय नमः', english: '4. Om Marutatmajaya Namah', tts: 'Om Maarutaatmajaaya Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ रामदूताय नमः', english: '5. Om Ramadutaya Namah', tts: 'Om Raama-dootaaya Namaha', notes: [4, 5, 7, 5, 4] },
          { sanskrit: 'ॐ केसरीनन्दनाय नमः', english: '6. Om Kesarinandanaya Namah', tts: 'Om Kesari-nandanaaya Namaha', notes: [4, 2, 0, 2, 0] },
          { sanskrit: 'ॐ महाबलाय नमः', english: '7. Om Mahabalaya Namah', tts: 'Om Mahaa-balaaya Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ चिरञ्जीविने नमः', english: '8. Om Chiranjivine Namah', tts: 'Om Chiranjeevine Namaha', notes: [2, 4, 2, 0, 0] },
          { sanskrit: 'ॐ पिङ्गाक्षाय नमः', english: '9. Om Pingakshaya Namah', tts: 'Om Pingaakshaaya Namaha', notes: [0, 4, 4, 2, 0] },
          { sanskrit: 'ॐ सर्वग्रहविनाशिने नमः', english: '10. Om Sarva Graha Vinashine Namah', tts: 'Om Sarva Graha Vinaashine Namaha', notes: [4, 5, 4, 2, 0] }
        ]
      },
      song: {
        title: 'Raghupati Raghava Raja Ram (Bhajan)',
        type: 'Famous Bhajan',
        tempo: 'Clap & Sing',
        melodyPattern: [0, 2, 4, 5, 7, 5, 4, 2, 0],
        meaning: 'Lord Hanuman’s favorite Ram Dhun that every child can clap and sing along with!',
        lines: [
          {
            sanskrit: 'रघुपति राघव राजाराम',
            english: 'Raghupati Raghava Raja Ram',
            tts: 'Raghupati Raaghava Raajaa Raam',
            notes: [0, 2, 4, 5, 7, 7, 5, 4]
          },
          {
            sanskrit: 'पतित पावन सीताराम ॥',
            english: 'Patita Pavana Sita Ram',
            tts: 'Patita Paavana Seetaa Raam',
            notes: [4, 5, 7, 5, 4, 2, 0, 0]
          },
          {
            sanskrit: 'सीताराम जय सीताराम',
            english: 'Sita Ram Jai Sita Ram',
            tts: 'Seetaa Raam, Jai Seetaa Raam',
            notes: [4, 7, 7, 8, 7, 5, 4]
          },
          {
            sanskrit: 'भज प्यारे तू सीताराम ॥',
            english: 'Bhaj Pyare Tu Sita Ram',
            tts: 'Bhaj Pyaare Too Seetaa Raam',
            notes: [2, 4, 5, 4, 2, 0, -1, 0]
          }
        ]
      }
    }
  },

  {
    id: 'guru',
    name: 'Sri Guru',
    subtitle: 'Dakshinamurthy • Knowledge & Light',
    badge: 'Gurur Brahma',
    themeColor: '#10B981',
    accentColor: '#A7F3D0',
    bgGradient: 'linear-gradient(145deg, #064e3b 0%, #047857 55%, #059669 100%)',
    rootFreq: 136.1,
    items: {
      mantra: {
        title: 'Om Sri Gurave Namah',
        type: 'Mantra',
        tempo: 'Peaceful Loop',
        melodyPattern: [0, 2, 4, 7, 4, 2, 0],
        meaning: 'We bow to the Guru, who teaches us wisdom and guides us from darkness to light.',
        lines: [
          {
            sanskrit: 'ॐ श्री गुरवे नमः ॥',
            english: 'Om Sri Gurave Namah',
            tts: 'Om Shree Gurave Namaha',
            notes: [0, 2, 4, 7, 5, 4, 2, 0]
          },
          {
            sanskrit: 'ॐ श्री दक्षिणामूर्तये नमः ॥',
            english: 'Om Sri Dakshinamurtaye Namah',
            tts: 'Om Shree Dakshinaa-moortaye Namaha',
            notes: [2, 4, 5, 4, 2, 0]
          }
        ]
      },
      stotra: {
        title: 'Gurur Brahma Gurur Vishnu (1 Para)',
        type: 'Stotra',
        tempo: 'Every Kid Knows',
        melodyPattern: [0, 2, 4, 5, 4, 2, 0],
        meaning: 'The Guru is like Brahma, Vishnu, and Maheshwara—we bow to the respected Teacher who gives us knowledge!',
        lines: [
          {
            sanskrit: 'गुरुर्ब्रह्मा गुरुर्विष्णुः',
            english: 'Gurur Brahma Gurur Vishnuh',
            tts: 'Gurur Brahmaa, Gurur Vishnuhu',
            notes: [0, 2, 4, 4, 5, 4]
          },
          {
            sanskrit: 'गुरुर्देवो महेश्वरः ।',
            english: 'Gurur Devo Maheshwarah',
            tts: 'Gurur Devo Maheshwaraha',
            notes: [4, 5, 7, 5, 4, 2]
          },
          {
            sanskrit: 'गुरुः साक्षात् परब्रह्म',
            english: 'Guruh Sakshat Parabrahma',
            tts: 'Guruhu Saakshaat Para-brahma',
            notes: [2, 4, 5, 4, 2, 0]
          },
          {
            sanskrit: 'तस्मै श्रीगुरवे नमः ॥',
            english: 'Tasmai Shri Gurave Namah',
            tts: 'Tasmai Shree Gurave Namaha',
            notes: [0, 2, 4, 2, 0, 0]
          }
        ]
      },
      ashtottara: {
        title: 'Guru Ashtottara Namavali',
        type: 'Ashtottara',
        tempo: 'Rhythmic Chant',
        melodyPattern: [0, 2, 4, 0],
        meaning: 'Sacred names of the Supreme Teacher (Sadguru / Dakshinamurthy).',
        lines: [
          { sanskrit: 'ॐ सद्गुरवे नमः', english: '1. Om Sadgurave Namah', tts: 'Om Sadgurave Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ ज्ञानदात्रे नमः', english: '2. Om Jnanadatre Namah', tts: 'Om Gyaana-daatre Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ दक्षिणामूर्तये नमः', english: '3. Om Dakshinamurtaye Namah', tts: 'Om Dakshinaa-moortaye Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ दयानिधये नमः', english: '4. Om Dayanidhaye Namah', tts: 'Om Dayaa-nidhaye Namaha', notes: [2, 4, 5, 4, 2] },
          { sanskrit: 'ॐ अज्ञाननाशकाय नमः', english: '5. Om Ajnana Nashakaya Namah', tts: 'Om Agyaana Naashakaaya Namaha', notes: [4, 5, 7, 5, 4] },
          { sanskrit: 'ॐ विद्यास्वरूपिणे नमः', english: '6. Om Vidya Swaroopine Namah', tts: 'Om Vidyaa Swaroopine Namaha', notes: [4, 2, 0, 2, 0] },
          { sanskrit: 'ॐ शान्तमूर्तये नमः', english: '7. Om Shantamurtaye Namah', tts: 'Om Shaanta-moortaye Namaha', notes: [0, 2, 4, 2, 0] },
          { sanskrit: 'ॐ आनन्ददायकाय नमः', english: '8. Om Anandadayakaya Namah', tts: 'Om Aananda-daayakaaya Namaha', notes: [2, 4, 2, 0, 0] },
          { sanskrit: 'ॐ परमहंसाय नमः', english: '9. Om Paramahamsaya Namah', tts: 'Om Parama-hamsaaya Namaha', notes: [0, 4, 4, 2, 0] },
          { sanskrit: 'ॐ जगद्गुरवे नमः', english: '10. Om Jagadgurave Namah', tts: 'Om Jagad-gurave Namaha', notes: [4, 5, 4, 2, 0] }
        ]
      },
      song: {
        title: 'Jaya Guru Omkara (Famous Bhajan)',
        type: 'Guru Song',
        tempo: 'Peaceful Sing-Along',
        melodyPattern: [0, 2, 4, 7, 5, 4, 2, 0],
        meaning: 'A joyful, rhythmic Guru bhajan celebrating the light of wisdom.',
        lines: [
          {
            sanskrit: 'जय गुरु ओंकारा जय जय सद्गुरु ओंकारा ॐ ।',
            english: 'Jaya Guru Omkara, Jaya Jaya Sadguru Omkara Om',
            tts: 'Jaya Guru Omkaaraa, Jaya Jaya Sadguru Omkaaraa Om',
            notes: [0, 2, 4, 5, 7, 5, 4, 2, 0]
          },
          {
            sanskrit: 'ब्रह्मा विष्णु सदाशिव हर हर हर हर महादेवा ॥',
            english: 'Brahma Vishnu Sadashiva, Hara Hara Hara Hara Mahadeva',
            tts: 'Brahmaa Vishnu Sadaashiva, Hara Hara Hara Hara Mahaadevaa',
            notes: [4, 5, 7, 8, 7, 5, 4, 2, 0]
          }
        ]
      }
    }
  }
];
