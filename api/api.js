const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
  const data = req.body; 
  console.log(data); // Log the received data to the console

  // Render a new HTML page with the received data
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Satye Received Data</title>
    </head>
    <body>
      <h1>Received Data:</h1>
      <ul>
        ${Object.entries(data).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}
      </ul>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});