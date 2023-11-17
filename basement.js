// basement.js

// Object to store book clues corresponding to book numbers
const bookClues = {
    1: "'The Shadow of the Wind' by Carlos Ruiz Zafón",
    2: "'Cosmos' by Carl Sagan",
    3: "'The Alchemist' by Paulo Coelho",
    4: "'Sapiens: A Brief History of Humankind' by Yuval Noah Harari"
    // Add more book clues as needed
};

function selectBook(bookNumber) {
    // Display the clue for the selected book
    const bookClue = bookClues[bookNumber];
    displaySelectBookResult(bookClue);

    // Check if the selected book is the correct one
    if (bookNumber === 2) {
        // Correct book, reveal a hidden passage or provide a key
        setTimeout(() => {
            displaySelectBookResult("Congratulations! The riddle has something to do with this book!");
        }, 1000);
    } else {
        // Incorrect book, display a message
        setTimeout(() => {
            displaySelectBookResult("Hmm, this book doesn't help us solve the riddle at all...");
        }, 1000);
    }
}

function displaySelectBookResult(message) {
    // Display the result message
    const selectBookResultMessage = document.getElementById("selectBookResultMessage");
    selectBookResultMessage.textContent = message;

    // Clear the result message after a delay
    setTimeout(() => {
        selectBookResultMessage.textContent = "";
    }, 3000);
}

document.getElementById('riddleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var answer = document.getElementById('riddleAnswer').value;
    // Check the answer
    if (answer === 'stars') {
        alert('Well Done... You can get out of this strange place!  Click the continue button to get out of the basement.');
        document.getElementById('continueButton').style.display = 'block';
    } else {
        alert('Incorrect answer. Please try again.');
    }
});