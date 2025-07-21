const app = require("./app");
const mongoose = require("mongoose");
const connectToDb = require("./db/mongoDb.config");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

connectToDb();

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
