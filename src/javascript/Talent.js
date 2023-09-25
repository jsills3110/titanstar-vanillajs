// TODO Alt text, description

class Talent {
  constructor (name, prerequisite) {
    this.name = name
    this.prerequisite = prerequisite
    this.sprite = this.name + '-disabled'

    // If prerequisite is null, then there is no prerequisite for this talent
    // and prereqMet can be initialized to true. Otherwise, initialize it to false.
    if (!prerequisite) {
      this.prereqMet = true
    } else {
      this.prereqMet = false
    }
  }

  get prereqMet () {
    return this._prereqMet
  }

  set prereqMet (theToggle) {
    this._prereqMet = theToggle
  }

  purchase () {
    this.sprite = this.name + '-enabled'
    // TODO Here we need to set the localStorage values as well
  }

  remove () {
    this.sprite = this.name + '-disabled'
    // TODO Here we need to set the localStorage values as well
  }
}

module.exports = Talent
