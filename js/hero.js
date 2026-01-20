document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typing-text");

    const words = [
        { text: "Faster time to Market", color: "#00d4ff" },
        { text: "Zero Defect Product", color: "#2ecc71" },
        { text: "100% Dedication", color: "#e74c3c" },
        { text: "Cost Effective Solution", color: "#f39c12" },
        { text: "24/7 Support", color: "#9b59b6" }
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingSpeed = 80;
    const deletingSpeed = 50;
    const delayBetweenWords = 2500;

    function typeEffect() {
        const current = words[wordIndex];
        textElement.style.color = current.color;

        if (!isDeleting) {
            textElement.textContent = current.text.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === current.text.length) {
                setTimeout(() => (isDeleting = true), delayBetweenWords);
            }
        } else {
            textElement.textContent = current.text.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(
            typeEffect,
            isDeleting ? deletingSpeed : typingSpeed
        );
    }

    // Start after 2 seconds
    setTimeout(typeEffect, 1000);
});
