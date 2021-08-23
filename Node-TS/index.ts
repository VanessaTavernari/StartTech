// Importacao de bibliotecas
import { parse } from "query-string";
import * as url from "url";
import { writeFile } from "fs";
import { createServer, IncomingMessage, ServerResponse } from "http";

// Definicao de porta
const port = 5000

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    // Implementar codigo aqui
    const urlparse = url.parse(request.url ? request.url : "", true);

    var resposta ;
    // Recebe informacoes do usuario
    const params = parse(urlparse.search ? urlparse.search : "");

    // Criar um usuario - Atualizar um usuario(fs.writeFile) fez criar e sub-escrever o usuario
    if(urlparse.pathname == "/criar-atualizar-usuario"){
  
    // 2 - Salvar as informacoes
    writeFile('users/'+ params.id + '.txt', JSON.stringify(params), function (err: any) {
      if (err) throw err;
      console.log('Saved!');

      resposta = "Usuario criado / atualizado com sucesso."

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end(resposta);
    });
  }
});

// Execucao
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});