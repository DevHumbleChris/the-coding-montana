import clientPromise from "../../../../lib/mongodb";
import { adminRegister } from "../../../../lib/validation";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("montana");

    // * Check input validation.
    const { error } = adminRegister(req.body);

    // * Check if user exists.
    const user = await db.collection("user").find({}).toArray();
    if (user)
      return res.status(403).json({
        code: 403,
        mesage: "User Exists In The Database, Try Login!",
      });

    if (error)
      return res.status(401).json({
        code: 401,
        message: error.message,
      });

    switch (req.method) {
      case "POST":
        const results = await db.collection("user").insertOne({
          name: req.body.name,
          email: req.body.email,
          role: req.body.role,
        });
        return res.json({
          message: results,
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
        return res.status(400).json({
          code: 400,
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
