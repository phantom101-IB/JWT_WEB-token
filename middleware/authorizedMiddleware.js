const jwt = require("jsonwebtoken");

const authorizationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // throw new CustomeAPIError("No token Available", 400);
    res.json({ msg: "No Token Available" });
  } else {
    token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.decode(token, "Phantom101");

      const { id, username } = decoded;
      req.user = { id, username };
      next();
    } catch (error) {
      throw new CustomeAPIError("Invalid Token", 401);
    }
  }
};

module.exports = authorizationMiddleware;
