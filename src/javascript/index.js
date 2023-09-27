const TalentTrack = require('./TalentTrack')
const PointCounter = require('./PointCounter')
const images = require('../images/*.png')
const initializeStorage = require('./InitializeStorage')

const talentTracks = [] // Talent Track class objects storage
const pointCounter = new PointCounter(0, 0)

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
      const section = '<section class="talent-track row" id="' + trackId + '"></section>'
      document.getElementById('main').insertAdjacentHTML('beforeend', section)

      // Create the talent track title
      const title = '<div><h2 class="talent-track-title">' + track.name + '</h2></div>'
      document.getElementById(trackId).insertAdjacentHTML('beforeend', title)

      // Create the talent track div
      const talentsDiv = '<div class="col-12" id="' + trackId + '-div"></div>'
      document.getElementById(trackId).insertAdjacentHTML('beforeend', talentsDiv)

      // Create the talent buttons and insert them into the talent track div
      const talentsElement = document.getElementById(trackId + '-div')
      for (let i = 0; i < talentTrack.talents.length; i++) {
        let talentButton = '<button class="col-3 sprite-btn btn-disabled p-1" type="button" id="' + talentTrack.talents[i].name + '-button">'
        talentButton += '<img class="sprite-img" src="' + images[talentTrack.talents[i].sprite] + '" alt="' + track.talents[i].altText + '">'
        talentButton += '</button>'

        talentsElement.insertAdjacentHTML('beforeend', talentButton)

        const buttonElement = document.getElementById(talentTrack.talents[i].name + '-button')
        buttonElement.addEventListener('click', function () { purchaseTalent(talentTracks.indexOf(talentTrack), i) })
        buttonElement.addEventListener('contextmenu', function () { removeTalent(talentTracks.indexOf(talentTrack), i) })
        buttonElement.addEventListener('mouseover', function () { highlightTalent(talentTracks.indexOf(talentTrack), i) })
        buttonElement.addEventListener('mouseout', function () { deHighlightTalent(talentTracks.indexOf(talentTrack), i) })
        buttonElement.addEventListener('focus', function () { highlightTalent(talentTracks.indexOf(talentTrack), i) })
        buttonElement.addEventListener('blur', function () { deHighlightTalent(talentTracks.indexOf(talentTrack), i) })
      }
    }
  })

  // Create the point tracker.
  pointCounter.availablePoints = talentTrackData.maxPoints
  pointCounter.maxPoints = talentTrackData.maxPoints

  let pointTracker = '<section class="point-tracker card bg-black">'
  pointTracker += '<h3 class="card-title text-dark-blue">Points Spent</h3>'
  pointTracker += '<div class="card-body text-white"><span id="spent-points">' + (pointCounter.maxPoints - pointCounter.availablePoints) + '</span> / <span id="max-points">' + pointCounter.maxPoints + '</span></div>'
  pointTracker += '</section>'

  document.getElementById('main').insertAdjacentHTML('beforeend', pointTracker)
}

// Update the talent tracks based on the values stored in localStorage.
// In a full stack application, this data would be retrieved via API.
function updateUserTrackStates () {
  // Get the current user data
  const userTrackState = JSON.parse(window.localStorage.getItem('userTrackState'))

  // Purchase talents according to the user data
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

  // Set the user's available points
  pointCounter.availablePoints = userTrackState.availablePoints
}

// Purchase a talent from a talent track.
// If there are points available to spend, allow the user to purchase a talent.
// Afterwards, subtract points from the point counter, update local storage,
// and update the sprite image that was purchased.
function purchaseTalent (trackIndex, talentIndex) {
  try {
    if (pointCounter.availablePoints > 0) {
      talentTracks[trackIndex].purchaseTalent(talentIndex)
      pointCounter.subtractPoint()
      updateTalentStorage(trackIndex, talentIndex)
      updatePointStorage()
      updateSpriteImage(trackIndex, talentIndex)
      updateButton(trackIndex, talentIndex, true)
    } else {
      throw new Error('Not enough available points.')
    }
  } catch (error) {
    console.log(error)
  }
}

// Remove a talent from a talent track.
// Won't allow the user to gain more than the maxPoints value.
// If the user is removing a talent that has dependent talents, remove
// the dependents as well.
function removeTalent (trackIndex, talentIndex) {
  this.event.preventDefault() // Prevent the right click context menu from displaying.
  try {
    talentTracks[trackIndex].removeTalent(talentIndex)
    if (pointCounter.availablePoints < pointCounter.maxPoints) {
      pointCounter.addPoint()
      updatePointStorage()
    }
    updateTalentStorage(trackIndex, talentIndex)
    updateSpriteImage(trackIndex, talentIndex)
    updateButton(trackIndex, talentIndex, false)

    if (talentIndex < talentTracks[trackIndex].talents.length - 1) {
      if (talentTracks[trackIndex].talents[talentIndex + 1].isPurchased) {
        removeTalent(trackIndex, talentIndex + 1)
      }
    }
  } catch (error) {
    console.log(error)
  }
}

// Update a talent in the user's data in localStorage.
function updateTalentStorage (trackIndex, talentIndex) {
  const userTrackState = JSON.parse(window.localStorage.getItem('userTrackState'))
  userTrackState['userTalentPath' + (trackIndex + 1)].talents[talentIndex].isPurchased = talentTracks[trackIndex].talents[talentIndex].isPurchased
  window.localStorage.setItem('userTrackState', JSON.stringify(userTrackState))
}

// Update the user's available points in localStorage.
function updatePointStorage () {
  const userTrackState = JSON.parse(window.localStorage.getItem('userTrackState'))
  userTrackState.availablePoints = pointCounter.availablePoints
  window.localStorage.setItem('userTrackState', JSON.stringify(userTrackState))
}

// Update the sprite image to 'enabled' when the user hovers or focuses on a talent
// that hasn't been purchased yet.
function highlightTalent (trackIndex, talentIndex) {
  talentTracks[trackIndex].talents[talentIndex].highlight()
  updateSpriteImage(trackIndex, talentIndex)
}

// Update the sprite image to 'disabled' when the user hovers or focuses on a talent
// that hasn't been purchased yet.
function deHighlightTalent (trackIndex, talentIndex) {
  talentTracks[trackIndex].talents[talentIndex].deHighlight()
  updateSpriteImage(trackIndex, talentIndex)
}

// Update the sprite image to whatever is currently set on the talent object.
function updateSpriteImage (trackIndex, talentIndex) {
  document.querySelector('#' + talentTracks[trackIndex].talents[talentIndex].name + '-button img').src = images[talentTracks[trackIndex].talents[talentIndex].sprite]
}

function updateButton (trackIndex, talentIndex, toggle) {
  const button = document.querySelector('#' + talentTracks[trackIndex].talents[talentIndex].name + '-button')
  if (toggle) {
    button.classList.remove('btn-disabled')
    button.classList.add('btn-enabled')
  } else {
    button.classList.add('btn-disabled')
    button.classList.remove('btn-enabled')
  }
}

window.purchaseTalent = purchaseTalent
window.removeTalent = removeTalent
window.highlightTalent = highlightTalent
window.deHighlightTalent = deHighlightTalent
