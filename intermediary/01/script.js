let cont = 0

const incrementCont = () => {
    cont++
    const display = document.getElementById("display")
    display.innerText = `${cont}`
}

const decrementCont = () => {
    if (cont > 0) {
        cont--
        const display = document.getElementById("display")
        display.innerText = `${cont}`
    }

}





const btnIncrement = document.getElementById("increment")
const btnDecrement = document.getElementById("decrement")

btnIncrement.addEventListener("click", incrementCont)
btnDecrement.addEventListener("click", decrementCont)