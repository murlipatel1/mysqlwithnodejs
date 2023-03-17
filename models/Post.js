const db = require('../config/db')
class Post {
  constructor(id,title, body) {
    this.id =id;
    this.title = title;
    this.body = body;
  }

  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDay();

    let createdate = `${yyyy}-${mm}-${dd}`;

    let sql = `insert into new_table(id, title,  body, created_at) values( '${this.id}','${this.title}','${this.body}', '${createdate}')`;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }

  static findAll() {
    let sql="select * from timetable;"
    return db.execute(sql);
  }

  static findById(id){
    let sql =`select * from timetable where id= ${id}`
    return db.execute(sql)
  }
}

module.exports = Post;
