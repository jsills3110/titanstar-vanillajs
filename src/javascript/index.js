const TalentTrack = require('./TalentTrack')
const images = require('../images/*.png')
const initializeStorage = require('./InitializeStorage')

// Talent Track class objects storage
const talentTracks = []

// Set the Talent Track data.
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

window.onload = () => {
  init()
  if (!window.localStorage.getItem('userTrackState')) {
    initializeStorage()
  }
  updateUserTrackStates()
}

// Initialize the talent tracks and point counter.
function init () {
  Object.values(talentTrackData).forEach(track => {
    if (Object.prototype.hasOwnProperty.call(track, 'name')) {
      // Initialize the talent track class object
      const talentTrack = new TalentTrack(track.talents)
      talentTracks.push(talentTrack)

      const trackId = 'talent-track-' + track.name.substring(track.name.length - 1)

      // Create the talent track section
      const section = '<section class="talent-track" id="' + trackId + '"></section>'
      document.getElementById('main').insertAdjacentHTML('beforeend', section)

      // Create the talent track title
      const title = '<div><h2 class="talent-track-title">' + track.name + '</h2></div>'
      document.getElementById(trackId).insertAdjacentHTML('beforeend', title)

      // Create the talent track div
      const talentsDiv = '<div id="' + trackId + '-div"></div>'
      document.getElementById(trackId).insertAdjacentHTML('beforeend', talentsDiv)

      // Create the talent buttons and insert them into the talent track div
      const talentsElement = document.getElementById(trackId + '-div')
      for (let i = 0; i < talentTrack.talents.length; i++) {
        let talentButton = '<button type="button" id="' + talentTrack.talents[i].name + '-button">'
        talentButton += '<img src="' + images[talentTrack.talents[i].sprite] + '" width="50" height="50" alt="' + track.talents[i].altText + '">'
        talentButton += '</button>'

        talentsElement.insertAdjacentHTML('beforeend', talentButton)

        const buttonElement = document.getElementById(talentTrack.talents[i].name + '-button')
        buttonElement.addEventListener('click', function () { purchaseTalent(talentTracks.indexOf(talentTrack), i) })
        buttonElement.addEventListener('contextmenu', function () { removeTalent(talentTracks.indexOf(talentTrack), i) })
      }
    }
  })

  // Create the point tracker.
  let pointTracker = '<section class="point-tracker">'
  pointTracker += '<div><h3>Points Spent</h3></div>'
  pointTracker += '<div><span id="available-points">' + talentTrackData.maxPoints + '</span> / <span id="max-points">' + talentTrackData.maxPoints + '</span></div>'
  pointTracker += '</section>'

  document.getElementById('main').insertAdjacentHTML('beforeend', pointTracker)
}

function updateUserTrackStates () {
  const userTrackState = JSON.parse(window.localStorage.getItem('userTrackState'))

  Object.values(userTrackState).forEach(track => {
    if (Object.prototype.hasOwnProperty.call(track, 'name')) {
      const trackIndex = parseInt(track.name.substring(track.name.length - 1)) - 1
      for (let i = 0; i < track.talents.length; i++) {
        if (track.talents[i].isPurchased) {
          purchaseTalent(trackIndex, i)
        }
      }
    }
  })
}

function purchaseTalent (trackIndex, talentIndex) {
  try {
    talentTracks[trackIndex].purchaseTalent(talentIndex)

    // Update localStorage.
    updateLocalStorage(trackIndex, talentIndex, talentTracks[trackIndex].talents[talentIndex].isPurchased)
  } catch (error) {
    console.log(error)
  }
}

function removeTalent (trackIndex, talentIndex) {
  this.event.preventDefault() // Prevent the right click context menu from displaying.
  try {
    talentTracks[trackIndex].removeTalent(talentIndex)

    // Update localStorage.
    updateLocalStorage(trackIndex, talentIndex, talentTracks[trackIndex].talents[talentIndex].isPurchased)
  } catch (error) {
    console.log(error)
  }
}

function updateLocalStorage (trackIndex, talentIndex, isPurchased) {
  let userTrackState = JSON.parse(window.localStorage.getItem('userTrackState'))
  userTrackState['userTalentPath' + (trackIndex + 1)].talents[talentIndex].isPurchased = isPurchased
  window.localStorage.setItem('userTrackState', JSON.stringify(userTrackState))
}

window.purchaseTalent = purchaseTalent
window.removeTalent = removeTalent
