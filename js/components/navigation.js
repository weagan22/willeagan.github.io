// =========================================================
// NAVIGATION
// Handles mobile navigation and active page highlighting
// =========================================================

export function initializeNavigation() {

    const toggle = document.querySelector(".nav-toggle");
    const navigation = document.querySelector("#primary-navigation");

    // -----------------------------------------------------
    // ACTIVE PAGE
    // -----------------------------------------------------

    const currentPage = window.location.pathname;

    const navLinks = document.querySelectorAll(
        "#primary-navigation a"
    );

    navLinks.forEach(link => {

        const linkPage = new URL(link.href).pathname;

        if (linkPage === currentPage) {
            link.setAttribute("aria-current", "page");
        }

    });


    // -----------------------------------------------------
    // MOBILE NAVIGATION
    // -----------------------------------------------------

    if (!toggle || !navigation) return;

    toggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("is-open");

        toggle.setAttribute("aria-expanded", isOpen);

        toggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

}
