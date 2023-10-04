const mongoose=require('mongoose');
const colors=require('colors');

const connectDB= async () => {
try {
    const connection=await mongoose.connect(process.env.MONGO_URL)
    console.log(`CONNECTED TO DATABASE ${mongoose.connection.host}`.bgMagenta.white)
} catch (error) {
    console.log(`MONGO DB Error ${error}`.bgRed.white )
}
};
module.exports=connectDB;