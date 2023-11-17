// tree_puzzle.js

const symbolSequence = []; // The correct sequence of symbols
const userSelection = []; // The player's selected symbols

document.addEventListener("DOMContentLoaded", function () {
    generateSymbolSequence();
    displaySymbolSequence();
});

function generateSymbolSequence() {
    // Hardcode a correct sequence of symbols
    const correctSymbols = ["♠", "♥", "♣", "◆", "★"];
    symbolSequence.length = 0; // Clear the symbolSequence array
    symbolSequence.push(...correctSymbols);
}

function displaySymbolSequence() {
    // Display the symbol sequence to the player
    const symbolDisplay = document.getElementById("symbolDisplay");
    symbolSequence.forEach(symbol => {
        const symbolElement = document.createElement("div");
        symbolElement.classList.add("symbol");
        symbolElement.textContent = symbol;
        symbolDisplay.appendChild(symbolElement);

        // Display each symbol for 5 seconds before fading out
        setTimeout(() => {
            symbolElement.style.opacity = 0;
        }, 5000);
    });

    // Clear the display after a delay
    setTimeout(() => {
        symbolDisplay.innerHTML = "";
    }, 5000);
}

function checkSymbolSequence() {
    // Check if the player's selection matches the correct sequence
    const isCorrect = arraysEqual(userSelection, symbolSequence);

    // Display result message
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.textContent = isCorrect ? "Congratulations! The old tree's magic unfolds." : "Incorrect. Try again.";

    // Show the next button if the solution is correct
    if (isCorrect) {
        document.getElementById('nextButton').style.display = 'block';
    }

    // Clear the user's selection
    userSelection.length = 0;

    // Generate a new symbol sequence for the next attempt
    generateSymbolSequence();

    // Display the new symbol sequence
    displaySymbolSequence();
}

function arraysEqual(arr1, arr2) {
    // Sort the arrays
    arr1.sort();
    arr2.sort();

    // Check if two arrays are equal
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function selectSymbol(symbol) {
    // Add the selected symbol to the user's selection
    userSelection.push(symbol);

    // Display the selected symbol
    const symbolSelection = document.getElementById("symbolSelection");
    const selectedSymbolElement = document.createElement("div");
    selectedSymbolElement.classList.add("symbol");
    selectedSymbolElement.textContent = symbol;
    symbolSelection.appendChild(selectedSymbolElement);
}
document.getElementById('solutionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Handle form submission
    var solution = document.getElementById('solution').value;

    // Split the user's solution into an array of symbols
    userSelection.length = 0; // Clear the userSelection array
    userSelection.push(...solution.split(''));

    checkSymbolSequence();
});
document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = 'finalTreeClue1.html';
});