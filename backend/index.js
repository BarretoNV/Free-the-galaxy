const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'TCW S07E08',
        dia:'10/04/2020'
    })
});

app.listen(3333);