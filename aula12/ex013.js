var hoje = new Date()
var diaSem = hoje.getDay()
/*
0 - domingo
1 - segunda
2 - terça
3
4
5
6 - sábado
*/
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sábado')
        break
    default:
}