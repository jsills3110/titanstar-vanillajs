function InitializeStorage () {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem('userTrackState', JSON.stringify({
      availablePoints: 6,
      userTalentPath1: {
        name: 'Talent Path 1',
        talents: [
          {
            name: 'stack',
            isPurchased: false
          },
          {
            name: 'utensil',
            isPurchased: false
          },
          {
            name: 'cake',
            isPurchased: false
          },
          {
            name: 'crown',
            isPurchased: false
          }
        ]
      },
      userTalentPath2: {
        name: 'Talent Path 2',
        talents: [
          {
            name: 'boat',
            isPurchased: false
          },
          {
            name: 'scuba',
            isPurchased: false
          },
          {
            name: 'lightning',
            isPurchased: false
          },
          {
            name: 'death',
            isPurchased: false
          }
        ]
      }
    }))
  }
}

module.exports = InitializeStorage
