const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const router = require('./routes');
const errorsHandling = require('./middlewares/errorsHandling');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');

const { PORT = 3000} = process.env;

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(requestLogger);
app.use(cors);

app.use(router);

app.use(errorLogger);

app.use(errors());
app.use(errorsHandling);

app.listen(PORT);
