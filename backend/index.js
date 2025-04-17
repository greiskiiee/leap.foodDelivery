import express, { json } from "express";
import cors from "cors";
import { connectMongoDB } from "./connectDB.js";
import { userRouter } from "./routes/user.js";
import { categoryRouter } from "./routes/category.js";

const port = 8000;
const app = express();

connectMongoDB();

app.use(cors());
app.use(json());

app.use("/user", userRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
