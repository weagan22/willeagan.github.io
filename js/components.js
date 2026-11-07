import { initializeNavigation } from "./components/navigation.js";

// =========================================================
// COMPONENT LOADER
// Loads reusable HTML components into the page
// =========================================================

async function loadComponent(elementId, filePath) {

    const container = document.getElementById(elementId);

    if (!container) return;

    try {

        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}: ${response.status}`);
        }

        container.innerHTML = await response.text();

    } catch (error) {

        console.error(error);

    }
}

// =========================================================
// PAGE INITIALIZATION
// =========================================================

document.addEventListener("DOMContentLoaded", async () => {

    // Load shared components
    await Promise.all([

        loadComponent("site-header", "/components/header.html"),

        loadComponent("site-footer", "/components/footer.html")

    ]);

    // Initialize functionality after components load
    initializeNavigation();

});
