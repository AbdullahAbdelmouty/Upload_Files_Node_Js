require('dotenv').config();
require('express-async-errors');
const connectDB = require('./DB/connect');
const express = require('express');
const app = express();
const productsRouter = require('./Routers/productRouters');
const error_handler = require('./Middlewares/error_handler');
const not_found = require('./Middlewares/not_found');


app.use(express.json());

app.use('/api/v1/products', productsRouter);
//Middlewares
app.use(not_found);
app.use(error_handler);
const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();