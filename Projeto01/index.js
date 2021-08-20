const express = require ('express');
const app = express();

const port = 3000;

app.use(express.json()); // mostrar que vamos trabalhar com json 

const filmes = [
    "Meu malvado favorito",
    "O bom dinossauro",
    "O poderoso chefinho",
    "Vovó Zona 2",
    "Beleza Oculta"
];

// para retornar minha primeira rota, Hi seja-bem vindo!

app.get('/', (req, res) => {
    res.send('Hi, seja bem-vindo!');

});

// minha listagem de filmes - Primeira rota

app.get('/filmes', (req, res) => {

    res.send(filmes);
});

// rota do filme por id
app.get('/filmes/:id', (req,res) => {

    const id = req.params.id - 1;
    const filme = filmes[id];
});

// rota para cadastrar novo filme :::
    /// READ - GET
    /// CRIAR - POST
    /// UPDATE - PUT
    /// DELETE - DELETE

app.post('/filmes', (req, res) => {
    const filme = req.body.filme;
    const id = filmes.length;
    filmes.push(filme);
    
    res.send(`Filme cadastrado com êxito: ${filmes}.
    O ID do filme é ${id}`)
});

app.put('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = req.body.filme;
    const nome_anterior = filmes[id];
    filmes[id] = filme;
    res.send(`Filme anteior: ${nome_anterior}, atualizado com êxito para: ${filme}.`)

});

app.delete('filmes/:id', (req, res) => {
    const id = req.params.id -1;
    const filme = filmes[id];
    if(!filme) {
        res.send('Filme inexistente');
    }
    delete filmes [id];
    res.send("Filme removido com êxito");
});

// sugestão da galeria Splice

app.delete('filmesSplice/:id', (req, res)=>{
    const id = req.params.id-1;
    filmes.splice(id,1)
/// deletar filmes id.
    res.send("Filme removido com êxito.")
});

app.listen(port, function() {
    console.info(` App rodando na porta http://localhost:${port}/`);
});




