const {createExpenses, getExpenseById, filterExpenses, updateExpenses, deleteExpenses} = require('../services/expenses');

const createExpensesHandler = async(event) => createExpenses(event);
const getExpenseByIdHandler = async(event) => getExpenseById(event);
const filterExpensesHandler = async(event) => filterExpenses(event);
const updateExpenseshandler = async(event) => updateExpenses(event);
const deleteExpensesHandler = async(event) => deleteExpenses(event);

module.exports = {
createExpensesHandler,
getExpenseByIdHandler,
filterExpensesHandler,
updateExpenseshandler,
deleteExpensesHandler
}
