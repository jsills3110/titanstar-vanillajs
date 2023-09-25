const TalentTrack = require('./TalentTrack')
const images = require('../images/*.png')
const initializeStorage = require('./InitializeStorage')

var talentTracks = []

// TODO Set and get localStorage

// Setting the Talent Track data.
// In a full stack application, I would retrieve this information via API, not hardcode it into the application.
// I'm also making an assumption that I would receive the talents in the order they need to appear on the tracks
// to simplify my logic.
const talentTrackData = {
  maxPoints: 6,
  talentPath1: {
    name: 'Talent Path 1',
    talents: [
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
    ]
  },
  talentPath2: {
    name: 'Talent Path 2',
    talents: [
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
}

window.onload = (event) => {
  init()
  if (!window.localStorage.getItem('userTrackState')) {
    initializeStorage()
  }
  updateUserTrackStates()
}

function init () {
  // Initialize the talent tracks.
  Object.values(talentTrackData).forEach(track => {
    if (Object.prototype.hasOwnProperty.call(track, 'name')) {
      const talentTrack = new TalentTrack(track.talents)
      talentTracks.push(talentTrack)

      const trackId = 'talent-track-' + track.name.substring(track.name.length - 1)

      const section = '<section class="talent-track" id="' + trackId + '"></section>'
      document.getElementById('main').insertAdjacentHTML('beforeend', section)

      const title = '<div><h2 class="talent-track-title">' + track.name + '</h2></div>'
      document.getElementById(trackId).insertAdjacentHTML('beforeend', title)

      let talentsDiv = '<div>'
      for (let i = 0; i < talentTrack.talents.length; i++) {
        let talentButton = '<button type="button" id="' + talentTrack.talents[i].name + '-button" '
        talentButton += 'onclick="purchaseTalent(' + talentTracks.indexOf(talentTrack) + ', ' + i + ')" oncontextmenu="removeTalent(event, ' + talentTracks.indexOf(talentTrack) + ', ' + i + ')">'
        talentButton += '<img src="' + images[talentTrack.talents[i].sprite] + '" width="50" height="50">'
        talentButton += '</button>'
        talentsDiv += talentButton
      }
      talentsDiv += '</div>'

      document.getElementById(trackId).insertAdjacentHTML('beforeend', talentsDiv)
    }
  })

  // Initialize the point tracker.
  let pointTracker = '<section class="point-tracker">'
  pointTracker += '<div><h3>Points Spent</h3></div>'
  pointTracker += '<div><span id="available-points">' + talentTrackData.maxPoints + '</span> / <span id="max-points">' + talentTrackData.maxPoints + '</span></div>'
  pointTracker += '</section>'

  document.getElementById('main').insertAdjacentHTML('beforeend', pointTracker)
}

function updateUserTrackStates () {
  const userTrackState = JSON.parse(window.localStorage.getItem('userTrackState'))
  console.log(userTrackState)

  Object.values(userTrackState).forEach(track => {
    if (Object.prototype.hasOwnProperty.call(track, 'name')) {
      const trackId = 'talent-track-' + track.name.substring(track.name.length - 1)
    }
  })
}

function purchaseTalent (trackIndex, talentIndex) {
  try {
    talentTracks[trackIndex].purchaseTalent(talentIndex)
  } catch (error) {
    console.log(error)
  }
}

function removeTalent (e, trackIndex, talentIndex) {
  e.preventDefault()
  try {
    talentTracks[trackIndex].removeTalent(talentIndex)
  } catch (error) {
    console.log(error)
  }
}

window.purchaseTalent = purchaseTalent
window.removeTalent = removeTalent