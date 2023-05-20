const ButtonChangeTheme = document.getElementById("button-change-theme");
const body = document.querySelector("body");
const imgChangetheme = document.querySelector(".image-button")

ButtonChangeTheme.addEventListener("click", () => {
    const BlackModeBeActive = body.classList.contains("black-mode");

    body.classList.toggle("black-mode")

    if (BlackModeBeActive) {
        imgChangetheme.setAttribute("src", "./src/img/sun.png")
    } else {
        imgChangetheme.setAttribute("src", "./src/img/moon.png")
    }
});