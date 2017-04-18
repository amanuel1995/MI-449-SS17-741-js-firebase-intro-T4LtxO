// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCQfxc7nWuy-8JrzLnoK1oSUJynzVHY-XQ',
  authDomain: 'joke-a-tron-9000-9c753.firebaseapp.com',
  databaseURL: 'https://joke-a-tron-9000-9c753.firebaseio.com',
  projectId: 'joke-a-tron-9000-9c753',
  storageBucket: 'joke-a-tron-9000-9c753.appspot.com',
  messagingSenderId: '610945650935'
}

firebase.initializeApp(config)
firebase.auth().signInAnonymously()
