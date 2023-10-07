const express=require('express');
const app=express();
const express_async_error=require('express-async-errors')
const dotEnv=require('dotenv');
const colors=require('colors');
const cors = require('cors');
const morgan  = require ('morgan');
const authRoutes=require('./Routes/authRoutes')
const errMiddleware=require('./Middleware/errMiddleware')



// config the dotenv 
dotEnv.config();

// middleware 

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// ROUTES 
const routes = require ('./Routes/routes')
app.use('/api/v1/test' , routes)
app.use('/api/v1/auth' , authRoutes)

// validation middleware 
app.use(errMiddleware);

// Database 
const connectDB=require('./Database/db');
connectDB();



const PORT=process.env.PORT || 3000;
app.listen(PORT , ()=>{
console.log(`server is listenig in ${process.env.DEV_MODE} at ${PORT}`.bgBlue.white)
});