const express= require('express'); 
const app=express(); 
const cors= require('cors')


app.use(cors()); 
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api',require('./router/routes'))
app.listen(3000); 
console.log('servidor en el puerto 3000')