const { request, response } = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const usersGet = (req, res) => {
  const { limit, page } = req.query;
  res.json({
    query,
  });
};

const userPost = async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });

  const salt = bcrypt.genSaltSync();

  user.password = bcrypt.hashSync(password, salt);

  await user.save();

  res.status(201).json({
    message: "Usuario creado",
    user,
  });
};

const userPut = (req, res) => {
  const { id } = req.params;
  res.json({
    id,
  });
};

const userDelete = (req, res) => {
  res.json({});
};

module.exports = {
  userDelete,
  usersGet,
  userPost,
  userPut,
};
