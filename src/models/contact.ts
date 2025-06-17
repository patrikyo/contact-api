import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, requried: true },
  emailAddress: { type: String, requried: true },
  phoneNumber: { type: String, required: true },
  userMessage: { type: String, requried: true },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
