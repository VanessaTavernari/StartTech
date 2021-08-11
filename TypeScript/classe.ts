// INTERFACE ...
interface Usuario {
    name: string;
    email: string;
    address?: string
}

function getUser() {
    return {
        name: "Vanessa",
        email: "vanessa@vanessa.com"
    }
}

function setUser(usuario: Usuario) {
    //...
}

// CLASSE ...
class Data{ 
    dia: number;
    mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(10, 1, 2020);
console.log(data.dia);

// CLASSE SENDO CRIADA DE OUTRA MANEIRA ...
class Pessoa {
    constructor(public nome: string, public sobrenome: string, public endereco: string) {

    }
}

const pessoa = new Pessoa("Ana", "Mendes", "Avenida Professor Dadinho, 171");
console.log(pessoa.nome);


// CLASSE ...
class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { }
    private alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    }

    acelerar() {
        this.alterarVelocidade(5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro("Chevrolet", "Prisma");
carro.acelerar();

// HERANÇA ...
class Camaro extends Carro {
    private turbo = false;

    constructor() {
        super("Chevrolet", "Camaro", 500);
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
