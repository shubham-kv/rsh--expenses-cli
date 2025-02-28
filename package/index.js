#!/usr/bin/env node

const { Command } = require("commander");
const { name, description, version } = require("../package.json");

const { addExpense } = require("./add-expense");

const program = new Command();

program.name(name).description(description).version(version);

program
  .command("add <name>")
  .description("Add an expense")
  .option("-d, --description <description>", "Text describing the expense")
  .option("-a, --amount <amount>", "Expense amount")
  .action(addExpense);

program.parse(process.argv);
