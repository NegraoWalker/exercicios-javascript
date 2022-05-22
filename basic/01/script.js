const nameUser = window.prompt("Qual o seu nome ?")
const ageUser = Number(window.prompt("Qual a sua idade"))

const exibir = document.getElementById("display")
if (ageUser >= 18) {
    exibir.innerText = `${nameUser} você é maior de idade!!`
} else {
    exibir.innerText = `${nameUser} você é menor de idade!!`
}

