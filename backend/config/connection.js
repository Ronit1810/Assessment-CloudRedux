
const mongoose = require('mongoose')

const connection = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to MongoDB ${conn.connection.port}`);
        
    } catch (error) {
        console.log("Error in connection");
        
    }
}

module.exports = {connection}