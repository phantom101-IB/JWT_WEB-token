require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const router = require("./routes/routes");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", router);

app.use(errorHandlerMiddleware);
app.use(notFound);

const PORT = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Port ${PORT} is live.....`);
    });
  } catch (error) {}
};

start();
