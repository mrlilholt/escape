// finalTreeClue1.js

document.addEventListener("DOMContentLoaded", function () {
    generateMathQuestion();
});

function generateMathQuestion() {
    // Generate a math question related to the Tree of Symbols
    // For example, you can create a question that involves the number of symbols or their properties
    // Feel free to customize the question based on your preferences
    const mathQuestion = "If the Tree of Symbols has 5 branches, and each branch has 3 symbols, how many symbols are there in total?";
    document.getElementById("mathQuestion").textContent = mathQuestion;
}

function checkMathAnswer() {
    const userAnswer = document.getElementById("userAnswer").value.trim();

    // Use a math library or custom logic to check the user's answer
    // For simplicity, let's assume the correct answer is known
    const correctAnswer = "15"; // Replace with the actual correct answer

    // Check if the user's answer is correct
    const isCorrect = userAnswer === correctAnswer;

    // Display result message
    const mathResultMessage = document.getElementById("mathResultMessage");
    mathResultMessage.textContent = isCorrect ? "Congratulations! The math question is solved, and you may proceed to the next stage." : "Incorrect answer. Try again.";

    // Clear the user's answer for a new attempt
    document.getElementById("userAnswer").value = "";

        // If the user's answer is correct...
        if (isCorrect) {
            // Show the clue button
            document.getElementById('clueButton').style.display = 'block';
        }
}

document.getElementById('clueButton').addEventListener('click', function() {
    window.location.href = 'clues/cluex.html';
});
