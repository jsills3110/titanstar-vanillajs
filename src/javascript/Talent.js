// TODO Alt text, description
const images = require('../images/*.png')

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
    this.#updateSprite()
  }

  remove () {
    this.sprite = this.name + '-disabled'
    this.isPurchased = false
    this.#updateSprite()
  }

  #updateSprite () {
    document.querySelector('#' + this.name + '-button img').src = images[this.sprite]
  }
}

module.exports = Talent
