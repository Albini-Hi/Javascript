function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verefique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //menino
                img.setAttribute('src','menino.png')
            } else if ( idade < 21) {
                //moço
                img.setAttribute('src','moço.png')
            } else if (idade < 50) {
                //homem
                img.setAttribute('src','homem.png')
            } else {
                //senhor
                img.setAttribute('src','senhor.png')
                
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //menina
                img.setAttribute('src','menina.png')
            } else if ( idade < 21) {
                //moça
                img.setAttribute('src','moça.png')
            } else if (idade < 50) {
                //mulher
                img.setAttribute('src','mulher.png')
            } else {
                //senhora
                img.setAttribute('src','senhora.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}