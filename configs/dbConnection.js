const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`Database connexted at ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}


module.exports = { dbConnection, }
