// backend/server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let users = []; // In-memory user storage

app.post('/api/login', (req, res) => {
    console.log('Received login request:', req.body);
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        res.send({ message: 'Login successful' });
    } else {
        res.status(401).send({ error: 'Invalid credentials' });
    }
});

app.post('/api/users/register', (req, res) => {
    console.log('Received registration request:', req.body);
    const { email, mobile, password } = req.body;
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).send({ error: 'User already exists' });
    }
    users.push({ email, mobile, password });
    res.send({ message: 'Registration successful' });
});

app.get('/api/services', (req, res) => {
    const services = [
        { id: 1, name: 'Engine Repair' },
        { id: 2, name: 'Battery Replacement' },
        { id: 3, name: 'Tire Change' },
        { id: 4, name: 'Chain Adjustment' }
    ];
    res.json(services);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
