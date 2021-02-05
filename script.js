const ham_menu = document.querySelector("#hamburger");
let menuOpen = false;

ham_menu.addEventListener('click', () => {
    if (!menuOpen) {
        ham_menu.classList.add("fa-times");
        ham_menu.classList.remove("fa-bars");
        menuOpen = true;
    } else {
        ham_menu.classList.add("fa-bars");
        ham_menu.classList.remove("fa-times");
        menuOpen = false;
    }
})