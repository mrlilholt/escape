// Define the correct answers
const correctAnswer1 = 1;
const correctAnswer2 = 2;

// Function to check the answers
function checkAnswer(event) {
    event.preventDefault();

    // Get the user's answers from the input fields
    const userAnswer1 = document.getElementById("answer1").value;
    const userAnswer2 = document.getElementById("answer2").value;

    // Check if the answers are correct
    if (userAnswer1 == correctAnswer1 && userAnswer2 == correctAnswer2) {
        // Show the hidden button
        document.getElementById('resultMessage').textContent = "CORRECT combination. Try and open it!";
        document.getElementById('clueButton').style.display = 'block';
    } else {
        // Display error message
        document.getElementById('resultMessage').textContent = "Incorrect combination. Try again.";
    }
}

// Function to proceed to the next clue
function proceedToNextClue() {
    window.location.href = 'pins.html';
}