// server/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const albumsRoutes = require('./routes/albums');
app.use('/api/albums', albumsRoutes);
console.log(`Route ${albumsRoutes} registriert.`);

console.log(app.routes);

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});