const express = require ('express');
const app = express();

const port = 3000;

app.use(express.json()); // mostra que vamos trabalhar com json

const games = [
    "Mario Bross",
    "Sonic",
    "The sims",
    "Gta"
];

// para retornar a primeira rota

const msgInicio = [
    "Sejam bem-vindos aos jogos!!",
    "Servidor da jogatina",
    "Hi, Bluemers"
];

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num) {
    return msgInicio[num];
}

const msg = "teste"

app.get('/', (req, res) =>{
    res.send(`<h1> ${frase(randomMinMax(0,msgInicio.length))}</h1>`);
});

games.forEach(function (item, indice){
    console.log(item, indice);
});

app.get('/games/:id', (req,res) => {
    const id = req.params.id;
    const game = games[id-1];
    if (id > games.length || id < 1){
        res.send("Id inválido, tente de novo");
    }
    else{
            res.send(game);
        }
    });
   
app.post('/games', (req,res) =>{
    const game = req.body.game;
    const id = games.length;
    games.push(game);
    res.send(`Game adicionado com êxito: ${game}.
    O id do game é ${id}`) 
});

app.put('/games/:id', (req,res) =>{
    const id = req.params.id - 1;
    const game = req.body.game;
    const nome_anterior = games[id];
    games[id] = game;
    res.send(`Game anterior: ${nome_anterior}, atualizado com êxito para:${games}.`)
    
});
   
app.delete('games/:id', (req, res) => {
    const id = req.params.id -1;
    const game = games[id];
    if(!game) {
        res.send('Game inexistente');
    }
    delete games [id];
    res.send("Game removido com êxito!");
});

app.delete('gamesSplice/:id', (req, res) => {
    const id = req.params.id-1;
    games.splice(id,1)
    res.send("Game removido com êxito!")
});

app.listen(port, () => {
        console.info(`App esta rodando em: http://localhost:${port}/`);
});



// Professor não liga que está tudo comentado não,
// é para eu poder gravar.. Porque ainda está meio nebuloso kkk