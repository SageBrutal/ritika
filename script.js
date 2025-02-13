document.addEventListener("DOMContentLoaded", function() {
    let music = document.getElementById("birthdayMusic");
    music.volume = 0; // Start at zero volume
    let fadeInterval;

    // Try playing music automatically with fade-in effect
    music.play().then(() => {
        fadeInterval = setInterval(() => {
            if (music.volume < 1.0) {
                music.volume = Math.min(music.volume + 0.1, 1); // Increase volume gradually
            } else {
                clearInterval(fadeInterval);
            }
        }, 300);
    }).catch(() => {
        console.log("Autoplay blocked. Music will play on user interaction.");
    });
});

function showMessage() {
    document.getElementById("message").style.display = "block";

    // Confetti Animation
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function toggleMusic() {
    let music = document.getElementById("birthdayMusic");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function checkAnswer(button, answer) {
    const correctAnswer = "blue"; // Change this to the correct answer
    const resultElement = document.getElementById("result1");

    if (answer === correctAnswer) {
        resultElement.innerHTML = "✅ Correct! You know me well!";
        resultElement.style.color = "green";
        confetti(); // Celebrate correct answer with confetti
    } else {
        resultElement.innerHTML = "❌ Oops! Try again.";
        resultElement.style.color = "red";
    }
}
