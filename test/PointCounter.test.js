/* eslint-env mocha */
const PointCounter = require('../src/javascript/PointCounter')
const assert = require('chai').assert

describe('Testing the PointCounter class', function () {
  it('1. Initialize a point counter with maxPoints = availablePoints.', function (done) {
    const testCounter = new PointCounter(6, 6)
    assert.equal(testCounter.maxPoints, 6)
    assert.equal(testCounter.availablePoints, 6)
    done()
  })

  it('2. Initialize a point counter with maxPoints != availablePoints.', function (done) {
    const testCounter = new PointCounter(6, 3)
    assert.equal(testCounter.maxPoints, 6)
    assert.equal(testCounter.availablePoints, 3)
    done()
  })
})
