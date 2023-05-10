const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateTokenHandler = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
            title: "Unauthorized",
            message: "Not authorized, token failed",
            stackTrace: err.stack
        });
      }
      req.user = decoded.user;
      return next();
    });
  }
  if (!token) {
      return res.status(401).json({
            title: "Unauthorized",
            message: "Not authorized, no token"
      });
  }
});

module.exports = validateTokenHandler;
