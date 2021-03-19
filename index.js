require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { errorWare } = require('./middlewares/errorWare');
const { dbConfig } = require('./database/config');

const app = express();
dbConfig();

app.use(cors());
app.use(express.static('public'));

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.use(errorWare());

app.listen(process.env.PORT, () => {
  console.log(`Bender listening on port ${process.env.PORT}`);
});
