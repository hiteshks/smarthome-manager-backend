const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

//Auth routes
app.use("/api/auth", authRoutes);

//Test route
app.get("/test", (req, res) => res.send("SmartHome Manager Backend Running"));

module.exports = app;
