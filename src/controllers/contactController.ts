import { Contact } from "../types";

class ContactController {
  private contacts: Contact[] = [];
  private currentId: number = 1;

  createContact = (req: any, res: any): void => {
    const { name, email, phone, message } = req.body;
    const newContact = { id: this.currentId++, name, email, phone, message };
    this.contacts = [...this.contacts, newContact];
    res.status(201).json(newContact);
  };

  getContact = (req: any, res: any): void => {
    const { id } = req.params;
    const contact = this.contacts.find((c) => c.id === parseInt(id));
    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  };
}

export default ContactController;
