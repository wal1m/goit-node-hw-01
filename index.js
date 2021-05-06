// import { Command } from "commander/esm.mjs";
// const program = new Command();
const { Command } = require("commander");
const program = new Command();
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");
// import {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// } from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      console.log("отработал list");
      listContacts();
      break;

    case "get":
      // ... id
      console.log("отработал get");
      getContactById(id);
      break;

    case "add":
      // ... name email phone
      console.log("отработал add");
      addContact(name, email, phone);
      break;

    case "remove":
      // ... id
      console.log("отработал remove");
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// const options = program.opts();
// if (options.debug) console.log(options);
// console.log("pizza details:");
// if (options.small) console.log("- small pizza size");
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);
