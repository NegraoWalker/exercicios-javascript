/* 
*Tenho um input de seleção de estados do Brasil: São Paulo e Rio de Janeiro.
*Quando eu seleciono SP aparece na webpage um outro input com algumas cidades de SP.
*O mesmo vale para o estado RJ.
! Usar o evento onchange
!Realizar a validação do form-> informar uma mensagem caso o usuário não selecione nada
!button enviar os dados para direcionar para uma página específica
*/

const displayOn = () => {
    if (inputState.value === "sp") {
        const inputCity = document.getElementById("display")
        inputCity.innerHTML =
            ` <label for="city">Cidades</label>
                <select name="city" id="city">
                    <option selected value="none2">--Selecione--</option>
                    <option value="j">Jundiaí</option>
                    <option value="c">Campinas</option>
                    <option value="l">Limeira</option>
                    <option value="a">Atibaia</option>
                </select>
                <span id="erro2" class="inputs-off"></span>`
    } else if (inputState.value == "rj") {
        const inputCity = document.getElementById("display")
        inputCity.innerHTML =
            ` <label for="city">Cidades</label>
                <select name="city" id="city">
                    <option selected value="none2">--Selecione--</option>
                    <option value="t">Teresópolis</option>
                    <option value="r">Resende</option>
                    <option value="mar">Maricá</option>
                    <option value="mac">Macaé</option>
                </select>
                <span id="erro2" class="inputs-off"></span>`
    }
}
let temErro = false // váriavel criada para validar a seleção de dados

const valForm = (event) => {
    event.preventDefault() // metódo que fixa a mensagem de erro no formulário
    const inputStateClass = document.querySelector(".state")
    const inputCityId = document.querySelector("#city")

    if (inputStateClass.value === "none1") {
        const span1 = document.getElementById("erro1")
        span1.innerText = `Selecione o estado`
        temErro = true
    } else if (inputStateClass.value != "none1") {
        temErro = false
    }

    if (inputCityId.value === "none2") {
        const span2 = document.getElementById("erro2")
        span2.innerText = `Selecione a cidade`
        temErro = true
    } else if (inputCityId.value != "none2") {
        temErro = false
    }

    if (temErro === false) {
        formEvent.submit() // metódo que envia o formulário
    }

}


const inputState = document.getElementById("state")

inputState.addEventListener("change", displayOn)

const formEvent = document.getElementById("form")
formEvent.addEventListener("submit", valForm)