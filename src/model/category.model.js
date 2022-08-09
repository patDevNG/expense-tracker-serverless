const mongoose = require('mongoose');
const {Schema,model, models}= mongoose
mongoose.Promise = global.Promise;

const expenseCategorySchema = new Schema({
    title: {type: String},
    description: {type: String}
})

exports.ExpenseHead =

models.ExpenseHead ||model('ExpenseHead', expenseCategorySchema)