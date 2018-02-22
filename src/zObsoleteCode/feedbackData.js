const FeedbackText = [
    [], //Level: 0, Round: 0
    [
      '', //Round 0 [1][0]
      'A push makes you feel there isn\'t room for refusal, even if it is\
       polite.', //Round 1 [1][1]
       'A pull makes you feel you have the option of refusing a request.'
      ], //////////////// End Level 1 [1]
    [
      '', //Round 0 [2][0]
      'A pain makes you feel criticized.', //Round 1 [2][1]
      'A please makes you feel accepted.'
      ], //////////////// End Level 2 [2]
    [
      '',//Round 0 [3][0]
      'A pause postpones closure.', //Round 1 [3][1]
      'A place can express pleasing emotions, but without expectations \
      for a response.',
    ],////// End level 3
    [
      '',//Round 0 [4][0]
      'A push forces you to accomidate someone else\'s desires.', //Round 1 [4][1]
      'A pain makes you feel judged.',
    ],////// End level 4
    [
      '',//Round 0 [5][0]
      'A please makes you feel good and connected to a person.', //Round 1 [5][1]
      'A pull makes you want to act but gives an easy out.',
    ],////// End level 5
    [
      '',//Round 0 [6][0]
      'A pause move stops or diverts a discussion.', //Round 1 [6][1]
      'A Pain move is intended to cause emotional harm.',
    ],////// End level 6
    [
      '',//Round 0 [7][0]
      'With a gentle a tone and smile a push can become a place.', //Round 1 [7][1]
      'A push can often feel urgent and rushed.',
    ],////// End level 7
    [
      '',//Round 0 [8][0]
      'A place can express negeative emotions, but without expectations \
      of action from you.', //Round 1 [8][1]
      'A pull makes you want to act.',
    ],////// End level 8
    [
      '',//Round 0 [9][0]
      'A place describes a personal state, but doesn\'t ask for anything.', //Round 1 [9][1]
      'A pain makes you feel deminished.',
    ],////// End level 9
    [
      '',//Round 0 [10][0]
      'A place is often an open ended question without an agenda.', //Round 1 [10][1]
      'A please highlights connection with other.',
    ],////// End level 10
    [
      '',//Round 0 [11][0]
      'A push can be as simple as being forced to talk.', //Round 1 [11][1]
      'A please makes you feel appreciated.',
    ],////// End level 11
    [
      '',//Round 0 [12][0]
      'A push makes you feel controlled.', //Round 1 [12][1]
      'A pause often involves having to wait for resolution.',
    ],////// End level 12
    [
      '',//Round 0 [13][0]
      'A push makes you feel pressured to comply.', //Round 1 [13][1]
      'A pain can push, but include unnecessary criticism.',
    ],////// End level 13
    [
      '',//Round 0 [14][0]
      'A pull often offers some form of help or compensation by the speaker.', //Round 1 [14][1]
      'A please makes you feel supported.',
    ],////// End level 14
    [
      '',//Round 0 [15][0]
      'A pain makes you feel inferior.', //Round 1 [15][1]
      'A push makes you feel a pressure to act.',
    ],////// End level 15
    [
      '',//Round 0 [16][0]
      'A push is often focused on the speaker getting what they want.', //Round 1 [16][1]
      'A pain makes you feel threatened.',
    ],////// End level 16
    [
      '',//Round 0 [17][0]
      'A place can feel like a request, but ultimately has no expectations.', //Round 1 [17][1]
      'A pull makes you feel understood with compassion.',
    ],////// End level 17
    [
      '',//Round 0 [18][0]
      'A place can express negative emotions, but doesn\'t expect you to act.', //Round 1 [18][1]
      'A pain makes you feel blamed.',
    ],////// End level 18
    [
      '',//Round 0 [19][0]
      'A pull gives you clear incentive to motivate and entice you.', //Round 1 [19][1]
      'A pain makes you feel there is no right response.',
    ],////// End level 19
    [
      '',//Round 0 [20][0]
      'A pull is often expressed as a question, to give room for refusal.', //Round 1 [20][1]
      'A please makes you feel cared for, without reciprocity.',
    ],////// End level 20
    [
      '',//Round 0 [21][0]
      'A pain move can involve simply stonewalling or the silent treatment.', //Round 1 [21][1]
      'A pause can be verbal, but without a clear statement.',
    ],////// End level 21
    [
      '',//Round 0 [22][0]
      'A pain makes you feel judged.', //Round 1 [22][1]
      'A please brings comfort.',
    ],////// End level 22
]

export default function FeedbackData(level, round){
  let newObject = {text: FeedbackText[level][round], video: '', emoji: 23,
 correctAnswer: null}

  return newObject;
};
