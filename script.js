// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// ================= TYPING EFFECT =================

const subtitle = document.querySelector(".subtitle");

const text = "Aspiring Full Stack Developer | Backend Enthusiast | CSE Student";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        subtitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

subtitle.innerHTML = "";
typeEffect();

// ================= RESUME BUTTON =================

function downloadResume() {
    alert("Resume download feature coming soon!");
}

// ================= CONTACT FORM =================

document.getElementById("contactForm")
.addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();

        document.getElementById("form-status").innerText = data.message;
        this.reset();

    } catch (error) {
        document.getElementById("form-status").innerText =
            "Something went wrong. Please try again.";
    }
});