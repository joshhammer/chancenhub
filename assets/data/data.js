// lets change some dates

const data = [
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#EA594B',
    text: '',
    title: 'Fit for Recovery',
    type: 'rule',
    creationDate: new Date(2020, 0, 1).toLocaleDateString(),
    id: 1,
    number: 1
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#8D6BF7',
    text: '',
    title: 'Was Corona und Lippenstifte gemeinsam haben.',
    type: 'rule',
    creationDate: new Date(2020, 1, 2).toLocaleDateString(),
    id: 2,
    number: 2
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#78D8A9',
    text: '',
    title: 'Der dargebotene Videocall.',
    type: 'rule',
    creationDate: new Date(2020, 2, 7).toLocaleDateString(),
    id: 3,
    number: 3
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: ' #0D2705',
    text: '',
    title: 'Know your target.',
    type: 'rule',
    creationDate: new Date(2020, 3, 13).toLocaleDateString(),
    id: 4,
    number: 4
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#EA594B',
    text: '',
    title: 'Wird wirklich alles anders?',
    type: 'rule',
    creationDate: new Date(2020, 3, 26).toLocaleDateString(),
    id: 5,
    number: 5
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: ' #0D2705',
    text: '',
    title: 'Zeit für AR.',
    type: 'rule',
    creationDate: new Date(2020, 4, 3).toLocaleDateString(),
    id: 6,
    number: 6
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#EA594B',
    text: '',
    title: 'Drive-in(to) normality.',
    type: 'rule',
    creationDate: new Date(2020, 4, 17).toLocaleDateString(),
    id: 7,
    number: 7
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#8D6BF7',
    text: '',
    title: 'Brander-tainment 2.0',
    type: 'rule',
    creationDate: new Date(2020, 5, 4).toLocaleDateString(),
    id: 8,
    number: 8
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#E94BB0',
    text: '',
    title: 'Improvisation in Isolation',
    type: 'rule',
    creationDate: new Date(2020, 5, 23).toLocaleDateString(),
    id: 9,
    number: 9
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#EA594B',
    text: '',
    title: 'Working from anywhere',
    type: 'rule',
    creationDate: new Date(2020, 6, 1).toLocaleDateString(),
    id: 10,
    number: 10
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#78D8A9',
    text: '',
    title: 'Buy now, enjoy later.',
    type: 'rule',
    creationDate: new Date(2020, 6, 11).toLocaleDateString(),
    id: 11,
    number: 11
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#78D8A9',
    text: '',
    title: 'Von VR zu NR.',
    type: 'rule',
    creationDate: new Date(2020, 6, 23).toLocaleDateString(),
    id: 12,
    number: 12
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#EA594B',
    text: '',
    title: 'OOH is dead. For now.',
    type: 'rule',
    creationDate: new Date(2020, 7, 13).toLocaleDateString(),
    id: 13,
    number: 13
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#8D6BF7',
    text: '',
    title: 'Gemeinsam einsam.',
    type: 'rule',
    creationDate: new Date(2020, 7, 22).toLocaleDateString(),
    id: 14,
    number: 14
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#0D2705',
    text: '',
    title: 'New Horizons für Gaming.',
    type: 'rule',
    creationDate: new Date(2020, 7, 25).toLocaleDateString(),
    id: 15,
    number: 15
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#E94BB0',
    text: '',
    title: 'Lang lebe TV.',
    type: 'rule',
    creationDate: new Date(2020, 7, 31).toLocaleDateString(),
    id: 16,
    number: 16
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#EA594B',
    text: '',
    title: 'Pawfect Playlists.',
    type: 'rule',
    creationDate: new Date(2020, 8, 1).toLocaleDateString(),
    id: 17,
    number: 17
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#EA594B',
    text: '',
    title: 'Gratis gewinnt.',
    type: 'rule',
    creationDate: new Date(2020, 8, 18).toLocaleDateString(),
    id: 18,
    number: 18
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#E94BB0',
    text: '',
    title: 'Live ist das neue Life.',
    type: 'rule',
    creationDate: new Date(2020, 8, 29).toLocaleDateString(),
    id: 19,
    number: 19
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#EA594B',
    text: '',
    title: 'Solidarität schlägt Profit.',
    type: 'rule',
    creationDate: new Date(2020, 9, 2).toLocaleDateString(),
    id: 20,
    number: 20
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: '#78D8A9',
    text: '',
    title: 'Jetzt schlau werden.',
    type: 'rule',
    creationDate: new Date(2020, 9, 13).toLocaleDateString(),
    id: 21,
    number: 21
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/die-neue-ernsthaftigkeit'
    },
    backgroundColor: ' #0D2705',
    text: '',
    title: 'Die bargeldlose Gewohnheit.',
    type: 'rule',
    creationDate: new Date(2020, 9, 22).toLocaleDateString(),
    id: 22,
    number: 22
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/jetzt-kommt-es-zur-mutation'
    },
    backgroundColor: '#3f91f7',
    text: '',
    title: 'Jetzt kommt es zur Mutation',
    type: 'article',
    creationDate: new Date(2020, 2, 23).toLocaleDateString(),
    id: 23
  },
  {
    author: undefined,
    link: {
      uri: 'https://cherryflava.com/nike-never-too/'
    },
    backgroundColor: '#8c928c',
    text: '',
    title: 'Ovomaltine unterstützt beim Weg aus dem Lockdown und macht die Schweizerinnen und Schweizer fit für den Alltag draussen.',
    type: 'link',
    creationDate: new Date(2020, 10, 24).toLocaleDateString(),
    id: 24
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/jetzt-kommt-es-zur-mutation'
    },
    backgroundColor: '#3f91f7',
    text: '',
    title: 'There is Art in Artificial',
    type: 'article',
    creationDate: new Date(2020, 4, 25).toLocaleDateString(),
    id: 25
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/jetzt-kommt-es-zur-mutation'
    },
    backgroundColor: '#3f91f7',
    text: '',
    title: 'Media-Chance in Zeiten von Corona',
    type: 'article',
    creationDate: new Date(2020, 5, 26).toLocaleDateString(),
    id: 26
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/jetzt-kommt-es-zur-mutation'
    },
    backgroundColor: '#3f91f7',
    text: '',
    title: 'Von Krisen und Chancen: Wie sich Marken jetzt verhalten sollten',
    type: 'article',
    creationDate: new Date(2020, 6, 27).toLocaleDateString(),
    id: 27
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/jetzt-kommt-es-zur-mutation'
    },
    backgroundColor: '#3f91f7',
    text: '',
    title: 'NO1: Firstworld Fastenzeit.',
    type: 'article',
    creationDate: new Date(2020, 7, 28).toLocaleDateString(),
    id: 28
  },
  {
    author: undefined,
    link: {
      uri: 'https://chancen.jvm.ch/jetzt-kommt-es-zur-mutation'
    },
    backgroundColor: '#3f91f7',
    text: '',
    title: '#1 Why Performance matters?',
    type: 'article',
    creationDate: new Date(2020, 8, 29).toLocaleDateString(),
    id: 29
  },
  {
    author: undefined,
    link: {
      uri: 'https://cherryflava.com/nike-never-too/'
    },
    backgroundColor: '#8c928c',
    text: '',
    title: 'Nike: We are never too far down to come back.',
    type: 'link',
    creationDate: new Date(2020, 1, 30).toLocaleDateString(),
    id: 30
  },
  {
    author: undefined,
    link: {
      uri: 'https://cherryflava.com/nike-never-too/'
    },
    backgroundColor: '#8c928c',
    text: '',
    title: 'Mit natürlichen Repellents gegen das Coronavirus.',
    type: 'link',
    creationDate: new Date(2020, 5, 26).toLocaleDateString(),
    id: 31
  },
  {
    author: undefined,
    link: {
      uri: 'https://cherryflava.com/nike-never-too/'
    },
    backgroundColor: '#8c928c',
    text: '',
    title: 'Ersatz für die physische Speisekarte in Covid-19 Zeiten',
    type: 'link',
    creationDate: new Date(2020, 7, 1).toLocaleDateString(),
    id: 32
  },
  {
    author: undefined,
    link: {
      uri: 'https://cherryflava.com/nike-never-too/'
    },
    backgroundColor: '#8c928c',
    text: '',
    title: 'Google Schweiz mit Massnahmen-Checkliste für den stationären Handel',
    type: 'link',
    creationDate: new Date(2020, 8, 2).toLocaleDateString(),
    id: 33
  },
  {
    author: undefined,
    link: {
      uri: 'https://cherryflava.com/nike-never-too/'
    },
    backgroundColor: '#8c928c',
    text: '',
    title: '"Jetzt geht es um Nähe und Authentizität"',
    type: 'link',
    creationDate: new Date(2020, 9, 2).toLocaleDateString(),
    id: 34
  }
]

export default data
