const btn = document.getElementById("btn")


const gerarMessage = () => {
    const nameUser = window.prompt("Qual o seu nome ?")
    const ageUser = Number(window.prompt("Qual a sua idade"))
    const display = document.getElementById("display")
    const display2 = document.getElementById("display-2")
    if (ageUser >= 18) {
        display.innerText = `${nameUser} você é maior de idade!!`
        if (nameUser === "Florisvaldo Negrão" || nameUser === "florisvaldo negrão") {
            display.innerText = `${nameUser} você é maior de idade`
            display2.innerText = "Pai do Walker Negrão"
        }
    } else {
        display.innerText = `${nameUser} você é menor de idade!!`
        if (nameUser === "Florisvaldo Negrão" || nameUser === "florisvaldo negrão") {
            display.innerText = `${nameUser} você é menor de idade`
            display2.innerText = "Pai do Walker Negrão"
        }
    }
}

btn.addEventListener("click", gerarMessage)




