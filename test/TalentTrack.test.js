/* eslint-env mocha */
const TalentTrack = require('../public/javascript/TalentTrack')
const assert = require('chai').assert
const should = require('chai').should()

describe('Testing the TalentTrack class', function () {
  it('1. Initialize a TalentTrack.', function (done) {
    const testTalentTrack = new TalentTrack('boat', null)

    done()
  })

  it('2. Initialize basic talent with prerequisite.', function (done) {
    const testTalent = new Talent('scuba', 'boat')
    assert.equal(testTalent.name, 'scuba')
    assert.equal(testTalent.prerequisite, 'boat')
    assert.equal(testTalent.prereqMet, false)
    assert.equal(testTalent.sprite, 'scuba-disabled.png')
    done()
  })

  it('3. Purchase talent successful', function (done) {
    const testTalent = new Talent('scuba', 'boat')
    testTalent.prereqMet = true
    testTalent.purchase()
    assert.equal(testTalent.name, 'scuba')
    assert.equal(testTalent.prerequisite, 'boat')
    assert.equal(testTalent.prereqMet, true)
    assert.equal(testTalent.sprite, 'scuba-enabled.png')
    done()
  })

  it('3. Purchase talent failure', function (done) {
    const testTalent = new Talent('scuba', 'boat')
    should.Throw(() => testTalent.purchase(), Error)
    assert.equal(testTalent.name, 'scuba')
    assert.equal(testTalent.prerequisite, 'boat')
    assert.equal(testTalent.prereqMet, false)
    assert.equal(testTalent.sprite, 'scuba-disabled.png')
    done()
  })
})
