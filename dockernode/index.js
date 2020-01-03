const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World docker-compose -d -V'));

app.listen(3000);