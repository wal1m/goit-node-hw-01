const fs = require("fs");
// import fs from "fs/promises";
const path = require("path");
// import path from "path";
// import { fileURLToPath } from "url";
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890", 12);

// console.log(nanoid());

const contactsPath = path.join(__dirname, "db", "contacts.json");
// console.log(contactsPath);

// const argv = process.argv;

// (async () => {
//   const data = await fs.readFile(contactsPath);
//   const content = JSON.parse(data);
//   if (argv[2] === "--list") {
//     console.table(content);
//   } else {
//     const [_, __, id, name, email, phone] = argv;
//     content.push({ id, name, email, phone });
//     await fs.writeFile(contactsPath, JSON.stringify(content, null, 2));
//   }
// })();

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
  console.log("addContact");

  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
    const contacts = JSON.parse(data);
    const id = nanoid();
    contacts.push({ id: Number(id), name, email, phone });
    // console.log(contacts);

    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (err) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log('The "data to write" was write to file!');
    });
  });
}

function removeContact(contactId) {
  // ...твой код
  console.log(contactId);
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
        console.log('The "data to write" was write to file!');
      }
    );
  });
}

module.exports = { listContacts, getContactById, addContact, removeContact };
