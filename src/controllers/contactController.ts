import Contact from "../models/contact";
import { Request, Response } from "express";

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

class ContactController {
  createContact = (req: Request, res: Response) => {
    const { firstName, lastName, emailAddress, phoneNumber, userMessage } =
      req.body;

    Contact.create({
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      userMessage,
    })
      .then((newContact) => {
        transporter
          .sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: "Ny kontaktförfrågan",
            text: `Du har fått ett nytt meddelande från ${firstName} (${emailAddress}): ${userMessage}`,
          })
          .then(() => console.log("E-post skickat!"))
          .catch((err) => console.error("Fel vid e-post:", err));
        res.status(201).json(newContact);
      })
      .catch((err) => {
        res.status(500).json({ message: "Error creating contact", error: err });
      });
  };

  getContact = (req: Request, res: Response) => {
    const { id } = req.params;
    Contact.findById(id)
      .then((contact) => {
        if (contact) {
          res.status(200).json(contact);
        } else {
          res.status(404).json({ message: "Contact not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Error fetching contact", error: err });
      });
  };
}

export default ContactController;
