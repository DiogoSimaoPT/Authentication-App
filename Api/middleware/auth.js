import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Acess Denied" });
  }

  try {
    jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  next();
};

export default auth;
