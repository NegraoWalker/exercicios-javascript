const nameUser = window.prompt("Qual o seu nome ?")
const ageUser = Number(window.prompt("Qual a sua idade"))

const exibir = document.getElementById("display")
if (ageUser >= 18) {
    exibir.innerText = `${nameUser} você é maior de idade!!`
    if (nameUser === "Florisvaldo Negrão" || nameUser === "florisvaldo negrão") {
        exibir.innerText = `${nameUser} você é maior de idade e também pai do Walker!!`
    }
} else {
    exibir.innerText = `${nameUser} você é menor de idade!!`
    if (nameUser === "Florisvaldo Negrão" || nameUser === "florisvaldo negrão") {
        exibir.innerText = `${nameUser} você é menor de idade e também pai do Walker!!`
    }
}
