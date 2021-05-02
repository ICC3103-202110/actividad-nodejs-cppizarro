function Fibonacci(n){
    if (n < 2){
        return n
    }

    else{
        return Fibonacci(n - 1) + Fibonacci(n - 2)
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Elija un numero: ", numero => {
    console.log(Fibonacci(numero))
    rl.close()
});