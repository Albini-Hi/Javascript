let num = document.querySelector('input#numtxt')
var lista = document.getElementById('flista')
let res = document.querySelector('div#res')
var valores =[]

function numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(numero(num.value) && !inlista(num.value, valores)) {
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}