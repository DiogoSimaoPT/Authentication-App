import express, { response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/sign", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashPassword,
      },
    });

    res.status(201).json({ message: "User created with sucess" });
  } catch (error) {
    res.status(401).json({ message: "Something went wrong" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.status(400).json({ message: "Error: User not found" });
  }

  const isMatch = bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Error: Wrong Password" });
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });

  res.status(200).json(token);
});
export default router;
