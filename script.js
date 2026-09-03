// ===== SCROLL ANIMATION =====

const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach((card) => {

    observer.observe(card);

});



// ===== HEADER SCROLL EFFECT =====

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(7, 11, 19, 0.95)";

    } else {

        header.style.background =
            "rgba(11, 15, 25, 0.85)";

    }

});
