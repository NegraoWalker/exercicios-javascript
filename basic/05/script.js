const number = Number(window.prompt("Digite qual tabuada você quer saber"))

const display = document.getElementById("table")
for (i = 1; i < 11; i++) {
    display.innerHTML += `${number} x ${i} = ${number * i} <br>`
}
