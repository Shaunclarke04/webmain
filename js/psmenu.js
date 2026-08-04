function togglePSMenu(e) {
    e.preventDefault();
    document.getElementById("ps-popup").hidden ^= true;
}

document.addEventListener("click", e => {
    if (!e.target.closest(".ps-menu"))
        document.getElementById("ps-popup").hidden = true;
});
// JavaScript Document