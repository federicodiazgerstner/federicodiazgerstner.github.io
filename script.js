const ham_menu = document.querySelector("#hamburger");
const list = document.querySelectorAll("li");
console.log(list);
let menuOpen = false;

ham_menu.addEventListener('click', () => {
    if (!menuOpen) {
        ham_menu.classList.add("fa-times");
        ham_menu.classList.remove("fa-bars");

        list.forEach((li) => {
            li.classList.remove("hidden");
        })

        menuOpen = true;
    } else {
        ham_menu.classList.add("fa-bars");
        ham_menu.classList.remove("fa-times");

        list.forEach((li) => {
            li.classList.add("hidden");
        })

        menuOpen = false;
    }
})