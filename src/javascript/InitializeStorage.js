export default function InitializeStorage () {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem('trackState', JSON.stringify({
      talentPath1: [
        {
          name: 'Stack',
          isPurchased: false,
          prereqMet: true
        },
        {
          name: 'Utensil',
          isPurchased: false,
          prereqMet: false
        },
        {
          name: 'Cake',
          isPurchased: false,
          prereqMet: false
        },
        {
          name: 'Crown',
          isPurchased: false,
          prereqMet: false
        }
      ],
      talentPath2: [
        {
          name: 'Boat',
          isPurchased: false,
          prereqMet: true
        },
        {
          name: 'Scuba',
          isPurchased: false,
          prereqMet: false
        },
        {
          name: 'Lightning',
          isPurchased: false,
          prereqMet: false
        },
        {
          name: 'Death',
          isPurchased: false,
          prereqMet: false
        }
      ]
    }))
  }
}
