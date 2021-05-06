const fs = require("fs");
const path = require("path");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890", 12);

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
    const contacts = JSON.parse(data);
    console.table(contacts);
  });
}

function getContactById(contactId) {
  // ...твой код
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
    const contacts = JSON.parse(data);
    const contactItem = contacts.find(({ id }) => id === Number(contactId));
    console.table(contactItem);
  });
}

function addContact(name, email, phone) {
  // ...твой код
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
    const contacts = JSON.parse(data);
    const id = nanoid();
    contacts.push({ id: Number(id), name, email, phone });

    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (err) => {
      if (err) {
        console.error(err.message);
        return;
      }
    });
  });
}

function removeContact(contactId) {
  // ...твой код
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
    const contacts = JSON.parse(data);
    fs.writeFile(
      contactsPath,
      JSON.stringify(
        contacts.filter(({ id }) => id !== Number(contactId)),
        null,
        2
      ),
      (err) => {
        if (err) {
          console.error(err.message);
          return;
        }
      }
    );
  });
}

module.exports = { listContacts, getContactById, addContact, removeContact };
