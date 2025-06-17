import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.buifg5k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
const PORT = process.env.PORT || 3100;
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
