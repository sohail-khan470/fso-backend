<<<<<<< HEAD
const Note = require("../models/Note");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const getTokenFrom = (req) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

const getAll = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get notes" });
  }
};

const createMany = async (req, res) => {
  const notes = req.body;
  try {
    await Note.insertMany(notes);
    res.status(201).json({ message: "Notes added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add notes" });
  }
};

const createNote = async (req, res) => {
  console.log("@addding new note");
  /**decode token and verify user */
  // const decodedToken = jwt.verify(getTokenFrom(req), process.env.JWT_SECRET);
  // if (!decodedToken.id) {
  //   return res.status(401).json({ error: "token invalid" });
  // }
  // const user = await User.findById(decodedToken.id);

  /**end token logic */
  console.log(req.body);

  const { content, important } = req.body;
  try {
    const newNote = new Note({ content, important });
    await newNote.save();
    // user.notes.push(newNote._id);
    // await user.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add note" });
  }
};

const deleteNote = async (req, res) => {
  const id = req.params.id;
  try {
    await Note.findByIdAndDelete(id);
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete note" });
  }
};

const updateNote = async (req, res) => {
  console.log("@updating note");
  const id = req.params.id;
  const data = req.body;
  console.log(data);

  try {
    const note = await Note.findByIdAndUpdate(id, data);
    console.log(note);
    res.status(200).json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update note" });
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get note" });
  }
};

module.exports = {
  getAll,
  getOne,
  createMany,
  createNote,
  deleteNote,
  updateNote,
};
=======
const Note = require("../models/Note");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const getTokenFrom = (req) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

const getAll = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get notes" });
  }
};

const createMany = async (req, res) => {
  const notes = req.body;
  try {
    await Note.insertMany(notes);
    res.status(201).json({ message: "Notes added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add notes" });
  }
};

const createNote = async (req, res) => {
  console.log("@addding new note");
  /**decode token and verify user */
  // const decodedToken = jwt.verify(getTokenFrom(req), process.env.JWT_SECRET);
  // if (!decodedToken.id) {
  //   return res.status(401).json({ error: "token invalid" });
  // }
  // const user = await User.findById(decodedToken.id);

  /**end token logic */
  console.log(req.body);

  const { content, important } = req.body;
  try {
    const newNote = new Note({ content, important });
    await newNote.save();
    // user.notes.push(newNote._id);
    // await user.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add note" });
  }
};

const deleteNote = async (req, res) => {
  const id = req.params.id;
  try {
    await Note.findByIdAndDelete(id);
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete note" });
  }
};

const updateNote = async (req, res) => {
  console.log("@updating note");
  const id = req.params.id;
  const data = req.body;
  console.log(data);

  try {
    const note = await Note.findByIdAndUpdate(id, data);
    console.log(note);
    res.status(200).json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update note" });
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get note" });
  }
};

module.exports = {
  getAll,
  getOne,
  createMany,
  createNote,
  deleteNote,
  updateNote,
};
>>>>>>> 5f9b45035c30f3247458c6220fe3f1dfc55656c2
