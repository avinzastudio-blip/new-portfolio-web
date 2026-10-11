// ========================================
// 1. MOBILE NAVIGATION
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close the menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// ========================================
// 2. SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ========================================
// 3. DEMO CONTACT FORM
// ========================================

const contactForm = document.querySelector("#demo-contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you for reaching out! This is a demo form. Your message has not been sent.";

        formMessage.style.display = "block";

        contactForm.reset();

    });

}


// ========================================
// 4. AUTOMATIC FOOTER YEAR
// ========================================

const yearElement = document.querySelector("#current-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// ========================================
// 5. NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.querySelector(".navbar");

if (navbar) {

    function updateNavbar() {

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 20
        );

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();

}


// ========================================
// 6. SCROLL REVEAL ANIMATIONS
// ========================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

}