const app = require("./app");
const mongoose = require("mongoose");
const connectToDb = require("./db/mongoDb.config");
const authRouter = require("./routes/authRoutes");
require("dotenv").config();

const PORT = process.env.PORT;

connectToDb();

//Auth routes
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
