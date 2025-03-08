// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002; // Or any port you prefer

app.use(cors());
app.use(bodyParser.json());

app.post('/api/count', (req, res) => {
  const text = req.body.text;

  const characterCount = text.length;
  const wordCount = text.trim().split(/\s+/).length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const lineCount = text.split(/\r\n|\r|\n/).length;

  res.json({
    characterCount,
    wordCount,
    sentenceCount,
    lineCount,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
