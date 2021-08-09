var elementos = [];
var topo = -1;
const max = 10;

function push(num){
    if (topo < max){
        topo = topo + 1;
        elementos[topo] = num;
    } else{
        console.log("Pila esta cheia");
    }
}

function estaVazia(){
    return topo == -1;
}

function pop(){
    if(topo != -1){
        let num = elementos[topo];
        topo = topo -1;
        return num;
    } else{
        console.log("Pilha esta vazia");
    }
}

// push(10);
// push(20);
// push(30);

// console.log(elementos);

// console.log(pop());
// console.log(pop());
// console.log(pop());

// -------------- converter numero decimal para binario, so para no 0(zero)
// 10 / 2
//  0   5 / 2
//      1   2 / 2
//          0   1 / 2
//              1   0
//              numero binario de 10 e 1010


var numeroDecimal = 10;
var resto;

console.log("Hora de empilhar....")
while (numeroDecimal != 0) {
    resto = parseInt(numeroDecimal % 2);
    push(resto);
    console.log(resto);
    numeroDecimal = parseInt(numeroDecimal / 2);
}
console.log("Desempilhando tudo...........")
while(!estaVazia()) {
    console.log(pop());
}