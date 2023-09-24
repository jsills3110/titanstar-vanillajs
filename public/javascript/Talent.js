export default class Talent {
  constructor (name, prerequisite) {
    this.name = name
    this.prerequisite = prerequisite
    this.sprite = this.name + "-disabled.png"

    // If prerequisite is null, then there is no prerequisite for this talent
    // and prereqMet can be initialized to true. Otherwise, initialize it to false.
    if (!prerequisite) {
      this.prereqMet = true
    } else {
      this.prereqMet = false
    }
  }

  get name () {
    return this.name
  }

  get prerequisite () {
    return this.prerequisite
  }

  get sprite () {
    return this.sprite
  }

  get prereqMet () {
    return this.prereqMet
  }

  set prereqMet (toggle) {
    this.prereqMet = toggle
  }

  purchase () {
    if (this.prereqMet) {
      this.sprite = this.name + "-enabled.png"
      // Here we need to set the localStorage values as well
      return true
    } else {
      return false
    }
  }

  remove () {
    this.sprite = this.name + "-disabled.png"
    // Here we need to set the localStorage values as well
  }
}