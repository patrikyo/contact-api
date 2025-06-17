import Contact from "../models/contact";
import { Request, Response } from "express";

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
