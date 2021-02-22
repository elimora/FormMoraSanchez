const express= require('express'); 
const app=express(); 

//middleware
app.use(express.json());


app.use('/api',require('./router/routes'))
app.listen(3000); 
console.log('servidor en el puerto 3000')