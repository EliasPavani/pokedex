axios
    .get("https://raw.githubusercontent.com/EliasPavani/pokemon-data.json/master/pokedex.json")
    .then(({ data: pokemons }) => {
        var listNode = document.getElementById("list")
        
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

            img.src = pokemon.image.hires
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
    });


/*
<li class="card-pokemon">
                <div class="informations">
                    <span>Bulbasaur</span>
                    <span>#001</span>
                </div>

                <img src="./assets/img/bulbasaur.gif" alt="Bulbasaur" class="gif">

                <ul class="types">
                    <li class="type grass">Grass</li>
                    <li class="type poison">Poison</li>
                </ul>
                <p class="description">There is a plant seed on its back right from the day this Pokémon is born. The
                    seed slowly grows larger.</p>
            </li>
            */