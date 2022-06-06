const express = require('express');
const app = express();
const save = require('./routes/save');
const open = require('./routes/open');

const DB_Connection = require('./utils/connection');
//** connection Database
DB_Connection()
  .then(() => {
    console.log('Database connected Successfully!');
  })
  .catch((err) =>
    console.log('Cannot Connect your Database !! Error -->  ', err)
  );
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello! this is backend for Bio-nic gen');
});
app.use('/api/file/save', save);
app.use('/api/file/open', open);
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log('Running at PORT ', port);
});
