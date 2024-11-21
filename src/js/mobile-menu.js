const menu_button = document.getElementById('burger-btn');
const menu_close_button = document.getElementById('close-btn');

menu_button.addEventListener('click', event => {
    event.preventDefault();

    var mm_backdrop = document.getElementById('mobile-menu-backdrop');
    mm_backdrop.classList.add('is-open');
});

menu_close_button.addEventListener('click', event => {
    event.preventDefault();

    var mm_backdrop = document.getElementById('mobile-menu-backdrop');
    mm_backdrop.classList.remove('is-open');
});