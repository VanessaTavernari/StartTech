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