import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // TODO: validate against Supabase / DB
  res.json({ token: "fake-jwt-token", email });
});

app.listen(4001, () => console.log("Auth service running on http://localhost:4001"));
