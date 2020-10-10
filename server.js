const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./api');
const port = 3000;

app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});