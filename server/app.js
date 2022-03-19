const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
