const {Expenses, ExpenseHead} = require('../model');
const { connectToDb } = require('../lib/database');

const createExpenses = async(event)=>{
    try {
        await connectToDb();
        const data = JSON.parse(event.body);
        const {expenseHeadId, expenseNaration, amount} = data;
        const checkIfExpenseHeadExists = await ExpenseHead.findById(expenseHeadId);
        if(!checkIfExpenseHeadExists){
            throw new Error('Expense head not found !!');
        }
        const expenses = await Expenses.create({
          expenseHead: expenseHeadId,
          amount,
          description: expenseNaration  
        })
        return {
            statusCode: 200,
            body: JSON.stringify(expenses)
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                code: '002',
                message: `${error}`
            })
        }
    }
}

const getExpenseById = async(event) =>{
    try {
        await connectToDb();
        const {id} = event.pathParameters;
        const expenses = await Expenses.findById(id).populate('expenseHead');
        return {
            statusCode: 200,
            body: JSON.stringify(expenses)
        }   
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                code: '002',
                message: `${error}`
            })
        }
    }
 
}

const filterExpenses = async(event)=>{
try {
    await connectToDb();
    const expenses = await Expenses.find({});
    return {
        statusCode: 200,
        body: JSON.stringify(expenses)
    }
} catch (error) {
    return {
        statusCode: 400,
        body: JSON.stringify({
            code: '002',
            message: `${error}`
        })
    }
}
}

const updateExpenses = async(event)=>{
    try {
        const {id} = event.pathParameters;
        const data = JSON.parse(event.body);
        const {expenseHeadId, expenseNaration, amount} = data;  
        const expenses = await Expenses.findByIdAndUpdate(id, {
          description: expenseNaration,
          amount,
          expenseHead: expenseHeadId 
        }, {new: true}) 
        return {
            statusCode: 200,
            body: JSON.stringify(expenses)
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                code: '002',
                message: `${error}`
            })
        }
    }


}

module.exports = {
    createExpenses,
    getExpenseById,
    filterExpenses,
    updateExpenses
}