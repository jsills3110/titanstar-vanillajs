/* eslint-env mocha */
const TalentTrack = require('../src/javascript/TalentTrack')
const Talent = require('../src/javascript/Talent')
const assert = require('chai').assert
const should = require('chai').should()

/*
  TalentTrack.js Tests
*/
describe('Testing the TalentTrack class', function () {
  it('1. Initialize a TalentTrack.', function (done) {
    const testTalentTrack = new TalentTrack([
      {
        name: 'boat',
        prerequisite: null
      },
      {
        name: 'scuba',
        prerequisite: 'boat'
      },
      {
        name: 'lightning',
        prerequisite: 'scuba'
      },
      {
        name: 'death',
        prerequisite: 'lightning'
      }
    ])
    const Boat = new Talent('boat', null)
    const Scuba = new Talent('scuba', 'boat')
    const Lightning = new Talent('lightning', 'scuba')
    const Death = new Talent('death', 'lightning')
    assert.deepEqual(testTalentTrack.talents, [Boat, Scuba, Lightning, Death])
    done()
  })

  it('2. Purchase talent successful.', function (done) {
    const testTalentTrack = new TalentTrack([
      {
        name: 'boat',
        prerequisite: null
      },
      {
        name: 'scuba',
        prerequisite: 'boat'
      },
      {
        name: 'lightning',
        prerequisite: 'scuba'
      },
      {
        name: 'death',
        prerequisite: 'lightning'
      }
    ])
    should.not.Throw(() => testTalentTrack.purchaseTalent(0), Error)
    assert.equal(testTalentTrack.talents[0].sprite, 'boat-enabled')
    assert.equal(testTalentTrack.talents[0].isPurchased, true)
    assert.equal(testTalentTrack.talents[1].prereqMet, true)
    done()
  })

  it('3. Purchase second talent successful.', function (done) {
    const testTalentTrack = new TalentTrack([
      {
        name: 'boat',
        prerequisite: null
      },
      {
        name: 'scuba',
        prerequisite: 'boat'
      },
      {
        name: 'lightning',
        prerequisite: 'scuba'
      },
      {
        name: 'death',
        prerequisite: 'lightning'
      }
    ])
    testTalentTrack.purchaseTalent(0)
    should.not.Throw(() => testTalentTrack.purchaseTalent(1), Error)
    assert.equal(testTalentTrack.talents[0].sprite, 'boat-enabled')
    assert.equal(testTalentTrack.talents[1].sprite, 'scuba-enabled')
    assert.equal(testTalentTrack.talents[0].isPurchased, true)
    assert.equal(testTalentTrack.talents[1].isPurchased, true)
    assert.equal(testTalentTrack.talents[1].prereqMet, true)
    assert.equal(testTalentTrack.talents[2].prereqMet, true)
    done()
  })

  it('4. Purchase talent prerequisite failure.', function (done) {
    const testTalentTrack = new TalentTrack([
      {
        name: 'boat',
        prerequisite: null
      },
      {
        name: 'scuba',
        prerequisite: 'boat'
      },
      {
        name: 'lightning',
        prerequisite: 'scuba'
      },
      {
        name: 'death',
        prerequisite: 'lightning'
      }
    ])
    should.Throw(() => testTalentTrack.purchaseTalent(1), Error)
    assert.equal(testTalentTrack.talents[0].sprite, 'boat-disabled')
    assert.equal(testTalentTrack.talents[1].sprite, 'scuba-disabled')
    assert.equal(testTalentTrack.talents[0].isPurchased, false)
    assert.equal(testTalentTrack.talents[1].isPurchased, false)
    assert.equal(testTalentTrack.talents[1].prereqMet, false)
    done()
  })

  it('5. Purchase talent already purchased failure.', function (done) {
    const testTalentTrack = new TalentTrack([
      {
        name: 'boat',
        prerequisite: null
      },
      {
        name: 'scuba',
        prerequisite: 'boat'
      },
      {
        name: 'lightning',
        prerequisite: 'scuba'
      },
      {
        name: 'death',
        prerequisite: 'lightning'
      }
    ])
    testTalentTrack.purchaseTalent(0)
    should.Throw(() => testTalentTrack.purchaseTalent(0), Error)
    assert.equal(testTalentTrack.talents[0].sprite, 'boat-enabled')
    assert.equal(testTalentTrack.talents[0].isPurchased, true)
    assert.equal(testTalentTrack.talents[1].prereqMet, true)
    done()
  })

  it('6. Remove talent without prerequisite successful.', function (done) {
    const testTalentTrack = new TalentTrack([
      {
        name: 'boat',
        prerequisite: null
      },
      {
        name: 'scuba',
        prerequisite: 'boat'
      },
      {
        name: 'lightning',
        prerequisite: 'scuba'
      },
      {
        name: 'death',
        prerequisite: 'lightning'
      }
    ])
    testTalentTrack.purchaseTalent(0)
    should.not.Throw(() => testTalentTrack.removeTalent(0), Error)
    assert.equal(testTalentTrack.talents[0].sprite, 'boat-disabled')
    assert.equal(testTalentTrack.talents[0].isPurchased, false)
    assert.equal(testTalentTrack.talents[1].prereqMet, false)
    done()
  })

  it('6. Remove talent with prerequisite successful.', function (done) {
    const testTalentTrack = new TalentTrack([
      {
        name: 'boat',
        prerequisite: null
      },
      {
        name: 'scuba',
        prerequisite: 'boat'
      },
      {
        name: 'lightning',
        prerequisite: 'scuba'
      },
      {
        name: 'death',
        prerequisite: 'lightning'
      }
    ])
    testTalentTrack.purchaseTalent(0)
    testTalentTrack.purchaseTalent(1)
    should.not.Throw(() => testTalentTrack.removeTalent(1), Error)
    assert.equal(testTalentTrack.talents[0].sprite, 'boat-enabled')
    assert.equal(testTalentTrack.talents[0].isPurchased, true)
    assert.equal(testTalentTrack.talents[1].sprite, 'scuba-disabled')
    assert.equal(testTalentTrack.talents[1].isPurchased, false)
    assert.equal(testTalentTrack.talents[1].prereqMet, true)
    assert.equal(testTalentTrack.talents[2].prereqMet, false)
    done()
  })

  it('7. Purchase talent out of range.', function (done) {
    const testTalentTrack = new TalentTrack([
      {
        name: 'boat',
        prerequisite: null
      },
      {
        name: 'scuba',
        prerequisite: 'boat'
      },
      {
        name: 'lightning',
        prerequisite: 'scuba'
      },
      {
        name: 'death',
        prerequisite: 'lightning'
      }
    ])
    should.Throw(() => testTalentTrack.purchaseTalent(4), Error)
    assert.equal(testTalentTrack.talents[0].sprite, 'boat-disabled')
    assert.equal(testTalentTrack.talents[0].isPurchased, false)
    assert.equal(testTalentTrack.talents[0].prereqMet, true)
    assert.equal(testTalentTrack.talents[1].sprite, 'scuba-disabled')
    assert.equal(testTalentTrack.talents[1].isPurchased, false)
    assert.equal(testTalentTrack.talents[1].prereqMet, false)
    assert.equal(testTalentTrack.talents[2].sprite, 'lightning-disabled')
    assert.equal(testTalentTrack.talents[2].isPurchased, false)
    assert.equal(testTalentTrack.talents[2].prereqMet, false)
    assert.equal(testTalentTrack.talents[3].sprite, 'death-disabled')
    assert.equal(testTalentTrack.talents[3].isPurchased, false)
    assert.equal(testTalentTrack.talents[3].prereqMet, false)
    done()
  })

  it('8. Remove talent out of range.', function (done) {
    const testTalentTrack = new TalentTrack([
      {
        name: 'boat',
        prerequisite: null
      },
      {
        name: 'scuba',
        prerequisite: 'boat'
      },
      {
        name: 'lightning',
        prerequisite: 'scuba'
      },
      {
        name: 'death',
        prerequisite: 'lightning'
      }
    ])
    should.Throw(() => testTalentTrack.removeTalent(4), Error)
    assert.equal(testTalentTrack.talents[0].sprite, 'boat-disabled')
    assert.equal(testTalentTrack.talents[0].isPurchased, false)
    assert.equal(testTalentTrack.talents[0].prereqMet, true)
    assert.equal(testTalentTrack.talents[1].sprite, 'scuba-disabled')
    assert.equal(testTalentTrack.talents[1].isPurchased, false)
    assert.equal(testTalentTrack.talents[1].prereqMet, false)
    assert.equal(testTalentTrack.talents[2].sprite, 'lightning-disabled')
    assert.equal(testTalentTrack.talents[2].isPurchased, false)
    assert.equal(testTalentTrack.talents[2].prereqMet, false)
    assert.equal(testTalentTrack.talents[3].sprite, 'death-disabled')
    assert.equal(testTalentTrack.talents[3].isPurchased, false)
    assert.equal(testTalentTrack.talents[3].prereqMet, false)
    done()
  })
})
