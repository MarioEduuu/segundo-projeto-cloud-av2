const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    if (req.url === '/') {
        res.end('<h1>Página Inicial</h1><p>Bem-vindo ao projeto de Cloud<br>Segundo Projeto – Disciplina de Desenvolvimento de Software em Nuvem<br>Professor Américo Sampaio.</p>');
    } else if (req.url === '/sobre') {
        res.end('<h1>Sobre a Equipa</h1><p>Projeto de Desenvolvimento de Software em Nuvem.<br>Mário Eduardo Marques - 2316157<br>José Arthur Leite - 2315760</p>');
    } else if (req.url === '/contacto') {
        res.end('<h1>Contacto</h1><p>Página de contacto da equipa.<br>jose.arthur@edu.unifor.br<br>marioedumarq1098@edu.unifor.br</p>');
    }else {
        res.statusCode = 404;
        res.end('<h1>404 - Página não encontrada</h1>');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});