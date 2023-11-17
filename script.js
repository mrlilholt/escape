// script.js

function startGame() {
    // You can add more code here to continue the story or navigate to the next part of the game.
    alert("Let the adventure begin!");
    // Add more functionality as your story progresses.
}
// script.js

function startGame() {
    window.location.href = "challenge1.html";
}

function checkAnswer() {
    // Get the user's answer from the input field
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    // Check if the answer is correct
    if (userAnswer === "keyboard") {
        alert("Congratulations! You've solved the first challenge. Let's proceed to the next challenge!");
        // Redirect to the next challenge
        window.location.href = "challenge2.html";
    } else {
        // Display a message and provide a link to helpful information
const message = "Oops! That's not correct. Give it another try or look @ the link below for a hint: https://www.thoughtco.com/history-of-the-computer-keyboard-1991402";
alert(message);}
}

// script.js

function continueStory(choice) {
    switch (choice) {
        case 'owl':
            window.location.href = "owl.html"; // Create an 'owl.html' file for the next part of the story
            break;
        case 'crystal':
            window.location.href = "crystal.html"; // Create a 'crystal.html' file for the next part of the story
            break;
        case 'chest':
            window.location.href = "chest.html"; // Create a 'chest.html' file for the next part of the story
            break;
        case 'key':
            window.location.href = "key.html"; // Create a 'key.html' file for the next part of the story
            break;
        default:
            alert("Invalid choice. Please try again.");
    }
}

// script.js

function enterRoom() {
    window.location.href = "room.html";
}

function declineEntry() {
    alert("You decide to wait outside. Perhaps another time!");
    // You can add more logic or redirections based on the user's decision not to enter
}

function goBack() {
    window.history.back();
}


