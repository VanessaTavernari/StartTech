// Boolen 
const contaPaga: boolean = false;

// Number
const idade: number = 32;
const avaliacao: number = 4.5;

// String
const nome: string = "Vanessa";

// Array
const idades:  number[] = [23, 28, 45, 100];
const idades2: Array<number> = [23, 46, 77, 99];

// Tuple
let jogadores: [string, string, string];
jogadores = ["Ana", "Bia", "Duda"];
let jogadores2: [string, number, boolean];
jogadores2 = ["Ana", 33, true];

// Enum - posso usar como objeto
enum StatusAprovacao {
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}
const situacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaApi: any[] = [123, "Ana", false];
const retornoDaApi2: any = {
    //...
}

// Void - quando a função não retorna nada
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object - 
function criar(objeto: object) {
    //...
}
criar({
    propriedade: 1,
})
// criar("Ana") Dá erro

// Never
function loopInfinito(): never {
    while(true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro("Algo falhou");
}


function somar(numero1: number, numero2: number){
    return numero1 + numero2;
}

const numero3 = 20;
const numero4 = 150;

const total = somar(numero3, numero4);
console.log(total);