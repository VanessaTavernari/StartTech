// Incluindo um pacote/biblioteca
const http = require('http');
const queryString = require('query-string');
const url = require('url');
const  fs = require('fs');

// Definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Aqui as coisas acontecem / implementação da regra de negócios
const server = http.createServer((req, res) => {
    
  var resposta;
  const urlparse = url.parse(req.url, true);
  // 1 - Receber informacoes do usuario
    const params = queryString.parse(url.parse(req.url, true).search)
    
    // Criar um usuario - Atualizar um usuario(fs.writeFile) fez criar e sub-escrever o usuario
    if(urlparse.pathname == "/criar-atualizar-usuario"){
  
    // 2 - Salvar as informacoes
    fs.writeFile('users/'+ params.id + '.txt', JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('Saved!');

      resposta = "Usuario criado / atualizado com sucesso."

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });

  }
    // Selecionar um usuario
  else if (urlparse.pathname == "/selecionar-usuario"){
    fs.readFile('users/'+ params.id + '.txt', function(err, data){
      resposta = data;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);

    });
  }
  // Remover um usuario
  else if (urlparse.pathname == "/remover-usuario"){
    fs.unlink('users/' + params.id + '.txt', function (err) {
      console.log('File deleted!');

      resposta = err? "Usuario nao encontrado" : "Usuario removido";

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);

    });
  }
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// localhost:3000/criar-atualizar-usurario?nome=vanessa&idade=100&id=1
// localhost:3000/criar-atualizar-usurario?nome=vanessa&idade=32&id=1
// localhost:3000/selecionar-usuario?id=1
// localhost:3000/remover-usuario?id=1
