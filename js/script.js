// Accordian Handler

const details = document.querySelectorAll("details");

details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

// Social platform selector
function showPage(page) {
  document.querySelectorAll("#platforms > div").forEach((div) => {
    div.style.display = "none";
  });

  document.getElementById(page).style.display = "block";
}
