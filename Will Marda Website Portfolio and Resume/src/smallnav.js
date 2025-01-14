// hamburger nav

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');  // Hamburger button
    const closeMenu = document.getElementById('close-menu');  // Close button (X)
    const menu = document.getElementById('menu');  // Menu to toggle visibility

    // Open the menu when the hamburger button is clicked
    hamburger.addEventListener('click', function () {
        menu.classList.remove('hidden');  // Show the menu
        menu.classList.add('translate-x-0');  // Slide in the menu from the left
    });

    // Close the menu when the "X" button is clicked
    closeMenu.addEventListener('click', function () {
        menu.classList.add('hidden');  // Hide the menu
        menu.classList.remove('translate-x-0');  // Slide the menu out of view
    });
});

