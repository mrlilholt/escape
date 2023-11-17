// mystical_crystal.js

// Array to store the correct sequence of actions
const correctActionSequence = [1, 2, 3, 4];

// Variable to track the user's progress in the sequence
let userActionIndex = 0;

function performAction(actionNumber) {
    // Check if the performed action is correct in the sequence
    if (actionNumber === correctActionSequence[userActionIndex]) {
        // Move to the next action in the sequence
        userActionIndex++;

        // Check if the user completed the entire sequence
        if (userActionIndex === correctActionSequence.length) {
            displayPortalResult("Congratulations! The magical portal is activated, and you may proceed to the next stage.");
        }
    } else {
        // Incorrect action, reset the sequence
        userActionIndex = 0;

        // Provide a hint or feedback to the user
        displayPortalResult("Incorrect action. Start over and follow the sequence.");
    }
}
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var droppedItem = document.getElementById(data);
    event.target.appendChild(droppedItem);
    droppedItem.classList.add('dropped');
}

// Add event listeners to the list items
var listItems = document.querySelectorAll('#portalActions li');
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('dragover', allowDrop);
    listItems[i].addEventListener('drop', drop);
}

// Add event listeners to the drop zone
var dropZone = document.getElementById('dropZone');
dropZone.addEventListener('dragover', allowDrop);
dropZone.addEventListener('drop', drop);

function displayPortalResult(message) {
    // Display the result message
    const portalResultMessage = document.getElementById("portalResultMessage");
    portalResultMessage.textContent = message;

    // Clear the result message after a delay
    setTimeout(() => {
        portalResultMessage.textContent = "";
    }, 3000);

    // Reset the user's progress in the sequence
    userActionIndex = 0;
}

document.getElementById('submitOrder').addEventListener('click', function() {
    var dropZone = document.getElementById('dropZone');
    var items = Array.from(dropZone.getElementsByTagName('li'));
    var idsInOrder = items.map(function(item) {
        return item.id;
    });
    var correctOrder = ['action1', 'action2', 'action3', 'action4'];
    if (JSON.stringify(idsInOrder) === JSON.stringify(correctOrder)) {
        alert('You figured it out!  You see the portal light up and you can step through to the next stage');
        document.getElementById('continueButton').style.display = 'block';
    } else {
        alert('Incorrect order. Please try again.');
    }
});
