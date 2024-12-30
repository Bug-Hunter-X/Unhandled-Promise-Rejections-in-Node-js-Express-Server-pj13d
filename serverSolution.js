const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const timeoutId = setTimeout(() => {
    res.send('Hello!');
    clearTimeout(timeoutId);
  }, 5000); // Simulate a 5-second delay
  req.on('close', () => {
    clearTimeout(timeoutId);
    console.log('Client disconnected');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});