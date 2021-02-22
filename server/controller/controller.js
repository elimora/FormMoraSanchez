const {Pool}=require('pg'); 
const wjt= require('jsonwebtoken'); 
const bcrypt= require('bcrypt'); 




const pool= new Pool({
    host:'localhost',
    user :'postgres', 
    password:'elimora', 
    database:'PruebasVarias', 
    port:'5433'

}); 

const appCtrl= {}

appCtrl.registerUser= async (req, res)=>{
    //console.log(req.body); 
   
    try {
        const {id,email,password}= req.body; 

        const token=  wjt.sign({password:password},'secretkey'); 
      
        const hash = await bcrypt.hash(password, 10); 

        await pool.query(`insert into loggin values  (${id},'${email}','${hash}')`); 
        
        console.log(token)

        await res.status(200).json({token:token}); 

    } catch (e) { 
        console.log(e); 
        res.status(500).send('Algo salio mal') 
    }

}; 

appCtrl.loginUser= async (req,res)=>{
    try {
        const {email,password}= req.body;    

        const idUser=  pool.query(`SELECT 'id'  from loggin WHERE 'email'  = '${req.body.email}' `);
        //console.log(idUser.rows)
        
      

    } catch (e) {
        console.log(e); 
        res.status(500).send('Algo salio mal') 
    }
     
}; 

appCtrl.getUser= async (req, res)=>{

    const response = await pool.query('SELECT * FROM usuarios'); 
    res.status(200).json(response.rows); 
    console.log(response.rows); 
};

appCtrl.getEmailById= async (req,res)=>{
    //res.send('email id: '+ req.params.id)
    const id=req.params.id
    const response = await pool.query(`SELECT * FROM persistencia WHERE "id_msg"=${id}`); 
    res.json(response.rows) 
}

appCtrl.updateMail= async (req, res)=>{
   const id=req.params.id; 
   const {id_msg,texto_msg,src_msg,tipo_msg,fechaEnvio_msg,horaEnvio_msg,fechaRecepcion_msg,horaRecepcion_msg,remitente_msg,destinatario_msg,status_msg,ruta_msg,archivoAdjunto_msg}= req.body; 
 
   const response=await pool.query(`UPDATE persistencia set "id_msg" = '${id_msg}', "texto_msg"= '${texto_msg}', "fechaEnvio_msg"='${fechaEnvio_msg}', "horaEnvio_msg"='${horaEnvio_msg}',"fechaRecepcion_msg" = '${fechaRecepcion_msg}', "horaRecepcion_msg"= '${horaRecepcion_msg}', "remitente_msg"='${remitente_msg}', "destinatario_msg"='${destinatario_msg}',  "status_msg"='${status_msg}', "ruta_msg"='${ruta_msg}', "archivoAdjunto_msg"='${archivoAdjunto_msg}' where "id_msg"=${id}`)
   
   res.json('Ususrio actualizado de forma satisfactoria'); 

};

appCtrl.deleteMail= async (req, res)=>{

    const id=req.params.id
    const response = await pool.query(`DELETE FROM persistencia WHERE "id_msg"=${id}`); 
    //console.log(response); 
    res.json(`El email numero ${id} fue eliminado satisfactoriamente`)
    
};



module.exports =appCtrl; 
