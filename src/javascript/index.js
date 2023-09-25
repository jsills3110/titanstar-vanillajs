const TalentTrack = require('./TalentTrack')
const images = require('../images/*.png')

// TODO Set and get localStorage

const temp1 = [
  {
    name: 'stack',
    prerequisite: null
  },
  {
    name: 'utensil',
    prerequisite: 'stack'
  },
  {
    name: 'cake',
    prerequisite: 'utensil'
  },
  {
    name: 'crown',
    prerequisite: 'cake'
  }
]

// const temp2 = [
//  {
//    name: 'boat',
//    prerequisite: null
//  },
//  {
//    name: 'scuba',
//    prerequisite: 'boat'
//  },
//  {
//    name: 'lightning',
//    prerequisite: 'scuba'
//  },
//  {
//    name: 'death',
//    prerequisite: 'lightning'
//  }
// ]

const talentTrack1 = new TalentTrack(temp1)
// const talentTrack2 = new TalentTrack(temp2)

// TODO For however many talent tracks there are, create that many sections for talent tracks.
// TODO For however many talents there are in each track, create that many buttons for the talents.

const section = '<section id="talent-track-1"></section>'
document.getElementById('main').insertAdjacentHTML('beforeend', section)

for (let i = 0; i < talentTrack1.talents.length; i++) {
  let talentButton = '<button type="button" id="' + talentTrack1.talents[i].name + '-button">'
  talentButton += '<img src="' + images[talentTrack1.talents[i].sprite] + '" width="50" height="50">'
  talentButton += '</button>'
  document.getElementById('talent-track-1').insertAdjacentHTML('beforeend', talentButton)
}
