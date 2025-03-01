const fs = require("fs");
const { expensesDataPath } = require("../constants");

const addExpense = async (name, options) => {
  const { amount, description } = options;

  if (!fs.existsSync(expensesDataPath)) {
    fs.writeFileSync(expensesDataPath, JSON.stringify([], null, 2));
  }

  fs.readFile(expensesDataPath, "ascii", (err, data) => {
    if (err) throw err;
    const expenses = data ? JSON.parse(data.toString(), null, 2) : [];
    const now = new Date();

    const newExpense = {
      id: expenses.length + 1,
      name,
      amount,
      description,
      createdAt: now,
      updatedAt: now,
    };

    expenses.push(newExpense);

    fs.writeFile(expensesDataPath, JSON.stringify(expenses, null, 2), (err) => {
      if (err) throw err;
      console.log(`Expense added successfully, id ${newExpense.id}.`);
    });
  });
};

module.exports = {
  addExpense,
};
