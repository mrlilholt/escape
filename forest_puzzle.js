// forest_puzzle.js

const correctOrder = ["○", "△", "■"]; // Define the correct order of symbols

function checkSymbolOrder() {
    const userOrderInput = document.getElementById("symbolOrder").value.trim();
    const userOrder = userOrderInput.split(" ");

    // Check if the user's order matches the correct order
    const isCorrect = arraysEqual(userOrder, correctOrder);

// Display result message
const resultMessage = document.getElementById("resultMessage");
resultMessage.textContent = isCorrect ? "Congratulations! You may proceed to the old tree." : "Incorrect. Please rearrange the symbols.";

if (resultMessage.textContent === "Congratulations! You may proceed to the old tree.") {
    document.getElementById('nextButton').style.display = 'block';
}

document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = 'oldTree.html';
});

// Clear the input field
document.getElementById("symbolOrder").value = "";
}

function arraysEqual(arr1, arr2) {
    // Check if two arrays are equal
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}
