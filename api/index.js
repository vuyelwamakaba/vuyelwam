const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req,res) => {
    res.send('working, use post')
})

app.post('/sort-characters', (req, res) => {
  const inputString = req.body.data;

  if (typeof inputString !== 'string') {
    return res.status(400).json({ error: 'Invalid input. "data" must be a string.' });
  }

  // Convert string to character array
  const charArray = inputString.split('');

  // Sort alphabetically
  const sortedArray = charArray.sort();

  // Return result
  res.json({ word: sortedArray });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});