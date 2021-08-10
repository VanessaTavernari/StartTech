"use strict";
// Boolen 
var contaPaga = false;
// Number
var idade = 32;
var avaliacao = 4.5;
// String
var nome = "Vanessa";
// Array
var idades = [23, 28, 45, 100];
var idades2 = [23, 46, 77, 99];
// Tuple
var jogadores;
jogadores = ["Ana", "Bia", "Duda"];
var jogadores2;
jogadores2 = ["Ana", 33, true];
// Enum - posso usar como objeto
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var situacao = StatusAprovacao.Aprovado;
// Any
var retornoDaApi = [123, "Ana", false];
var retornoDaApi2 = {
//...
};
// Void - quando a função não retorna nada
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object - 
function criar(objeto) {
    //...
}
criar({
    propriedade: 1,
});
// criar("Ana") Dá erro
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro("Algo falhou");
}
// Union Types - mais de um tipo 
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota("10");
exibirNota(8);

// Alias Type - cria um type
var colaboradores = [{
        nome: "Ana",
        sobrenome: "Alves",
        dataNascimento: new Date()
    }, {
        nome: "Bia",
        sobrenome: "Dias",
        dataNascimento: new Date()
    }];
function tratarFuncionarios(colaboradores) {
    for (var _i = 0, colaboradores_1 = colaboradores; _i < colaboradores_1.length; _i++) {
        var colaborador = colaboradores_1[_i];
        console.log("Nome do colaborador: ", colaborador.nome);
    }
}
tratarFuncionarios(colaboradores);
