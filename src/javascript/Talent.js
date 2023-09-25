// TODO Alt text, description

class Talent {
  constructor (name, prerequisite) {
    this.name = name
    this.prerequisite = prerequisite
    this.isPurchased = false
    this.sprite = this.name + '-disabled'

    // If prerequisite is null, then there is no prerequisite for this talent
    // and prereqMet can be initialized to true. Otherwise, initialize it to false.
    if (!prerequisite) {
      this.prereqMet = true
    } else {
      this.prereqMet = false
    }
  }

  get isPurchased () {
    return this._isPurchased
  }

  set isPurchased (toggle) {
    this._isPurchased = toggle
  }

  get prereqMet () {
    return this._prereqMet
  }

  set prereqMet (toggle) {
    this._prereqMet = toggle
  }

  purchase () {
    this.sprite = this.name + '-enabled'
    this.isPurchased = true
    // TODO Here we need to set the localStorage values as well
  }

  remove () {
    this.sprite = this.name + '-disabled'
    this.isPurchased = false
    // TODO Here we need to set the localStorage values as well
  }
}

module.exports = Talent
