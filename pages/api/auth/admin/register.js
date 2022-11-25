import clientPromise from "../../../../lib/mongodb";
import { adminRegister } from "../../../../lib/validation";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("montana");

    // * Check input validation.
    const { error } = adminRegister(req.body);

    // * Check if user exists.
    const user = await db.collection("user").findOne({ email: req.body.email });
    if (user)
      return res.status(401).json({
        code: 401,
        mesage: "User Exists In The Database, Try Login!",
      });

    if (error)
      return res.status(401).json({
        code: 401,
        message: error.message,
      });

    switch (req.method) {
      case "POST":
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        await db.collection("user").insertOne({
          name: req.body.name,
          email: req.body.email,
          role: req.body.role,
          password: hashedPassword,
        });
        return res.json({
          message: "User Created Successfully",
          user: {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            password: hashedPassword,
          },
        });
      case "GET":
        return res.json({
          message: req.body,
        });
      case "DELETE":
        return res.json({
          message: req.body,
        });
      case "PUT":
        return res.json({
          message: req.body,
        });
      default:
        return res.status(405).json({
          code: 405,
          message: "Wrong Requested Method",
        });
    }
  } catch (err) {
    res.status(401).json({
      code: 401,
      message: err.message,
    });
  }
}
