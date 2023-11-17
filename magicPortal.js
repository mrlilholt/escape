// Define the correct answers
const correctAnswer1 = 6;

// Function to check the answers
function checkAnswer(event) {
    event.preventDefault();

    // Get the user's answers from the input fields
    const userAnswer1 = document.getElementById("answer1").value;

    // Check if the answers are correct
    if (userAnswer1 == correctAnswer1) {
        // Show the hidden button
        document.getElementById('resultMessage').textContent = "CORRECT number of shmarberries. Go through the portal and see if you can tell someone!";
        document.getElementById('clueButton').style.display = 'block';
    } else {
        // Display error message
        document.getElementById('resultMessage').textContent = "Incorrect number of berries. Try again.";
    }
}

// Function to proceed to the next clue
function proceedToNextClue() {
    window.location.href = 'blocks.html';
}