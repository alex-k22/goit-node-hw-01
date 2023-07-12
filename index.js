import contactsServices from "./contacts.js";
import yargs from "yargs";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsServices.listContacts();
      return console.table(contacts);

    case "get":
      // ... id
      const contact = await contactsServices.getContactById(id);
      return console.log(contact);

    case "add":
      // ... name email phone
      const addContact = await contactsServices.addContact({
        name,
        email,
        phone,
      });
      return console.log(addContact);

    case "remove":
      // ... id
      const removeContact = await contactsServices.removeContact(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const { argv } = yargs(process.argv);
invokeAction(argv);
