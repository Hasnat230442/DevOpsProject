const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('E-commerce Home Page'));
app.listen(3000, () => console.log('Server on http://localhost:3000'));