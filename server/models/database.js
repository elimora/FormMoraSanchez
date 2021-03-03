const { Pool } = require('pg')

const pool = new Pool({
    host:'localhost',
    user :'postgres', 
    password:'JASF0911', 
    database:'formularios', 
    port:'5433'

})

module.exports = {
  query: (text, params) => pool.query(text, params),
}