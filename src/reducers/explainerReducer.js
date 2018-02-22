import { EXPLANATION, DEFAULT } from '../actions/actions';

export function explainerReducer(state = null, action) {
  switch(action.type){
    case EXPLANATION:
      return explainerData[(action.payload).toLowerCase()]
    case DEFAULT:
      return null;
    default:
      return null;
    }
}

const explainerData = {
  push: {
    name: 'Push',
    definition: 'To externally motivate another person towards a specific action usually'
    + ' through the implicit or explicit threat of consequences.',
    synonyms: 'pressure, order, coerce' ,
    explanation: 'The Push move is best characterized by' +
    ' changing the natural movement of another individual. It is the imposition' +
    ' of another’s will upon another. It can constrain just as easily propel. ' +
    ' This move often is accompanied by other moves since it is aimed at producing' +
    ' an objective reaction more than just a subjective response.',
    example: 'Jeremy’s mom, Emily, wants him to tidy up his room.' +
    ' John: Can I use the computer? \n Tim: Not until you clean your room.'
  },
  pull: {
    name: 'Pull',
    definition: 'To internally motivate another person towards a specific action' +
     ' usually through the implicit or explicit promise of reward.',
    synonyms: 'attract, inspire, entice',
    explanation: 'Similar to the Push move the Pull move is designed to achieve ' +
    ' an objective reaction and not just a subjective response, however unlike the Push ' +
    ' move it isn’t as much of an imposition. Rather than disrupting the natural ' +
    ' movement of another it seeks to bend it in a different direction through appealing ' +
    ' to their own desires. Pull moves are associated with positive emotions and motivations.',
    example: 'Tom is hosting a party and wants his friend Alex to come. \n'
  },
  pain: {
    name: 'Pain',
    definition: 'To produce physical or emotional displeasure.',
    synonyms: 'hurt, harm, displease',
    explanation: 'To Pain doesn’t necessarily include the intention to produce harm.' +
      ' Nor does it necessarily terminate at this end of a subjective response.' +
      ' Often times a Pain move is intended as part of another move.' +
      ' When a move is included with another move it is called an “accent move.”' +
      ' Pain is frequently aimed at producing more than just a subjective response and has' +
      'specific objective reactions attached to it.',
    example: 'Tim and John are having an argument and Tim insults John as part of his retort.' +
      ' John: Why can’t you just use the standard formatting rules in your paper?\n' +
      ' Tim: Because I’m not a conformist like you.\n' +
      'Tom: I’m having a party on the 6th, you gonna be around? \n' +
      'Alex: What time is it? \n' +
      'Tom: Things will probably start happening around 8 or 9, oh and Lizzy is coming. \n' +
      'Alex: I’ll be there for sure! \n'
    },
  pause: {
    name: 'Pause',
    definition: 'To not act or delay a response usually in response to something.',
    synonyms: 'ignore, avoid, stall',
    explanation: 'Silence can sometimes be more powerful than words.' +
    ' To not act or react can often be more effective than something more active.' +
    ' To pause can be used to buy time or be used as an accent move. ' +
    'Occasionally an active or positive action can be a form of a Pause move'
    + ' such as when someone changes the subject.',
    example: 'Luke is making a sales call to a prospect, '
    + ' Sarah to pitch some new enterprise software.' +
    'Luke: your company could have all of these features for only $65 a user.' +
    'Sara: ... \n Luke: I could always talk to my manager and see if we could get' +
    'get it down to $55 per user. \n Sara: hmmmmm \n Luke: I probably shouldn\'t' +
    'be telling you this, but really we could get it to you for $40 per user.'
  },
  place: {
    name: 'Place',
    definition: 'To act without intending to produce any reaction.',
    synonyms: 'detached, neutral, unbiased',
    explanation: 'Place moves are generally designed to be uncontentious and harmonious. ' +
    ' They are the neutral sort of actions that facilitate cooperation rather than competition. ' +
    'A place move isn’t necessarily devoid of personal intention, someone can inform another of a desire '
    + ' they have with detachment and deference. ' +
    ' The neutral and open stance of a Place move distinguishes from all the other moves.',
    example: 'Michael and Ted are on a phone call finishing up the details on a deal' +
    ' they just completed with each other. Michael: How soon do you need that check? \n' +
    'Ted: By the first preferably. \n Michael: Two weeks then? \n' +
    'Ted: Yeah, give or take a couple of days. ' +
    'You don’t need to rush getting it out. You could also wire it. Do you have my account number? \n' +
    'Michael: Nope, why don’t you send it over? We’ll try to get it out ASAP just so we’re all squared away. Thanks!'
  },
  please: {
    name: 'Please',
    definition: 'To produce physical or emotional delight.',
    synonyms: 'gratification, enjoyment, comfort',
    explanation: 'To Please usually arises out of gratuitous goodwill.' +
    ' It is an action aimed at producing the subjective response of pleasure without expecting a return. ' +
    ' To be a true please move it should terminate with the subjective response of pleasure,' +
    ' nevertheless it is not uncommon for it to be an accent move to achieve an objective reaction.',
    example: 'Noah and Emily are celebrating their anniversary and Noah buys Emily a surprise.' +
    'Emily: Happy Anniversary! Noah: To celebrate I reserved a table for us ' +
    'at your favorite restaurant.'
  }
}
