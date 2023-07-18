require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
const start = async () => {

    app.listen(port, () => console.log(`Listening on port ${port}...`));
}

start();