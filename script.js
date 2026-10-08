// ================================
// WEDDING COUNTDOWN
// ================================

const weddingDate = new Date("December 9, 2026 20:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


// ================================
// RSVP BUTTON
// ================================

const rsvpButton = document.getElementById("rsvpButton");

if (rsvpButton) {

    rsvpButton.addEventListener("click", function () {

        const name = prompt(
            "Please enter your name for RSVP:"
        );

        if (name && name.trim() !== "") {

            alert(
                `Thank you, ${name.trim()}! ❤️\n\n` +
                "Your RSVP has been noted.\n" +
                "We can't wait to celebrate with you!"
            );

        }

    });

}


// ================================
// EVENT CARD INTERACTION
// ================================

const eventCards =
    document.querySelectorAll(".event-card");

eventCards.forEach(card => {

    card.addEventListener("click", function () {

        eventCards.forEach(item => {
            item.classList.remove("selected");
        });

        this.classList.add("selected");

    });

});
