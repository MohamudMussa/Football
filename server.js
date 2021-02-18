'use strict'

'use strict';
const express = require('express');
const createError = require('http-errors');

// INIT MY APP
const app = express();
app.use(express.json());

// Middleware
const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

app.use(logger);

const footballRoute = require("./Routes/football");

app.use("/football", footballRoute);

// error handling
app.use((req,res,next) => {
    next(createError(404, 'Resource not found'));
});

app.listen(9500);
