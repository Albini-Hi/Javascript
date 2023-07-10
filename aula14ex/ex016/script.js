function contar() {
    var ini = document.getElementById('iniciotxt')
    var fim = document.getElementById('fimtxt')
    var passo = document.getElementById('passotxt')
    var res = document.getElementById('res')
    var cont = res

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
    }
    while (ini.Number + fim.Number > res) do {
        res.innerHTML('cont')
    }
}