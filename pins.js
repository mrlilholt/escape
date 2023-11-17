// Define the correct answers
const correctAnswer1 = 13;
const correctAnswer2 = 39;
const correctAnswer3 = 48;

// Function to check the answers
function checkAnswer(event) {
    event.preventDefault();

    // Get the user's answers from the input fields
    const userAnswer1 = document.getElementById("answer1").value;
    const userAnswer2 = document.getElementById("answer2").value;
    const userAnswer3 = document.getElementById("answer3").value;

    // Check if the answers are correct
    if (userAnswer1 == correctAnswer1 && userAnswer2 == correctAnswer2 && userAnswer3 == correctAnswer3) {
        // Show the hidden button
        document.getElementById('resultMessage').textContent = "CORRECT combination. Throw them in the air and move on!";
        document.getElementById('clueButton').style.display = 'block';
    } else {
        // Display error message
        document.getElementById('resultMessage').textContent = "Incorrect combination. Try again.";
    }
}

// Function to proceed to the next clue
function proceedToNextClue() {
    window.location.href = 'close.html';
}