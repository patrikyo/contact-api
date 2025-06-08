import { Router } from "express";
import ContactController from "../controllers/contactController";

const router = Router();
const contactController = new ContactController();
router.post("/", contactController.createContact);
router.get("/:id", contactController.getContact);

export default router;
