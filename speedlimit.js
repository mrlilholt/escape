// speedlimit.js

function checkSpeedLimit(event) {
    event.preventDefault();

    // Get the user's entered speed limit
    const userSpeedLimit = parseFloat(document.getElementById("speedLimit").value);

    // Check if the entered speed limit is correct
    if (userSpeedLimit === 35) {
        displayResultMessage("Congratulations! You've entered the correct speed limit.  You can now proceed to the next stage of your journey.");
        // Add code to proceed to the next stage or display a success message
        document.getElementById('hiddenButton').style.display = 'block';

    } else {
        displayResultMessage("Incorrect speed limit. Try again.");
    }
}

function displayResultMessage(message) {
    // Display the result message
    const speedLimitResultMessage = document.getElementById("speedLimitResultMessage");
    speedLimitResultMessage.textContent = message;

    // Clear the result message after a delay
    setTimeout(() => {
        speedLimitResultMessage.textContent = "";
        // Clear the user's entered speed limit
        document.getElementById("speedLimit").value = "";
    }, 3000);
}
