const Talent = require('./Talent')

class TalentTrack {
  constructor (talents) {
    this.talents = []

    // Create a new Talent object for each talent in the talents array.
    // For simplicity, we are trusting that we are receiving the talents in
    // the order they need to appear.
    for (let i = 0; i < talents.length; i++) {
      this.talents.push(new Talent(talents[i].name, talents[i].prerequisite))
    }
  }

  // Check if the prerequisite for the talent is met.
  // If it is, purchase the talent. If not, throw an error.
  // TODO Check if the talent is already purchased.
  purchaseTalent (index) {
    const talent = this.talents[index]

    if (talent.prereqMet) {
      if (!talent.isPurchased) {
        talent.purchase()

        // If there is another talent in the track after the one that was just
        // purchased, set its prereqMet to true.
        if (index < this.talents.length - 1) {
          this.talents[index + 1].prereqMet = true
        }
      } else {
        throw new Error('Talent already purchased.')
      }
    } else {
      throw new Error('Prerequisite not met.')
    }
  }

  removeTalent (index) {
    const talent = this.talents[index]
    console.log('Removing talent')
    if (talent.isPurchased) {
      this.talents[index].remove()

      // If there is another talent in the track after the one that was just
      // removed, set its prereqMet to false.
      if (index < this.talents.length - 1) {
        this.talents[index + 1].prereqMet = false
      }
    } else {
      throw new Error('Talent has not been purchased and therefore cannot be removed.')
    }
  }
}

module.exports = TalentTrack
