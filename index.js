require('dotenv').config();
const express = require('express');
const { errorWare } = require('./middlewares/errorWare');
const { dbConfig } = require('./database/config');

const app = express();
dbConfig();

app.use(express.static('public'));

app.use(express.json());

app.use('/api/auth', require('./routes'));

app.use(errorWare());

app.listen(process.env.PORT || 8337, () => {
  console.log(`Bender listening on ${process.env.HOST}:${process.env.PORT}`);
});
