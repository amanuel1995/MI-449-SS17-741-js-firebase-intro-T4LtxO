// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCQfxc7nWuy-8JrzLnoK1oSUJynzVHY-XQ',
  authDomain: 'joke-a-tron-9000-9c753.firebaseapp.com',
  databaseURL: 'https://joke-a-tron-9000-9c753.firebaseio.com',
  projectId: 'joke-a-tron-9000-9c753',
  storageBucket: 'joke-a-tron-9000-9c753.appspot.com',
  messagingSenderId: '610945650935'
}

// create the jokes object
var jokes = {
  'the horse': {
    setup: 'A horse walks into the bar. The bartender asks...',
    punchline: 'Why the long face?'
  },
  'Orion\'s pants': {
    setup: 'How does Orion keep his pants up?',
    punchline: 'With an asteroid belt.'
  }
}
// initializeApp with the config
firebase.initializeApp(config)
// enable anonymous sign in
firebase.auth().signInAnonymously()

// generate randaom keys for jokes using firebase
firebase.database().ref('jokes').push({
  setup: 'What do you call a bear with no teeth?',
  punchline: 'A gummy bear!'
})
