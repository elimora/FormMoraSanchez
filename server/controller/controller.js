const pool = require("../models/database")
const wjt= require('jsonwebtoken'); 
const bcrypt= require('bcrypt'); 

const appCtrl= {}

appCtrl.registerUser= async (req,res)=>{
   
     const{id, name, email, password, password2}=req.body; 
     const token=  wjt.sign({_id:id},'secretkey');

     console.log({
         name,
         email,
         password,
         password2
     }); 
     const errors=[]; 

    if(!name||!email||!password||!password2){
        errors.push({message:'Todos los campos deben estar llenos'});
    }

    
    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)){
     console.log('correo valido')
    } else {
     errors.push({message:'Correo no valido'});
    }

    if(password.length<6){
        errors.push({message:'El password debe tener al menos 6 caracteres'});
    }

    if (password!==password2) {
         errors.push({message:'Los campos de password no coinciden'});
    }

    if(errors.length>0){
        res.send({errors})
    }else {
        //las validaciones fueron superadas 
        const hashPassword= await bcrypt.hash(password,10); 
        console.log('password encriptado: ', hashPassword);  

        const response = pool.query( `SELECT "id" FROM loggin WHERE "email"= '${email}'`, (err,results)=>{
            if(err){                     
                throw err
            }
            //console.log(results.rows[0].id); 
            if(results.rows.length>0){
                errors.push({message:'error: email ya registrado'}); 
                res.send({errors})
            }else{ 

            const response= pool.query(`insert into loggin values  (${id},'${email}','${hashPassword}')`);
           
            res.status(200).json({token:token}); 
            
            console.log('token: ', token)

            }

        })
        
    }

}; 

appCtrl.loginUser= async (req, res)=>{
    //console.log(req.body); 
   const {id, email, password}= req.body; 
   const hashPassword= await bcrypt.hash(password,10);
   //console.log('El password ecriptado fue en el login',hashPassword)
//+++++++++++++

const token=  wjt.sign({_id:id},'secretkey');

const errors=[]; 

if(!email||!password){
   errors.push({message:'Todos los campos deben estar llenos'});
}

const response =  pool.query( `SELECT "email"  FROM loggin WHERE "email"= '${email}'`, (err,results)=>{
    if(err){                    
        throw err
    }
    const consulta=results.rows[0].email;  
    console.log(consulta); 
     
    if(consulta<0){
      
        errors.push({message:'El correo no existe'});
    
    }else{ 
       
        if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)){
            console.log('correo valido')
            } else {
            errors.push({message:'Correo no valido'});
            }
            
            if(password.length<6){
               errors.push({message:'El password debe tener al menos 6 caracteres'});
            }
            
            if(errors.length>0){
               res.send({errors})
            }else {
            
                const response =  pool.query( `SELECT "password"  FROM loggin WHERE "email"= '${email}'`, (err,results)=>{
                    if(err){                    
                        throw err
                    }
                    const consulta=results.rows[0].password;  
                    console.log(consulta); 
                     
                    if(bcrypt.compareSync(password, consulta)){
                       const user= email
                       console.log('Correo y contaceña correctos'); 
                       res.status(200).send(`Token :  ${token}`)
                    }else{ 
                      
                        errors.push({message:'Clave invalida'});
                  
                    }
                })
                
            }
                   

     
    }
})



//+++++++++++++

   

}; 

appCtrl.taskForm= async (req, res)=>{
    res.json([
        {
            _id:1, 
            name: 'formulario 1', 
            description:'formulario de reconocimiento mecanico'
        }, 
        {
            _id:2, 
            name: 'formulario 2 ', 
            description:'formulario de analisis  de fallas'
        }, 
        {
            _id:3, 
            name: 'formulario 3', 
            description:'formulario de reporte de fallas'
        }, 
    ])
}

appCtrl.FormPrivate= async(req,res)=>{
    res.json([
        {
            _id:1, 
            name: 'formulario 1', 
            description:'formulario de reconocimiento mecanico'
        }, 
        {
            _id:2, 
            name: 'formulario 2 ', 
            description:'formulario de analisis  de fallas'
        }, 
        {
            _id:3, 
            name: 'formulario 3', 
            description:'formulario de reporte de fallas'
        }, 
    ])
}


// appCtrl.getUser= async (req, res)=>{

//     const response = await pool.query('SELECT * FROM usuarios'); 
//     res.status(200).json(response.rows); 
//     console.log(response.rows); 
// };

// appCtrl.getEmailById= async (req,res)=>{
//     //res.send('email id: '+ req.params.id)
//     const id=req.params.id
//     const response = await pool.query(`SELECT * FROM persistencia WHERE "id_msg"=${id}`); 
//     res.json(response.rows) 
// }

// appCtrl.updateMail= async (req, res)=>{
//    const id=req.params.id; 
//    const {id_msg,texto_msg,src_msg,tipo_msg,fechaEnvio_msg,horaEnvio_msg,fechaRecepcion_msg,horaRecepcion_msg,remitente_msg,destinatario_msg,status_msg,ruta_msg,archivoAdjunto_msg}= req.body; 
 
//    const response=await pool.query(`UPDATE persistencia set "id_msg" = '${id_msg}', "texto_msg"= '${texto_msg}', "fechaEnvio_msg"='${fechaEnvio_msg}', "horaEnvio_msg"='${horaEnvio_msg}',"fechaRecepcion_msg" = '${fechaRecepcion_msg}', "horaRecepcion_msg"= '${horaRecepcion_msg}', "remitente_msg"='${remitente_msg}', "destinatario_msg"='${destinatario_msg}',  "status_msg"='${status_msg}', "ruta_msg"='${ruta_msg}', "archivoAdjunto_msg"='${archivoAdjunto_msg}' where "id_msg"=${id}`)
   
//    res.json('Ususrio actualizado de forma satisfactoria'); 

// };

// appCtrl.deleteMail= async (req, res)=>{

//     const id=req.params.id
//     const response = await pool.query(`DELETE FROM persistencia WHERE "id_msg"=${id}`); 
//     //console.log(response); 
//     res.json(`El email numero ${id} fue eliminado satisfactoriamente`)
    
// };



module.exports =appCtrl; 
