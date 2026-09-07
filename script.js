// =========================================
// ROAVIEW COUNTDOWN
// =========================================

const launchDate = new Date("October 16, 2026 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = launchDate - now;

    if (distance <= 0) {

        clearInterval(timer);

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");

}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);

// =========================================
// FLOATING EFFECT ON COUNTDOWN BOXES
// =========================================

const boxes = document.querySelectorAll(".box");

boxes.forEach((box, index) => {

    box.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;

});

// =========================================
// BUTTON RIPPLE EFFECT
// =========================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});