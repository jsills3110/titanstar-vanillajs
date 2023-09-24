import Talent from "./Talent.js"
export default class TalentTrack {
  constructor (talents) {
    this.talents = []

    // Create a new Talent object for each talent in the talents array.
    // We are trusting that we are receiving the talents in the order
    // they need to appear.
    for (let i = 0; i < talents.length; i++) {
      this.talents.push(new Talent(talents[i].name, talents[i].prerequisite))
    }
  }

  get talents () {
    return this.talents
  }

  purchaseTalent (talentIndex) {
    let purchased = this.talents[talentIndex].purchase()
    if (purchased) {
      // If there is another talent in the track after the one that was just
      // purchased, set its prereqMet to true.
      if (talentIndex < this.talents.length - 1) {
        this.talents[talentIndex + 1].prereqMet(true)
      }
      return true
    } else {
      return false
    }
  }

  removeTalent (talentIndex) {
    this.talents[talentIndex].remove()

    // If there is another talent in the track after the one that was just
    // removed, set its prereqMet to false.
    if (talentIndex < this.talents.length - 1) {
      this.talents[talentIndex + 1].prereqMet(false)
    }
  }
}