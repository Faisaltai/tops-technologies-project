// Get element from DOM

const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('menu');

// PX offset when the navar activates

const offset = 50;

// Add click event to menu button 

menBtn.addEventListener('click', () => {
    // Toggle the 'menu-open' class
    menu.classList.toggle('menu-open');
});