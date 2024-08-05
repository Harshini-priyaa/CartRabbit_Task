// backend/server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
    console.log('Received login request:', req.body);
    const { email, password } = req.body;
    if (email === 'user@example.com' && password === 'password') {
      res.send({ message: 'Login successful' });
    } else {
      res.status(401).send({ error: 'Invalid credentials' });
    }
  });
  
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
