const mongoose = require('mongoose');

const {Schema, model, Types} = mongoose;

const expenseSchema = new Schema({
expenseHead: {type:Types.ObjectId, ref: 'ExpenseHead'},
amount: {type: Number},
description:{type: String}
}, {timestamps: true})

exports.Expenses = model('Expenses', expenseSchema)