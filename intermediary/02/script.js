let cont = 0
let interval

const incrementCont = () => {
    btnIncrement.classList.add("increment-2")
    cont++
    const display = document.getElementById("display")
    display.innerText = `${cont}`
}

const decrementCont = () => {
    if (cont > 0) {
        btnDecrement.classList.add("decrement-2")
        cont--
        const display = document.getElementById("display")
        display.innerText = `${cont}`
    }
}

const initial = () => {
    clearInterval(interval)
    interval = setInterval(incrementCont, 100)
    btnDecrement.classList.remove("decrement-2")
}

const off = () => {
    clearInterval(interval)
    interval = setInterval(decrementCont, 100)
    btnIncrement.classList.remove("increment-2")
}




const btnIncrement = document.getElementById("increment")
const btnDecrement = document.getElementById("decrement")

btnIncrement.addEventListener("click", initial)
btnDecrement.addEventListener("click", off)