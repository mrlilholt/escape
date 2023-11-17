// Define the correct answers
const correctAnswer1 = 'have';
const correctAnswer2 = 'an';
const correctAnswer3 = 'awesome';
const correctAnswer4 = 'thanksgiving';

// Function to check the answers
function checkAnswer(event) {
    event.preventDefault();

    // Get the user's answers from the input fields
    const userAnswer1 = document.getElementById("answer1").value;
    const userAnswer2 = document.getElementById("answer2").value;
    const userAnswer3 = document.getElementById("answer3").value;
    const userAnswer4 = document.getElementById("answer4").value;

    // Check if the answers are correct
    if (userAnswer1 == correctAnswer1 && userAnswer2 == correctAnswer2 && userAnswer3 == correctAnswer3  && userAnswer4 == correctAnswer4) {
        // Show the hidden button
        document.getElementById('resultMessage').textContent = "WAY TO GO!  OPEN THE MYSTERIOUS BOX!";
        document.getElementById('clueButton').style.display = 'block';
    } else {
        // Display error message
        document.getElementById('resultMessage').textContent = "Incorrect phrase (not the right set/order of clues). Try again.";
    }
}

// Function to proceed to the next clue
function proceedToNextClue() {
    window.location.href = 'end.html';
}