const jwt = require("jsonwebtoken");
const { unauthorizedError } = require("../errors");

const authorizationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new unauthorizedError("No token Available");
    // res.json({ msg: "No Token Available" });
  } else {
    token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.decode(token, "Phantom101");

      const { id, username } = decoded;
      req.user = { id, username };
      next();
    } catch (error) {
      throw new unauthorizedError("Invalid Token");
    }
  }
};

module.exports = authorizationMiddleware;
