const {Router}= require('express'); 
const router= Router();      

const appCtrl= require('../controller/controller'); 

router.get('/',appCtrl.getUser); 

router.post('/register',appCtrl.registerUser); 

router.post('/login',appCtrl.loginUser); 

module.exports= router; 