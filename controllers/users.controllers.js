const { request, response } = require("express");

const usersGet = (req, res) => {
  const { limit, page } = req.query;
  res.json({
    query,
  });
};

const userPost = (req, res) => {
  const { name, email } = req.body;
  res.json({
    name,
    email,
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
