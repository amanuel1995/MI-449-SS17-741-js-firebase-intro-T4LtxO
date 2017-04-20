// Declare variables
var woofButton = document.getElementById('woof-button')
var inputText = document.getElementById('woof-text')
var createdAt = new Date()
var time = createdAt + '.'
var creationTime = time

// CREATE a new woof in Firebase
function createWoofInDatabase (woof) {
  // create a new record in Firebase
  woof = inputText.value
  firebase.database().ref('woofs').push({
    created_at: creationTime,
    text: woof
  })
}
  //rootRef.child(inputText.value).set({

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
function readWoofsInDatabase () {
  // TODO read new, changed, and deleted Firebase records
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // TODO delete the record from Firebase
}

// Load all of the data
readWoofsInDatabase()

// add event listeners
woofButton.addEventListener('click', function (buttonClick) {
  console.log("Some shit happened.")
  createWoofInDatabase()
})

// trigger same action as button click on Enter Key
inputText.addEventListener('keyup', function (event) {
  event.preventDefault()
  if (event.keyCode === 13) {
    woofButton.click()
    console.log("Enter Key pressed.")
  }
})
