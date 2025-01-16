const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors({ 
  origin: 'http://localhost:3001' // Replace with the origin of the client-side application
})); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.use('/api', require('./monodb'));
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
app.post('/receive-data', (req, res) => {
  const receivedData = req.body; 
  console.log('Received data:', receivedData);

  // Process the received data (e.g., save to database, perform calculations)

  res.status(200).json({ message: 'Data received successfully!' }); 
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});