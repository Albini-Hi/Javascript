// RECURSIVIDADE

function fatorial(n) {
    if(n==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(3))

/*
5! é a mesma coisa que 5x4x3x2x1
5! = 5x4x3x2x1
5! = 4x4!
n! = n x (n-1)!
1! = 1
*/