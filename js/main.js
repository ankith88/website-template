/**
 * Converts a date from "Mon Oct 20 2025 00:00:00 GMT-0700 (PDT)" format
 * to "YYYY-MM-DDTHH:MM:SS" format (ISO 8601 without timezone)
 * @param {string} dateString - The date string to convert
 * @returns {string} The formatted date string in YYYY-MM-DDTHH:MM:SS format
 * @throws {Error} If the date string is invalid
 */
const convertDateFormat = (dateString) => {
    // Parse the date string to create a Date object
    const date = new Date(dateString);
    
    // Validate that the date is valid
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date string provided');
    }
    
    // Extract date components in UTC to avoid timezone conversion issues
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    
    // Format as YYYY-MM-DDTHH:MM:SS
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

navSlide();