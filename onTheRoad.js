// tricky_riddle.js

function checkAnswer(event) {
    event.preventDefault();

    // Get the user's entered answer
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    // Check if the answer is correct
    if (userAnswer === "footsteps") {
        // Display success message
        displayResultMessage("Correct! The first step is yours.");

        // Show the hidden button for the next clue
        document.getElementById("clueButton").style.display = "block";
    } else {
        // Display error message
        displayResultMessage("Incorrect answer. (hint: take a walk around) Keep thinking!");
    }
}

function displayResultMessage(message) {
    // Display the result message
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.textContent = message;

    // Clear the result message after a delay
    setTimeout(() => {
        resultMessage.textContent = "";
        // Clear the user's entered answer
        document.getElementById("answer").value = "";
    }, 3000);
}

function proceedToNextClue() {
    // Redirect to the next clue page (cluew.html in this example)
    window.location.href = "clues/cluew.html";
}
