const express = require('express');
const router = express.Router();

router.post('/post', (req, res) => {
  const { body } = req;
  // Handle the POST request
  console.log(body);
  res.json({ message: 'POST request received', data: body });
});

module.exports = router;
