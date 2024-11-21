const menu_button = document.getElementById('burger-btn');
menu_button.addEventListener('click', event => {
    event.preventDefault();

    var mm_backdrop = document.getElementById('mobile-menu-backdrop');
    mm_backdrop.classList.add('is-open');
});