export interface Story {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  genre: string;
  publishedAt: string;
  readTime: string;
  likes: number;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
}

export const mockStories: Story[] = [
  {
    id: '1',
    title: 'The Last Light of Aethermoor',
    author: 'Elena Nightwhisper',
    excerpt: 'In a realm where magic flows like rivers and darkness threatens to consume all light, a young mage discovers an ancient prophecy that could save—or doom—their world forever.',
    content: `The crystalline towers of Aethermoor gleamed like frozen starlight against the perpetual twilight sky. Lyra pressed her palm against the cold stone of her windowsill, watching as the last remnants of the Great Light flickered in the distance like a dying candle.\n\n"The Council will never believe you," came a voice from behind her. She turned to see Master Aldric, his weathered face etched with concern. His robes, once a brilliant azure, had faded to the color of stormy seas.\n\n"They must," Lyra whispered, her fingers tracing the ancient runes carved into the prophecy scroll. "The Shadow Realm grows stronger with each passing day. If we don't act now, there will be nothing left to save."\n\nThe prophecy spoke of a choice—one that would determine the fate of all magical realms. As the chosen vessel of the Ancient Light, Lyra knew the burden fell to her. But the cost... the cost would be everything she held dear.\n\nOutside, the darkness pressed closer, and somewhere in its depths, something ancient and hungry stirred. Time was running out, and the last light of Aethermoor was fading fast.`,
    genre: 'Fantasy',
    publishedAt: '2 days ago',
    readTime: '8 min',
    likes: 847
  },
  {
    id: '2',
    title: 'Echoes of Tomorrow',
    author: 'Marcus Chen',
    excerpt: 'When Dr. Sarah Kim receives mysterious signals from the future, she must decide whether to prevent a catastrophe or preserve the timeline that made her discovery possible.',
    content: `The quantum resonance chamber hummed with an otherworldly frequency as Dr. Sarah Kim adjusted the temporal displacement parameters. Three months of sleepless nights had led to this moment—the first successful attempt at receiving communications from the future.\n\n"Computer, begin recording," she said, her voice steady despite the tremor in her hands. The holographic display flickered to life, showing waveforms that defied conventional physics.\n\nThe message, when it finally came through, was her own voice: "Sarah, you must not prevent the earthquake. Paradox Protocol Seven. Trust the process."\n\nBut Sarah knew about the earthquake. Her calculations showed it would devastate the West Coast in exactly forty-seven days. How could her future self ask her to let millions die?\n\nAs she wrestled with the impossible choice, strange anomalies began appearing throughout the lab. Time itself seemed to be unraveling, and Sarah realized that some echoes from tomorrow were never meant to be heard.\n\nThe weight of the future—and the lives it contained—rested in her hands. But which future was the right one to choose?`,
    genre: 'Science Fiction',
    publishedAt: '5 days ago',
    readTime: '6 min',
    likes: 623
  },
  {
    id: '3',
    title: 'The Midnight Library\'s Secret',
    author: 'Isabella Thornfield',
    excerpt: 'Librarian Emma discovers that the old books in her care contain portals to other worlds, and someone—or something—is using them to cross into ours.',
    content: `The grandfather clock struck midnight as Emma Waters locked the main doors of the Holloway Public Library. She'd been the night librarian for three years, but tonight felt different. The shadows seemed deeper, and the ancient books in the restricted section whispered secrets she couldn't quite hear.\n\nIt started with a single book—a leather-bound tome titled "Chronicles of the Inbetween." When Emma opened it, the pages glowed with soft, ethereal light, and the words seemed to move across the paper like living things.\n\nSuddenly, she wasn't in the library anymore. She stood in a vast forest where silver trees reached toward twin moons, and the air shimmered with magic. A figure approached from the treeline—tall, elegant, with eyes like starlight.\n\n"Finally," the stranger said, "someone who can see. We've been waiting so long for a guardian who could cross the threshold."\n\nEmma learned that every book in the restricted section was a doorway, and she was the key. But doorways work both ways, and something dark had been using them to slip into her world, one page at a time.\n\nNow she had to choose: close the portals forever and lose the magic, or become the guardian between worlds and risk everything she'd ever known.\n\nThe midnight library held more secrets than she'd ever imagined, and Emma was about to become part of the greatest story ever told.`,
    genre: 'Mystery',
    publishedAt: '1 week ago',
    readTime: '10 min',
    likes: 934
  },
  {
    id: '4',
    title: 'Hearts Across the Universe',
    author: 'David Starling',
    excerpt: 'Captain Zoe Martinez never expected to fall in love during a routine mission to the edge of known space, especially not with someone from a species humanity had never encountered.',
    content: `The Starship Endeavor drifted silently through the Helix Nebula, its hull gleaming against the cosmic tapestry of swirling gases and distant stars. Captain Zoe Martinez stood on the bridge, watching the sensor readings with growing concern.\n\n"Captain, we're receiving a distress signal," Lieutenant Torres reported. "Unknown origin, but... it's beautiful. Like music."\n\nThe rescue mission led them to a damaged vessel unlike anything in Earth's databases. Its curves were organic, almost alive, and it pulsed with bioluminescent light. When they boarded, Zoe encountered Kai—a being of ethereal beauty whose species communicated through harmonics that resonated directly with human emotions.\n\nWhat began as a diplomatic first contact became something deeper when Zoe realized that Kai's people were dying, their planet consumed by a cosmic phenomenon. As she worked to help them find a new home, she discovered that love truly was the universal language.\n\nBut when Earth Command ordered her to abandon the mission and return home, Zoe faced an impossible choice: duty to her species, or love that transcended the stars themselves.\n\nIn the vast emptiness of space, two hearts found each other against all odds. Now they had to decide if love was worth fighting the entire universe for.`,
    genre: 'Romance',
    publishedAt: '3 days ago',
    readTime: '7 min',
    likes: 456
  },
  {
    id: '5',
    title: 'The Memory Thief',
    author: 'Rachel Storm',
    excerpt: 'In a world where memories can be stolen and sold, detective Maya Chen must catch a thief who is erasing people\'s most precious moments—including her own.',
    content: `The neural interface clinic gleamed with sterile efficiency as Detective Maya Chen examined the latest victim. Mrs. Patterson sat in the recovery chair, her eyes vacant and confused, staring at photographs of children she could no longer remember.\n\n"It's the same pattern," Dr. Reeves explained, his voice heavy with frustration. "Selective memory extraction. Whoever's doing this knows exactly which memories to take and which to leave behind."\n\nMaya touched the data pad clipped to her belt—her own backup memories, a precaution every smart cop took in the age of neural crime. But as she investigated deeper into the underground memory market, she realized the thief wasn't just stealing at random.\n\nEvery victim had been connected to the Meridian Corporation, the same company where Maya's partner had died five years ago in what was ruled an accident. The memories being stolen all contained fragments of evidence that could expose a massive conspiracy.\n\nBut when Maya woke up one morning unable to remember her partner's face, she knew the Memory Thief had found her. Now she was racing against time to solve the case before she forgot why it mattered in the first place.\n\nIn a world where memories could be bought and sold, Maya discovered that some things were worth more than money—they were worth fighting for, even if she couldn't remember why.`,
    genre: 'Thriller',
    publishedAt: '4 days ago',
    readTime: '9 min',
    likes: 712
  },
  {
    id: '6',
    title: 'The Haunting of Millfield Manor',
    author: 'Vincent Blackwood',
    excerpt: 'When paranormal investigator Dr. Emily Carter arrives at the abandoned Millfield Manor, she expects to debunk another ghost story. Instead, she finds herself trapped in a nightmare that challenges everything she believes about life and death.',
    content: `The iron gates of Millfield Manor creaked open with a sound like grinding bones as Dr. Emily Carter drove up the overgrown driveway. Forty years the mansion had stood empty, ever since the tragic fire that claimed the Millfield family. Forty years of ghost stories and local legends.\n\nEmily had debunked over a hundred supposed hauntings in her career as a paranormal investigator. She came armed with electromagnetic field detectors, thermal cameras, and a healthy dose of scientific skepticism. What she hadn't expected was for the house to start changing around her.\n\nThe first night, doors appeared where walls had been. Rooms rearranged themselves when she wasn't looking. The temperature dropped twenty degrees in seconds, and her equipment registered readings that defied explanation.\n\nThen she heard the children singing.\n\nThe melody drifted through the halls like smoke, a lullaby that made her skin crawl. When she followed the sound to the burned wing of the house, she found them—three small figures standing in a room that shouldn't exist, their faces obscured by shadow.\n\n"Welcome home, Dr. Carter," they said in unison. "We've been waiting for someone who could see us clearly. Now you can help us tell our story."\n\nBut as Emily delved deeper into the manor's dark history, she discovered that some stories were better left untold, and some doors were never meant to be opened.\n\nThe dead, she learned, don't always rest in peace. Sometimes they want revenge.`,
    genre: 'Horror',
    publishedAt: '6 days ago',
    readTime: '11 min',
    likes: 589
  }
];

export const mockComments: Comment[] = [
  {
    id: '1',
    author: 'BookLover23',
    content: 'This story gave me chills! The way you describe the magical realm is absolutely breathtaking. I could visualize every detail of Aethermoor. Can\'t wait to see what happens to Lyra next!',
    timestamp: '2 hours ago',
    likes: 12
  },
  {
    id: '2',
    author: 'FantasyFan88',
    content: 'Elena has such a unique writing style. The character development is incredible, and the world-building is top-notch. This feels like it could be the beginning of an epic series!',
    timestamp: '5 hours ago',
    likes: 8
  },
  {
    id: '3',
    author: 'StorySeeker',
    content: 'I love how you\'ve balanced the mystery elements with the emotional core of the story. The relationship between Lyra and Master Aldric feels so authentic and adds real depth to the narrative.',
    timestamp: '1 day ago',
    likes: 15
  },
  {
    id: '4',
    author: 'ReaderInTheDark',
    content: 'The prophecy aspect is fascinating! I have so many theories about what the "choice" might be. The way you\'ve set up the stakes makes every word feel important.',
    timestamp: '1 day ago',
    likes: 6
  }
];