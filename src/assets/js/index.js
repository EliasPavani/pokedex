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
        var possuiNomeValido = pokemon.name.english.toUpperCase().includes(termoDeBusca) 
        var possuiDescricaoValida = pokemon.description.toUpperCase().includes(termoDeBusca)
        var possuiNumeroValido = pokemon.id == termoDeBusca
        var possuiTipoValido = pokemon.type.filter((type) => {
            return type.toUpperCase().includes(termoDeBusca)
        }).length > 0


        return possuiNomeValido || possuiTipoValido || possuiNumeroValido || possuiDescricaoValida
    })

    exibirPokemons(listaFiltrada)
}
