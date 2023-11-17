// Define the correct answers
const correctAnswer1 = 9;

// Function to check the answers
function checkAnswer(event) {
    event.preventDefault();

    // Get the user's answers from the input fields
    const userAnswer1 = document.getElementById("answer1").value;

    // Check if the answers are correct
    if (userAnswer1 == correctAnswer1) {
        // Show the hidden button
        document.getElementById('resultMessage').textContent = "CORRECT! You've earned a clue";
        document.getElementById('clueButton').style.display = 'block';
    } else {
        // Display error message
        document.getElementById('resultMessage').textContent = "Incorrect. Try again.";
    }
}

// Function to proceed to the next clue
function proceedToNextClue() {
    window.location.href = 'clues/cluer.html';
}