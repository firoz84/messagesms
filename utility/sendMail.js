

const sendmail= require('nodemailer');
const sendemail= require('../controllers/dataController')



const sendMail=(to,sub)=>{
    const transport=sendmail.createTransport({
        host:process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }

       
    });
    transport.sendMail({
        from:process.env.EMAIL_HOST,
        to     : to,
        subject: sub,
        text   :'Hi welcome to bangladesh',
        html   :`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>

            .main-wrapper{
                background:#e9e9e9;
                height:100vh;
                width:100%;
            }
                body{
                    background:#e9e9e9;
                    margin:0;
                    padding:0;
                    
                    
                }
                .body{
                    width:500px;
                    margin:100px auto;
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    
                }
                .row-area{
                    padding:10px 20px;
                }
                .logo-area{
                    background:#fff;
                    text-align: center;
                    padding:20px 0;
                }
                .logo-area img{
                    width:200px;
                    height:100px;
                    margin:0 auto;
        
        
                }
              
                .footer-area a{
                    text-decoration:none;
                    text-align:center;
                    background:#222;
                    display:block;
                    color:#fff;
                    padding:10px; 

                }
            </style>
        </head>
        <body>
        
           <div class="main-wrapper">
           <div class="body">
           <div class="container">
               <div class="logo-area">
                   <img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
               </div>
              <div class="row-area">
               <div class="name-area">
                   <h2>Rasel rana </h2>
               </div>
               <div class="footer-area">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero aperiam culpa nostrum quam, voluptates illo sit, quae mollitia, beatae accusantium? Accusantium suscipit voluptates ut ipsa nemo, reiciendis non quos, doloremque eos architecto labore tenetur adipisci cum nam illo voluptas nobis animi laudantium perferendis ratione molestias. Quaerat, accusamus. Temporibus vel odit aliquam nesciunt recusandae. Nisi earum fugit facilis! Tempore, laudantium sint nesciunt, voluptatibus laborum neque ab voluptate fugit enim quaerat aspernatur autem soluta suscipit. Porro itaque dolorum molestias quam nulla cumque ipsam ex, minus ratione similique animi voluptatum beatae iure, maiores tempora. Totam quod quae cum impedit, ipsam eos natus.</p>
   
                   <a href="#">veryfy your account </a>
               </div>
              </div>
           </div>
       </div>
           </div>
            
        </body>
        </html>
        `

    })
}
module.exports=sendMail;