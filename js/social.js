function showPage(page) {
    document.querySelectorAll("#platforms > div").forEach(div => {
        div.style.display = "none";
    });

    document.getElementById(page).style.display = "block";
}