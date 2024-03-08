const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("hit there!");
})

app.listen(4000, () => {
    console.log("App listening")
})

