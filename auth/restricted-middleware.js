const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

const Users = require("../users/users-model.js");

module.exports = (req, res, next) => {
  //   const { username, password } = req.headers;

  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ you: "shall not pass" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ you: "cant touch this" });
  }

  //   if (username && password) {
  //     Users.findBy({ username })
  //       .first()
  //       .then(user => {
  //         if (user && bcrypt.compareSync(password, user.password)) {
  //           next();
  //         } else {
  //           res.status(401).json({ message: "Invalid credentials" });
  //         }
  //       })
  //       .catch(err => {
  //         res.status(500).json(err);
  //       });
  //   } else {
  //     res.status(400).json({ message: "No credentials provided" });
  //   }
};
