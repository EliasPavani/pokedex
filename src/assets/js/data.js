function exibirPokemons(pokemons) {
    var listNode = document.getElementById("list")

    Array.from(listNode.children).forEach(node => node.remove())
    
    pokemons.forEach(function (pokemon) {
        var li = document.createElement("li")

        li.classList.add("card-pokemon")

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

        var p = document.createElement("p")

        p.classList.add("description")

        p.innerText = pokemon.description

        div.appendChild(spanName)
        div.appendChild(spanId)

        types.forEach(function (type) {
            ul.appendChild(type)
        })

        li.appendChild(div)
        li.appendChild(img)
        li.appendChild(ul)
        li.appendChild(p)

        listNode.appendChild(li)
    })
}

var listaPokemons = []

axios
    .get("https://raw.githubusercontent.com/EliasPavani/pokemon-data.json/master/pokedex.json")
    .then(({ data: pokemons }) => {
        listaPokemons = pokemons
        exibirPokemons(listaPokemons)
    });
