

const express= require('express');
const path=require('path');
const multer=require('multer');
const { showHomepage,dataStorage } = require('../controllers/dataController');



const router=express.Router();

const userStorage=multer.diskStorage({

    destination:(req, file, cb)=>{
        if(req.files.photo){
            if(file.mimetype=='image/jpg' || file.mimetype== 'image/jpeg' || file.mimetype=='image/png' || file.mimetype== 'image/webp'|| file.mimetype=='image/gif'){
                cb(null, path.join(__dirname, '../public/images'))
            }else{
                console.log('Invalid images');
            }

            if(req.files.cv){
                if(file.mimetype='application/pdf'){
                    cb(null, path.join(__dirname, '../public/cv'))

                }
            }
            
        }
    },
    filename:(req, file, cb)=>{

            cb(null, Date.now()+'-'+ Math.floor(Math.random()*1000000)+'-'+file.originalname)

    }
});

const userMulter=multer({

    storage:userStorage
}).fields([
    {
        name:"photo",
        maxCount:3
    },
    {
        name:"cv",
        maxCount:1
    }

])


router.get('/', showHomepage)
router.post('/',userMulter, dataStorage)




module.exports=router;