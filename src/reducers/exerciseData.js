const ExerciseData = [
    [
      {text: 'Great work! You completed Move Awareness.', video: '',
      emoji: '0x1f601'}
      ], //Level: 0, Round: 0
    [
      {text: 'The first two moves you will learn are Push vs Pull. Select which' +
      ' move you think it is based on the text and media.',
      video: '', emoji: 1, correctAnswer: ''}, //Round 0 [1][0]
      {text: 'Please take out the trash.', video: '', emoji: '0x1f610',
      correctAnswer: 'push'}, //Round 1 [1][1]
      {text: 'Does it work if I do the dishes while you garden so we can relax'
      + 'later?', video: '', emoji: '0x1F60a', correctAnswer: 'pull'}
      ], //////////////// End Level 1 [1][2]
    [
      {text: 'The next two moves you will learn are Pain vs Please. Select which'
       + ' move you think it is based on the text and media.',
      video: '', emoji: 2, correctAnswer: ''}, //Round 0 [2][0]
      {text: 'You\'re late!', video: '', emoji: '0x1f620',
      correctAnswer: 'pain'}, //Round 1 [1][1]
      {text: 'You look great!', video: '', emoji: '0x1f601',
      correctAnswer: 'please'}
      ], //////////////// End Level 2 [2]
    [
      {text: 'The next two moves you will learn are Pause and Place. Select'
      + ' which move you think it is based on the text and media.', video: '',
      emoji: 3, correctAnswer: ''},
      {text: 'Let\'s talk about this later.', video: '', emoji: '0x1f60f',
      correctAnswer: 'pause'},
      {text: 'I\'m so excited our anniversary is coming up.', video:'',
      emoji:'0x1f601', correctAnswer:'place'}
      ],//Level 3[3]
    [
      {text: 'The next two moves you will learn are Push vs. Pain.'
      + ' Select which move you think it is based on the text and media.',
      video:'', emoji:4, correctAnswer:''},
      {text: 'I need to get by.', video:'', emoji:'0x1f610',
      correctAnswer:'push'},
      {text: 'Watch it!', video:'', emoji:'0x1f620', correctAnswer:'pain'}
      ],//Level 4 [4]
    [
      {text: 'The next two moves you will learn are Pull vs. Please. Select'
      + ' which move you think it is based on the text and media.', video:'',
      emoji:5, correctAnswer:''},
      {text: 'I\'m so glad you called.', video:'', emoji:'0x1f601',
      correctAnswer:'please'},
      {text: 'If you have the time it would help me feel better to talk.',
      video:'', emoji:'0x1f60f',
      correctAnswer:'pull'}
      ],//Level 5 [5]
    [
      {text: 'The next two moves you will learn are Pause vs. Pain. Select which'
      + ' move you think it is based on the text and media.', video:'',
      emoji:6, correctAnswer:''},
      {text: 'Let\'s table this discussion.', video:'', emoji:'0x1f610',
      correctAnswer:'pause'},
      {text: 'What is wrong with you?', video:'', emoji:'0x1f620',
      correctAnswer:'pain'}
      ],//Level 6 [6]
    [
      {text: 'The next two moves you will learn are Push vs. Place. Select which'
      + ' move you think it is based on the text and media.', video:'',
      emoji:7, correctAnswer:''},
      {text: 'I think we might be late.', video:'', emoji:'0x1f60a',
      correctAnswer:'place'},
      {text: 'Hurry up!', video:'', emoji:'0x1f610', correctAnswer:'push'}
      ],//Level 7 [7]
    [
      {text: 'The next two moves you will learn are Place vs. Pull. Select which'
      + ' move you think it is based on the text and media.', video:'',
      emoji:8, correctAnswer:''},
      {text: 'I\'m running out of pieces.', video:'', emoji:'0x1f641',
      correctAnswer:'place'},
      {text: 'If you can share, I\'d love that.', video:'', emoji:'0x1f60a',
      correctAnswer:'pull'}
      ],//Level 8 [8]
    [
      {text: 'The next two moves you will learn are Place vs. Pain. Select which'
      + ' move you think it is based on the text and media.', video:'',
      emoji:9, correctAnswer:''},
      {text: 'I\'m not sure I\'m getting this.', video:'', emoji:'0x1f914',
      correctAnswer:'place'},
      {text: 'What\'s your point?', video:'', emoji:'0x1f610',
      correctAnswer:'pain'}
      ],//Level 9 [9]
    [
      {text: 'The next several exercises involve three moves. The first three'
      + ' are Place vs. Pain vs. Please. Select which move you think it is based on'
      +' the text and media.', video:'', emoji:10, correctAnswer:''},
      {text: 'What made you change your mind?', video:'', emoji:'0x1f914',
      correctAnswer:'place'},
      {text: 'I love you.', video:'', emoji:'0x1f60a', correctAnswer:'please'}
      ],//Level 10 [10]
    [
      {text: 'This exercise involves three moves. They are'
      + ' are Place vs. Please vs. Push. Select which move you think it is based on'
      + ' the text and media.', video:'', emoji:11, correctAnswer:''},
      {text: 'What made you change your mind?', video:'', emoji:'0x1f914',
      correctAnswer:'place'},
      {text: 'I love you.', video:'', emoji:'0x1f60a', correctAnswer:'please'}
      ],//Level 11 [11]
    [
      {text: 'This exercise involves three moves. The first three'
      + ' are Pause vs. Place vs. Push. Select which move you think it is based on'
      + ' the text and media.', video:'', emoji:12, correctAnswer:''},
      {text: 'Relax', video:'', emoji:'0x1f610',
      correctAnswer:'push'},
      {text: 'I don\'t know, I\'ll have to get back to you.', video:'',
      emoji:'0x1f914', correctAnswer:'pause'}
      ],//Level 12 [12]
    [
      {text: 'This exercise involves three moves. The first three'
      + ' are Place vs. Push vs. Pain. Select which move you think it is based on'
      + ' the text and media.', video:'', emoji:13, correctAnswer:''},
      {text: 'We need to get going.', video:'', emoji:'0x1f641',
      correctAnswer:'push'},
      {text: 'Don\'t forget, like you usually do.', video:'',
      emoji:'0x1f610', correctAnswer:'pain'}
    ],//Level 13
    [
      {text: 'This exercise involves three moves. The first three'
      + ' are Place vs. Please vs. Pull. Select which move you think it is based on'
      + ' the text and media.', video:'', emoji:14, correctAnswer:''},
      {text: 'We need to get going.', video:'', emoji:'0x1f60a',
      correctAnswer:'place'},
      {text: 'Don\'t forget the ice cream!', video:'',
      emoji:'0x1f60a', correctAnswer:'pull'}
    ],//Level 14
    [
      {text: 'This exercise involves three moves. The first three'
      + ' are Pause vs. Push vs. Pain. Select which move you think it is based on'
      + ' the text and media.', video:'', emoji:15, correctAnswer:''},
      {text: 'Hello?(sarcastic)', video:'', emoji:'0x1f620',
      correctAnswer:'pain'},
      {text: 'It\'s my turn.', video:'',
      emoji:'0x1f610', correctAnswer:'push'}
    ],//Level 15
    [
      {text: 'The next several exercise involves four moves. The first four'
      + ' are Place vs. Push vs. Pain vs. Pain. Select which move you think it is'
      + ' based on the text and media.', video:'', emoji:16,
      correctAnswer:''},
      {text: 'Hello?(sarcastic)', video:'', emoji:'0x1f620',
      correctAnswer:'pain'},
      {text: 'It\'s my turn.', video:'',
      emoji:'0x1f610', correctAnswer:'push'}
    ],//Level 16
    [
      {text: 'The next exercise involves four moves. The next four'
      + ' are Place vs. Please vs. Pull vs. Push. Select which move you think it is'
      + ' based on the text and media.', video:'', emoji:17,
      correctAnswer:''},
      {text: 'Tell me what\'s wrong.', video:'', emoji:'0x1f914',
      correctAnswer:'push'},
      {text: 'You\'d better be on time.', video:'',
      emoji:'0x1f620', correctAnswer:'push'}
    ],//Level 17
    [
      {text: 'The next exercise involves four moves. The next four'
      + ' are Place vs. Pause vs. Pain vs. Please. Select which move you think it is'
      + ' based on the text and media.', video:'', emoji:17,
      correctAnswer:''},
      {text: 'I just wish there was a better way.', video:'', emoji:'0x1f914',
      correctAnswer:'place'},
      {text: 'What were you thinking?', video:'',
      emoji:'0x1f620', correctAnswer:'pain'}
    ],//Level 18
    [
      {text: 'The next few exercises involves five moves. The first five'
      + ' are Pain vs. Please vs. Place vs. Push vs. Pull. Select which move'
      + ' you think it is based on the text and media.', video:'', emoji:18,
      correctAnswer:''},
      {text: 'If you meet me at my place, I\'ll cover parking. What do you think?',
      video:'', emoji:'0x1f60a', correctAnswer:'pull'},
      {text: 'What took you so long?', video:'',
      emoji:'0x1f620', correctAnswer:'pain'}
    ],//Level 19
    [
      {text: 'The next exercise involves five moves. The next five'
      + ' are Pain vs. Please vs. Pause vs. Push vs. Pull. Select which move'
      + ' you think it is based on the text and media.', video:'', emoji:20,
      correctAnswer:''},
      {text: 'Do you have a moment to talk?',
      video:'', emoji:'0x1f641', correctAnswer:'pull'},
      {text: 'Can I pick you up something?', video:'',
      emoji:'0x1f60a', correctAnswer:'please'}
    ],//Level 20
    [
      {text: 'The next exercise involves five moves. The next five are Pain vs.'
      + ' Pause vs. Place vs. Push vs. Pull. Select which move you think it is'
      + ' based on the text and media.', video:'', emoji:21,
      correctAnswer:''},
      {text: 'Blank',
      video:'', emoji:'0x1f641', correctAnswer:'pause'},
      {text: 'Uhhhh.', video:'',
      emoji:'0x1f610', correctAnswer:'push'}
    ],//Level 21
    [
      {text: 'The final exercise involves all six moves. \n'
      + 'Pain vs. Please vs. Pause vs. Place vs. Push vs. Pull.' +
      ' Select which move you think it is based on the text and media.',
      video:'', emoji:22, correctAnswer:''},
      {text: 'That is trash!',
      video:'', emoji:'0x1f620', correctAnswer:'pain'},
      {text: 'It\'s going to be OK.', video:'',
      emoji:'0x1f60a', correctAnswer:'please'}
    ],//Level 22
]

export default ExerciseData;
//{text: '', video:'', emoji:'', correctAnswer:''}
