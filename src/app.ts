import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes";

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
