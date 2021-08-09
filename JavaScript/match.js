const textoNaoEstruturado = "Meu cpf é 122.730.357-21";

const regex = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{2}");

console.log(textoNaoEstruturado.match(regex));

