function exibirPokemons(pokemons) {
    var listNode = document.getElementById("list")

    Array.from(listNode.children).forEach(node => node.remove())
    
    pokemons.forEach(function (pokemon) {
        var li = document.createElement("li")
        li.classList.add("card-pokemon")
        li.onclick = () => showPokemon(pokemon)

        var div = document.createElement("div")
        div.classList.add("informations")

        var spanName = document.createElement("span")
        spanName.innerText = pokemon.name.english

        var spanId = document.createElement("span")
        spanId.innerText = "#" + pokemon.id.toString().padStart(3, "0")

        var img = document.createElement("img")
        var src = pokemon.image.thumbnail

        if (!src) {
            src = pokemon.image.hires
        }

        if (!src) {
            src = pokemon.image.sprite
        }

        img.src = src ? src : ''
        img.alt = pokemon.name.english
        img.classList.add("gif")

        var ul = document.createElement("ul")
        ul.classList.add("types")

        var types = []

        pokemon.type.forEach(function (type) {
            var li = document.createElement("li")

            li.classList.add("type")
            li.classList.add(type.toLowerCase())

            li.innerText = type

            types.push(li)
        })

        div.appendChild(spanName)
        div.appendChild(spanId)

        types.forEach(function (type) {
            ul.appendChild(type)
        })

        li.appendChild(div)
        li.appendChild(img)
        li.appendChild(ul)

        listNode.appendChild(li)
    })
}

function showPokemon(data) {
    var overlay = document.getElementById("overlay")
    var container = document.getElementById("details")

    var nameContainer = container.getElementsByClassName("name")[0]
    var numberContainer = container.getElementsByClassName("number")[0]
    var statsContainer = container.getElementsByClassName("stats")[0]
    var typesContainer = container.getElementsByClassName("types")[0]
    var descriptionActiveContainer = container.getElementsByClassName("descriptionActive")[0]
    var img = container.getElementsByClassName("image-active")[0]

    nameContainer.innerText = data.name.english
    numberContainer.innerText = "#" + data.id.toString().padStart(3, "0")
    descriptionActiveContainer.innerText = data.description

    Array.from(typesContainer.children).forEach(node => node.remove())

    data.type.forEach(function (type) {
        var div = document.createElement("div")

        div.classList.add("type")
        div.classList.add(type.toLowerCase())

        div.innerText = type

        typesContainer.appendChild(div)
    })

    img.src = data.image.thumbnail

    statsContainer.getElementsByClassName("hp")[0].innerText = data.base["HP"]
    statsContainer.getElementsByClassName("attack")[0].innerText = data.base["Attack"]
    statsContainer.getElementsByClassName("defense")[0].innerText = data.base["Defense"]
    statsContainer.getElementsByClassName("sp-attack")[0].innerText = data.base["Sp. Attack"]
    statsContainer.getElementsByClassName("sp-defense")[0].innerText = data.base["Sp. Defense"]
    statsContainer.getElementsByClassName("speed")[0].innerText = data.base["Speed"]

    container.classList.add("active")
    overlay.classList.add("active")
}

function closeDetails () {
    var container = document.getElementById("details")
    container.classList.remove("active")

    var overlay = document.getElementById("overlay")
    overlay.classList.remove("active")
}

var listaPokemons = []

axios
    .get("https://raw.githubusercontent.com/EliasPavani/pokemon-data.json/master/pokedex.json")
    .then(({ data: pokemons }) => {
        listaPokemons = pokemons
        exibirPokemons(listaPokemons)
    });
