
const express=require('express');
const path = require('path');
const pageLayout= require('express-ejs-layouts');
const dotenv= require('dotenv');
const ejs=require('ejs');
const userRouter= require('./routes/user');

dotenv.config();

const PORT= process.env.PORT || 4000;


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.set("view engine", "ejs");
app.use(pageLayout);

app.set('layout', 'layouts/app');
app.use(express.static( 'public'));

app.use('/user', userRouter);

app.listen(PORT, ()=>{

    console.log(`server is running on port ${PORT}`);
})