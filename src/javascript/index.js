const TalentTrack = require('./TalentTrack')
const images = require('../images/*.png')

// TODO Set and get localStorage

// Setting the Talent Track data.
// In a full stack application, I would retrieve this information via API, not hardcode it into the application.
// I'm also making an assumption that I would receive the talents in the order they need to appear on the tracks
// to simplify my logic.
const talentTrackData = {
  talentPath1: [
    {
      name: 'stack',
      prerequisite: null,
      altText: 'A stack sprite representing Talent Track 1, Talent 1.'
    },
    {
      name: 'utensil',
      prerequisite: 'stack',
      altText: 'A fork and knife sprite representing Talent Track 1, Talent 2.'
    },
    {
      name: 'cake',
      prerequisite: 'utensil',
      altText: 'A cake sprite representing Talent Track 1, Talent 3.'
    },
    {
      name: 'crown',
      prerequisite: 'cake',
      altText: 'A crown sprite representing Talent Track 1, Talent 4.'
    }
  ],
  talentPath2: [
    {
      name: 'boat',
      prerequisite: null,
      altText: 'A boat sprite representing Talent Track 2, Talent 1.'
    },
    {
      name: 'scuba',
      prerequisite: 'boat',
      altText: 'A scuba gear sprite representing Talent Track 2, Talent 2.'
    },
    {
      name: 'lightning',
      prerequisite: 'scuba',
      altText: 'A lightning bolt sprite representing Talent Track 2, Talent 3.'
    },
    {
      name: 'death',
      prerequisite: 'lightning',
      altText: 'A skull sprite representing Talent Track 2, Talent 4.'
    }
  ]
}

const talentTrack1 = new TalentTrack(talentTrackData.talentPath1)
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
