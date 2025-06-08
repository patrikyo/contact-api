"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactController {
    constructor() {
        this.contacts = [];
        this.currentId = 1;
        this.createContact = (req, res) => {
            const { name, email, phone, message } = req.body;
            const newContact = { id: this.currentId++, name, email, phone, message };
            this.contacts = [...this.contacts, newContact];
            res.status(201).json(newContact);
        };
        this.getContact = (req, res) => {
            const { id } = req.params;
            const contact = this.contacts.find((c) => c.id === parseInt(id));
            if (contact) {
                res.status(200).json(contact);
            }
            else {
                res.status(404).json({ message: "Contact not found" });
            }
        };
    }
}
exports.default = ContactController;
