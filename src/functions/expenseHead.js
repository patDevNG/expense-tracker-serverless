const {createExpenseHead, getExpenseHeadById, getExpenseHeads, updateExpenseHeads, deleteExpenseHead} = require('../services/expenseHead');

const createExpenseHeadHandler = async(event)=>createExpenseHead(event);
const getExpenseHeadByIdHandler = async(event)=> getExpenseHeadById(event);
const getExpenseHeadHandler = async(event) => getExpenseHeads(event);
const updateExpenseHeadHandler = async(event) => updateExpenseHeads(event);
const deleteExpenseHandler = async(event)=> deleteExpenseHead(event);
module.exports = {
    createExpenseHeadHandler,
    getExpenseHeadByIdHandler,
    getExpenseHeadHandler,
    updateExpenseHeadHandler,
    deleteExpenseHandler
}