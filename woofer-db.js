// Declare variables
var creationTime = Date.now()

// CREATE a new woof in Firebase
function createWoofInDatabase (woof) {
  if( woofText.value !== '' ){ // if the text field is not empty
    // create a new record in Firebase
    woof = woofText.value
    firebase.database().ref('woofs').push({
      created_at: creationTime,
      text: woof
    })
  }
}

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
function readWoofsInDatabase () {
  // read new, changed, and deleted Firebase records
  firebase.database().ref('woofs').on('child_added', function (woofSnapshot) {
    addWoofRow (woofSnapshot.key, woofSnapshot.val())
  })

  firebase.database().ref('woofs').on('child_changed', function (woofSnapshot) {
    updateWoofRow (woofSnapshot.key, woofSnapshot.val())
  })

  firebase.database().ref('woofs').on('child_removed', function (woofSnapshot) {
    deleteWoofRow(woofSnapshot.key)
  })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // update the record in Firebase
  var refPath = 'woofs/' + woofKey + '/text'
  firebase.database().ref(refPath).set(woofText)
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // delete the record from Firebase
  var referencePath = 'woofs/' + woofKey
  firebase.database().ref(referencePath).remove()
}

// Load all of the data
readWoofsInDatabase()
