require("dotenv").config();

const express = require("express");
const app = express();
const Note = require("./models/Note");
const connectDB = require("./db/connect");
const morgan = require("morgan");
const notFound = require("./middlewares/not-found");
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

app.use(morgan("dev"));
app.use(express.json());

app.post("/create-bulk", createMany);

app.get("/notes", getAll);

app.post("/notes", createNote);

app.put("/notes/:id", updateNote);

app.delete("/notes/:id", deleteNote);
app.get("/notes/:id", getOne);

app.post("/users/create", userController.createUser);
app.get("/users", userController.getAll);
app.post("/login", userController.login);

app.use(notFound);

app.listen(4100, async () => {
  await connectDB();
  console.log("Server is running on port 4100");
});
