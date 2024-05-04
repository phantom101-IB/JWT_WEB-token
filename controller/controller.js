const jwt = require("jsonwebtoken");
const CustomeAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.json({ msg: "No name and Password" });
    // throw new CustomeAPIError("Please provide Username and Password", 400);
  } else {
    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, "Phantom101", {
      expiresIn: "30d",
    });
    res.status(200).json({ username: username, token: token });
  }
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, Mrs. ${req.user.username}`,
    secret: `Your lucky secret number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
