/* eslint-env mocha */
const Talent = require('../src/javascript/Talent')
const assert = require('chai').assert

/*
  Talent.js Tests
*/
// TODO Add test for removing talent

describe('Testing the Talent class', function () {
  it('1. Initialize basic talent with no prerequisite.', function (done) {
    const testTalent = new Talent('boat', null)
    assert.equal(testTalent.name, 'boat')
    assert.equal(testTalent.prerequisite, null)
    assert.equal(testTalent.prereqMet, true)
    assert.equal(testTalent.sprite, 'boat-disabled')
    done()
  })

  it('2. Initialize basic talent with prerequisite.', function (done) {
    const testTalent = new Talent('scuba', 'boat')
    assert.equal(testTalent.name, 'scuba')
    assert.equal(testTalent.prerequisite, 'boat')
    assert.equal(testTalent.prereqMet, false)
    assert.equal(testTalent.sprite, 'scuba-disabled')
    done()
  })

  it('3. Purchase talent successful.', function (done) {
    const testTalent = new Talent('scuba', 'boat')
    testTalent.prereqMet = true
    testTalent.purchase()
    assert.equal(testTalent.name, 'scuba')
    assert.equal(testTalent.prerequisite, 'boat')
    assert.equal(testTalent.prereqMet, true)
    assert.equal(testTalent.isPurchased, true)
    assert.equal(testTalent.sprite, 'scuba-enabled')
    done()
  })
})
