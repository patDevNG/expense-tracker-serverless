/**
 *  - CRUD for Category expense head
 * - CRUD Expeses
 */

const {ExpenseHead} = require('../model');
const {connectToDb} = require('../lib/database');
const mongoose = require('mongoose')
const {Types} = mongoose;

const createExpenseHead = async(event) =>{
    try {
        await connectToDb();
        const data = JSON.parse(event.body);
        const {title, description}= data;
        const checkIfExpenseHeadExists = await ExpenseHead.findOne({title});
        if(checkIfExpenseHeadExists !== null){
            throw Error('title already exists')
        }
        const newexpenseHead= await ExpenseHead.create({
            title,
            description
        })
    
        return{
            statusCode: 200,
            body: JSON.stringify(newexpenseHead)
        } 
    } catch (error) {
        console.log(error, "=====>")
        return {
            statusCode: 400,
            body: JSON.stringify({
                code: '001',
                message: `${error}`
            })
        }
    }

}

const getExpenseHeadById = async(event)=>{
    try {
        await connectToDb()
        const {id} = event.pathParameters;
        const expenseHead = await ExpenseHead.findById(id);
        return {
            statusCode: 200,
            body: JSON.stringify(expenseHead)
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                code: '001',
                message: `${error}`
            })
        }
    }
}

const getExpenseHeads = async(event)=>{
    try {
        await connectToDb()
        const expenseHead = await ExpenseHead.find({});
        return {
            statusCode: 200,
            body:JSON.stringify(expenseHead)
        }

    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                code: '001',
                message: `${error}`
            })
        }
    }
}

const updateExpenseHeads = async(event)=>{
    try {
        await connectToDb();
        const {id} = event.pathParameters
        const data = JSON.parse(event.body);
        const{title, description} = data
        const expenseHead = await ExpenseHead.findOneAndUpdate(id, {
            title,
            description
        }, {new:true})

        return {
            statusCode:200,
            body: JSON.stringify(expenseHead)
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                code: '001',
                message: `${error}`
            })
        }
    }
}

const deleteExpenseHead = async(event)=>{
    try {
        await connectToDb();
        const {id} = event.pathParameters;
        await ExpenseHead.findByIdAndDelete(Types.ObjectId(id));
        return {
            statusCode: 202,
            body: "Expense deleted"
        }
    } catch (error) {
        console.log(error)
        return {
            statusCode: 404,
            code:'001',
            message: `${error}`
        }
    }
}

module.exports = {
    createExpenseHead,
    getExpenseHeadById,
    getExpenseHeads,
    updateExpenseHeads,
    deleteExpenseHead
}