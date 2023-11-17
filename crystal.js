// crystal.js

function choosePath(symbol) {
    if (symbol === '◆') {
        alert("Congratulations! You found the right symbol. The crystal's light guides you to the next stage of your journey.");
        document.getElementById('nextButton').style.display = 'block';
    } else {
        alert("Incorrect path. The crystal's light dims briefly. Try again.");
    }
}
    document.getElementById('nextButton').addEventListener('click', function() {
        window.location.href = 'basement.html';
    });

