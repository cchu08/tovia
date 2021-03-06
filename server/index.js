const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../client/public/index.html`));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
