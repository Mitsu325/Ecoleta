import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('listagem de usuários');

    res.json([
        'Diego',
        'Cleiton',
        'Patricia',
        'Daniel',
        'Bia'
    ]);
});

app.listen(3333);
