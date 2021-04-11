require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

//adding error handling
const { handle404s, errorHandler } = require('./errorHandling');
app.use(handle404s);
app.use(errorHandler);

app.listen(
    process.env.PORT,
    () => console.log('Listen on port ${process.env.PORT}')
);