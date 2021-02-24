      const {email,password}= req.body;    

        //const idUser=  pool.query(`SELECT 'id'  from loggin WHERE 'email'  = '${req.body.email}' `);
        const idUser= await pool.query(`SELECT id  from loggin WHERE email  = '${req.body.email}' `);
        //console.log(idUser.rows)SELECT id  from loggin WHERE email  = 'edictaLuzardo' 
        console.log(idUser.rows); 
        res.send('ok')
        if (idUser.rows) {
            const validPass= await pool.query(`select password  from loggin WHERE email  = '${req.body.email}' `)
            //SELECT password  from loggin WHERE email  = 'angelicas@hotmail.com' 
           const {password}= req.body
            console.log(password)
        }
      

    } catch (e) {
        console.log(e); 
        res.status(500).send('Algo salio mal') 
    }
     