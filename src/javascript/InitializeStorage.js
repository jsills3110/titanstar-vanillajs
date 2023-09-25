function InitializeStorage () {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem('userTrackState', JSON.stringify({
      availablePoints: 6,
      userTalentPath1: {
        name: 'Talent Path 1',
        talents: [
          {
            name: 'stack',
            isPurchased: true,
            prereqMet: true
          },
          {
            name: 'utensil',
            isPurchased: true,
            prereqMet: true
          },
          {
            name: 'cake',
            isPurchased: false,
            prereqMet: true
          },
          {
            name: 'crown',
            isPurchased: false,
            prereqMet: false
          }
        ]
      },
      userTalentPath2: {
        name: 'Talent Path 2',
        talents: [
          {
            name: 'boat',
            isPurchased: true,
            prereqMet: true
          },
          {
            name: 'scuba',
            isPurchased: false,
            prereqMet: false
          },
          {
            name: 'lightning',
            isPurchased: false,
            prereqMet: false
          },
          {
            name: 'death',
            isPurchased: false,
            prereqMet: false
          }
        ]
      }
    }))
  }
}

module.exports = InitializeStorage
