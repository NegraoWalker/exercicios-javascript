/*Verifique se um usuário pode dirigir:*/
const nome = window.prompt('Qual o seu nome?')
const idade = Number(window.prompt('Qual a sua idade?'))
const cnh = window.prompt('Possui CNH? Digite Sim caso tenha')

if (idade >= 18 && (cnh === 'Sim' || 'sim')) {
    window.alert(`${nome} liberado para dirigir!`)
} else {
    window.alert(`${nome} sem liberação para dirigir!!`)
}