const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./api');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

mongoose.connect(
  'mongodb+srv://admin:Access321@cluster1.o5ujm.mongodb.net/hey?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log('Connected to database!');
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch(err => console.log(err));

console.log('Starting server...');