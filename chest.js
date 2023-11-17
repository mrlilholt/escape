// chest.js

let wrongAnswerCount = 0;

function checkAnswer() {
    // Get the user's answer from the input field
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    // Check if the answer is correct
    if (userAnswer === "an echo" || userAnswer === "echo") {
        displayResultMessage("Congratulations! The treasure chest opens, revealing its contents.");
        // Add code to proceed to the next stage or display the treasure
        document.getElementById('hiddenButton').style.display = 'block';
    } else {
        wrongAnswerCount++;
        displayResultMessage("Incorrect answer. Try again.");

        // If the user has gotten the answer wrong three times, give them a hint
        if (wrongAnswerCount === 3) {
            alert("Hint: It's something that can be heard, but not seen or touched.");
        }

        // If the user has gotten the answer wrong ten times, give them another hint
        if (wrongAnswerCount === 10) {
            alert("Another hint: It's a phenomenon that occurs when a sound wave reflects off a surface.");
        }
    }
}


function displayResultMessage(message) {
    // Display the result message
    const riddleResultMessage = document.getElementById("riddleResultMessage");
    riddleResultMessage.textContent = message;

    // Clear the result message after a delay
    setTimeout(() => {
        riddleResultMessage.textContent = "";
        // Clear the user's answer
        document.getElementById("answer").value = "";
    }, 3000);
}
