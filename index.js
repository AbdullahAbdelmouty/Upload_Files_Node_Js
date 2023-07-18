require('dotenv').config();
require('express-async-errors');
const connectDB = require('./DB/connect');
const express = require('express');
const app = express();
const productsRouter = require('./Routers/productRouters');
// const notFoundMiddleware = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

app.use('/api/v1/products', productsRouter);

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);
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