const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  res.send("logged In");
};

const dashboard = async (req, res) => {
  res.send("Dash Board loaded");
};

module.exports = {
  login,
  dashboard,
};
