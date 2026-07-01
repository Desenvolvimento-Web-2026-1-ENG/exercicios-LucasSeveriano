import http from 'http';

const PORTA = 3000;

const servidor = http.createServer((req, res) => {
  // Configurando o cabeçalho da resposta para retornar JSON
  res.setHeader('Content-Type', 'application/json');

  // Sistema simples de rotas
  if (req.url === '/api/status' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ 
      status: 'Online', 
      mensagem: 'Meu primeiro servidor Node.js funciona!' 
    }));
  } else {
    // Tratamento para rota não encontrada (Erro 404)
    res.writeHead(404);
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
  }
});

// Iniciando o servidor na porta definida
servidor.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORTA}`);
});