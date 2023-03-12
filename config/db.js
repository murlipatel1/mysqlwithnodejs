const mysql = require('mysql2')
require('dotenv').config()

const pool= mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
})

let sql = 'select * from new_table'

pool.execute(sql,(err,res)=>{
    if(err) throw err;

    // console.log(res);

    res.forEach(element => {
       console.log(element.title); 
    });
})
// async function get(){
//     const a1 = await pool.query('select * from g4lab.client_master')
//     return a1;
// }

module.exports =pool.promise()