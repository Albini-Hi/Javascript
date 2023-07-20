let num = document.querySelector('input#numtxt')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores =[]

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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()

}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length

        res.innerHTML = ''
        //res.innerHTML += `<p>Ao todo, temos ${} número de elementos</p>` tem um erro aqui
    }
}