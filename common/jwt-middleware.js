<<<<<<< HEAD
// utils/jwt.js
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "yourSecretKey";

function signToken(payload, expiresIn = "1h") {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

function decodeToken(token) {
  return jwt.decode(token); // no validation
}

module.exports = {
  signToken,
  verifyToken,
  decodeToken,
};
=======
// utils/jwt.js
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "yourSecretKey";

function signToken(payload, expiresIn = "1h") {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

function decodeToken(token) {
  return jwt.decode(token); // no validation
}

module.exports = {
  signToken,
  verifyToken,
  decodeToken,
};
>>>>>>> 5f9b45035c30f3247458c6220fe3f1dfc55656c2
