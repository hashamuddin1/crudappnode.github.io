const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            //FOR UNWANTED WARNING SAY BACHNE K LIYE
            useNewUrlParser: true,
            useUnifiedTopology: true

        })
        console.log(`MONGO DB CONNECTED: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB