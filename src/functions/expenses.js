const {createExpenses, getExpenseById, filterExpenses, updateExpenses} = require('../services/expenses');

createExpensesHandler = async(event) => createExpenses(event);
getExpenseByIdHandler = async(event) => getExpenseById(event);
filterExpensesHandler = async(event) => filterExpenses(event);
updateExpenseshandler = async(event) => updateExpenses(event);
