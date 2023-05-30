const ButtonChangeTheme = document.getElementById("button-change-theme");
const body = document.querySelector("body");
const imgChangetheme = document.querySelector(".image-button")

ButtonChangeTheme.addEventListener("click", () => {
    const BlackModeBeActive = body.classList.contains("black-mode");

    body.classList.toggle("black-mode")

    if (BlackModeBeActive) {
        imgChangetheme.setAttribute("src", "./assets/img/sun.png")
    } else {
        imgChangetheme.setAttribute("src", "./assets/img/moon.png")
    }
});

function buscar() {
    var termoDeBusca = document.getElementById('caixa-busca').value.toUpperCase()

    var listaFiltrada = listaPokemons.filter(function (pokemon) {
        return pokemon.name.english.toUpperCase().includes(termoDeBusca)
    })

    exibirPokemons(listaFiltrada)
}
