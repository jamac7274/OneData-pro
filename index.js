const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send(' Dream coding in JAPRO!');
});

app.listen(8080,() => console.log('Server is running!'));
