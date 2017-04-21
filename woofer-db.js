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
  firebase.database().ref('woofs').child(woofKey).set({
    text: woofText
  })
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // delete the record from Firebase
  firebase.database().ref('woofs').child(woofKey).remove()
  deleteWoof()
}

// Load all of the data
readWoofsInDatabase()
