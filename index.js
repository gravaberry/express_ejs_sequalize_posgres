import express from 'express';
import cookie from 'cookie-parser'
const app = express()
const port = 3000
import cors from 'cors';
import dotenv from 'dotenv';
import SequelizeStore from "connect-session-sequelize";
import ProductRoute from  './routes/ProductRoute.js'

import db from './config/db.js';


///untuk migrasi table ke database
// (async () => {
//    await db.sync()
// })()
app.set('view engine', 'ejs')
app.set('views', './view')
app.use(express.urlencoded({ extended: true}))
// app.use("/public", express.static(__dirname + "/public"));


app.use(express.json());
app.use(ProductRoute);
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})
// store.sync();

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))