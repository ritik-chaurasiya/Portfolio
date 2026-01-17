require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');

// 🟩 IMPORT ROUTES
const contactRoutes = require("./routes/contactRoutes");


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Portfolio API running ✅');
});

app.use('/api/projects', projectRoutes);
app.use("/api/contact", contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
