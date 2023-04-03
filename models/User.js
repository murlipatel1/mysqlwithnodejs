const db = require('../config/db')

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDay();

    let createdate = `${yyyy}-${mm}-${dd}`;

    let sql = `insert into user(email,  password) values('${this.email}','${this.password}')`;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }

  static findAll() {
    let sql="select * from user;"
    return db.execute(sql);
  }

  static findById(id){
    let sql =`select * from user where id= ${id}`
    return db.execute(sql)
  }
}

module.exports = User;
