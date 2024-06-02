require("dotenv").config();
const bodyParser = require("body-parser")
let cors = require("cors");
const express = require("express");
const userRoutes = require("./routes/user");
const eventRoutes = require("./routes/event");
const cfpsRoutes = require("./routes/cfp");
const striperoute = require("./routes/stripe");
const app = express();

//middleware
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

//db
const connectDB = require("./db/connect");

app.use(express.json());

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Initialized successfully !");
});

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/cfps", cfpsRoutes);
app.use("/api/stripe", striperoute);

const start = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    await connectDB(process.env.MONGODB_URI);
    // console.log(process.env.MONGODB_URI);
    app.listen(port, console.log(`Server started at port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
