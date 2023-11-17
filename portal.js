// Define the correct order of the stones
const correctOrder = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Array to hold the order of the dropped stones
let droppedOrder = [];

// Function to allow drop
function allowDrop(ev) {
    ev.preventDefault();
}

// Function to drag
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// Function to drop
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    // Add the id of the dropped stone to the droppedOrder array
    droppedOrder.push(data);
}

// Function to check the order of the stones
function checkOrder() {
    // Check if the droppedOrder matches the correctOrder
    if (JSON.stringify(droppedOrder) === JSON.stringify(correctOrder)) {
        alert('Correct, you may proceed to the next stage.');
         // Show the hidden button
         document.getElementById('hiddenButton').style.display = 'block';
    } else {
        alert('Wrong... but you see a rainbow!');
    }
    // Clear the droppedOrder array for the next attempt
    droppedOrder = [];
}