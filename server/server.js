require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes.js");
const contactRoutes = require("./routes/contactRoutes.js");

const app = express();

// ✅ JSON middleware
app.use(express.json());

// ✅ CORS CONFIG (Vercel + Localhost)
const allowedOrigins = [
  "https://portfolio-one-mu-41.vercel.app",
  "http://localhost:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
};

// ✅ Apply CORS to all requests
app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

// ✅ Connect DB
connectDB();

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Portfolio API running ✅");
});

// ✅ Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
