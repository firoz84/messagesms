


const sendMail = require("../utility/sendMail");
const sendSMS = require("../utility/sendSMS");

const showHomepage=(req, res)=>{

    res.render('user/index')

}

const dataStorage=(req, res)=>{

    sendMail(req.body.email, 'welcome');

    sendSMS(req.body.cell, 'Hi Firoz your messags send successfully');

    res.json(req.body);
}

module.exports={
    showHomepage,
    dataStorage
}