const express = require('express');
const cors = require('cors');
const body = require('body-parser');

const app = express()

app.use(cors());
app.use(body.json());

app.listen(8080, () => {
    console.log('Listening on port 8080');
});

var messages = [];

app.get('/', (req, res) => {
    res.send(JSON.stringify(messages));
});

app.post('/', (req, res) => {
    messages.push({
        message: req.body.message,
        time: new Date()
    });
    console.log(req.body.message);
    res.send(JSON.stringify(messages));
});
