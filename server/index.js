const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/db");
// const userRoute = require("./routes/user");
const movieRoute = require("./routes/movie");
const genreRoute = require("./routes/genre");

require("dotenv").config();
connectDb();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/genres", genreRoute);

app.all("*", (req, res) => {
  res.status(400).json({
    message: "This page dons't exist",
  });
});
const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
