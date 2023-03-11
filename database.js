const mysql = require('mysql2')

const pool= mysql.createPool({
    host:"localhost",
    user:"root",
    password:"123456789",
})

let sql = 'select * from g4lab.client_master'

pool.execute(sql,(err,res)=>{
    if(err) throw err;

    // console.log(res);

    res.forEach(element => {
       console.log(element.NAME); 
    });
})
// async function get(){
//     const a1 = await pool.query('select * from g4lab.client_master')
//     return a1;
// }

module.exports =pool.promise()