function contar() {
    var ini = document.getElementById('iniciotxt')
    var fim = document.getElementById('fimtxt')
    var passo = document.getElementById('passotxt')
    var res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Impossível contar')
    } else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1f449}`
            }
        }else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += ` \u{1f3c1}`        
    }
    
}