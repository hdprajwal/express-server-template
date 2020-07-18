const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const session = require("express-session");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const path = require("path");

/**
 * Load congif/.env file
 */
dotenv.config("./.env");
const PORT = process.env.PORT;

/**
 * configure middelware
 */

// Morgan Logger
app.use(
  morgan(
    "[:date[clf]] :method :url :status :response-time ms - :res[content-length]"
  )
);

// Cors middleware
app.use(cors());

// Helmet middelware
app.use(helmet());

// configure your session here
// app.use(session({}))

/**
 * Routes
 */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
