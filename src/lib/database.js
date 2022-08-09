const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();
const database = process.env.DB_LINK
exports.connectToDb = async()=>{
    // const options = {
    //     useCreateIndex: true,
    //     useUnifiedTopology: true,
    //     useNewUrlParser: true,
    // };

    try {
        console.log(database, "======>")
       mongoose.connect(database);
    //    mongoose.set('', false);
       console.log('connected to db ...'); 
    } catch (error) {
        console.log(error);
        process.exit()
    }
}