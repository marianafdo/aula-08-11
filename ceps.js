const express = require('express');
const srv = express();

let ceps = new Map();

ceps.set('93010210', {log: 'r. primeiro de março', bairro: 'centro', cidade: 'são leopoldo', uf: 'RS'});
ceps.set('93040260', {log: 'r. josé piovan', bairro: 'são josé', cidade: 'são leopoldo', uf: 'RS'});
ceps.set('93044030', {log: 'r. cel. bordini', bairro: 'santo andré', cidade: 'são leopoldo', uf: 'RS'});

srv.get('/cep/:cep', (req, res)=>{
    res.json(ceps.get(`${req.params.cep}`));
});

srv.listen(9090, ()=>{
    console.log(`Pronto para mostrar CEPS`);
})