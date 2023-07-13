let num = [3,7,8,4,9]
num.sort()
/*console.log(`O vetor tem ${num.length} posições `)
console.log(`O vetor na ordem crescente é ${num.sort()}`)
for(let pos = 0 ; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}