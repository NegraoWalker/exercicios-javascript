let listaAtores = [
    {
        nome: 'Keanu Reeves',
        personagem: 'Neo',
        filme: 'The Matrix',
    },
    {
        nome: 'David Prowse',
        personagem: 'Darth Vader',
        filme: 'Star Wars Episódios IV-VI',
    },
    {
        nome: 'Bruce Wayne',
        personagem: 'Batman',
        filme: 'Batman - O Início'
    },
]

const title1 = document.getElementById("card-1")
const title2 = document.getElementById("card-2")
const title3 = document.getElementById("card-3")

title1.innerHTML = `<h1>${listaAtores[0].nome}</h1> <p>Interpreta o personagem ${listaAtores[0].personagem} no filme ${listaAtores[0].filme}</p>`

title2.innerHTML = `<h1>${listaAtores[1].nome}</h1> <p>Interpreta o personagem ${listaAtores[1].personagem} no filme ${listaAtores[1].filme}</p>`

title3.innerHTML = `<h1>${listaAtores[2].nome}</h1> <p>Interpreta o personagem ${listaAtores[2].personagem} no filme ${listaAtores[2].filme}</p>`