const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const restricted = require("../auth/restricted-middleware");

const usersRouter = require("../users/usersRouter");
const authRouter = require("../auth/authRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", restricted, (req, res) => {
  res.send("We are in business baby!");
});

module.exports = server;
