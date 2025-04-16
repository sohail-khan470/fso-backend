require("dotenv").config();

const express = require("express");
const app = express();
const Note = require("./models/Note");
const connectDB = require("./db/connect");
const morgan = require("morgan");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error");
const cors = require("cors");
require("express-async-errors");
const {
  createMany,
  createNote,
  deleteNote,
  updateNote,
  getAll,
  getOne,
} = require("./controllers/note");
const userController = require("./controllers/user");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(cors());

app.post("/create-bulk", createMany);

app.get("/notes", getAll);

app.post("/notes", createNote);

app.put("/notes/:id", updateNote);

app.delete("/notes/:id", deleteNote);
app.get("/notes/:id", getOne);

app.post("/users/register", userController.register);
app.get("/users", userController.getAll);
app.post("/login", userController.login);

app.use(notFound);

app.use(errorHandler);

app.listen(4100, async () => {
  await connectDB();
  console.log("Server is running on port 4100");
});
