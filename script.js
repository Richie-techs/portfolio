const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "UI Designer",
    "Data Analyst"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

document
.getElementById("contactForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Message sent successfully!");

    this.reset();
});
document.getElementById("skills").addEventListener("click", () => {
    document.getElementById('box').classList.toggle("active");
})