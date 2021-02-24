const {Router}= require('express'); 
const router= Router();      

const appCtrl= require('../controller/controller'); 

router.get('/',appCtrl.getUser); 

router.post('/login',appCtrl.loginUser); 

router.post('/register',appCtrl.registerUser);  

module.exports= router; 