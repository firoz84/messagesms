const dotenv= require('dotenv').config();
const oneSID=process.env.SID;
const twoAUTHTOKEN=process.env.AUTH_TOKEN;
const twilio= require('twilio')(oneSID, twoAUTHTOKEN);



const twilio_cell=process.env.TWILIO_CELL;


const sendSMS=(to,sms)=>{

   twilio.messages.create({
    from:twilio_cell,
    to:to,
    body:sms
   }).then(res=>{
    console.log('send sms successfully');
   }).catch(error=>{
    console.log(error.messages);
   })
}

module.exports=sendSMS;