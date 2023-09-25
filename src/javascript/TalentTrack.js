const Talent = require('./Talent')
class TalentTrack {
  constructor (talents) {
    this.talents = []

    // Create a new Talent object for each talent in the talents array.
    // We are trusting that we are receiving the talents in the order
    // they need to appear.
    for (let i = 0; i < talents.length; i++) {
      this.talents.push(new Talent(talents[i].name, talents[i].prerequisite))
    }
  }

  purchaseTalent (index) {
    if (this.talents[index].prereqMet) {
      this.talents[index].purchase()
      // If there is another talent in the track after the one that was just
      // purchased, set its prereqMet to true.
      if (index < this.talents.length - 1) {
        this.talents[index + 1].prereqMet = true
      }
    } else {
      throw new Error('Prerequisite not met')
    }
  }

  removeTalent (index) {
    this.talents[index].remove()

    // If there is another talent in the track after the one that was just
    // removed, set its prereqMet to false.
    if (index < this.talents.length - 1) {
      this.talents[index + 1].prereqMet = false
    }
  }
}

module.exports = TalentTrack
