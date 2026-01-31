require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes.js');
const contactRoutes = require("./routes/contactRoutes.js");

const app = express();

// ✅ CORS for Vercel + Localhost
app.use(cors({
  origin: [
    "https://portfolio-one-mu-41.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

// app.options("*", cors());

// ✅ JSON middleware
app.use(express.json());

// ✅ DB
connectDB();

// ✅ Routes
app.get('/', (req, res) => {
  res.send('Portfolio API running ✅');
});

app.use('/api/projects', projectRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
