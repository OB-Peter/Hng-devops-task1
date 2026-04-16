const express = require('express');
const app = express();
const PORT = 3010;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: "API is running" });
});

app.get('/health', (req, res) => {
    res.status(200).json({ message: "healthy" });
});

app.get('/me', (req, res) => {
    res.status(200).json({
        name: "Oluyemi Boluwatife Peter",
        email: "obpeterapp@gmail.com",
        github: "https://github.com/OB-Peter",
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});app.get('/', (req, res) => {
  res.send('Hello World!');
});