const {Router}= require('express'); 
const router= Router();    

const wjt= require('jsonwebtoken'); 

const appCtrl= require('../controller/controller'); 



//router.get('/',appCtrl.getUser); 

router.post('/login',appCtrl.loginUser); 

router.post('/register',appCtrl.registerUser);  

router.get('/taskForm',appCtrl.taskForm);  

router.get('/taskFormPrivate',verifyToken, appCtrl.FormPrivate); 

router.get('/profile',verifyToken, (req, res)=>{
   
    //console.log(`${req.userId}`); 
    res.send(`${req.userId}`)
})

module.exports= router;   
 

function verifyToken(req, res, next) {

    // console.log(req.headers.authorization)
    if (!req.headers.authorization) {
       return  res.status(401).send('Peticion no autorizada'); 
    }
    //console.log(req.headers.authorization)
   
    const token= req.headers.authorization.split(' ')[1]; 
    if (token===null) {
        return  res.status(401).send('Peticion no autorizada');  
    }

    const payload= wjt.verify(token,'secretkey'); 
    //console.log(payload)

    req.userId= payload._id; 
    next(); 
}
