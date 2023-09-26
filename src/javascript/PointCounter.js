class PointCounter {
  constructor (maxPoints, availablePoints) {
    this.maxPoints = maxPoints
    this.availablePoints = availablePoints
  }

  get maxPoints () {
    return this._maxPoints
  }

  set maxPoints (value) {
    this._maxPoints = value
  }

  get availablePoints () {
    return this._availablePoints
  }

  set availablePoints (value) {
    this._availablePoints = value
  }

  subtractPoint () {
    this.availablePoints -= 1
    this.#updateSpan()
  }

  addPoint () {
    this.availablePoints += 1
    this.#updateSpan()
  }

  #updateSpan () {
    document.getElementById('spent-points').innerHTML = this.maxPoints - this.availablePoints
    document.getElementById('max-points').innerHTML = this.maxPoints
  }
}

module.exports = PointCounter
