function toggleMenu() {
    let menu = document.querySelector('.menuss');
    menu.style.display = "flex";
}
document.getElementById('cls').addEventListener('click', function () {
    let menus = document.querySelector('.menuss');
    menus.style.display = "none";
})