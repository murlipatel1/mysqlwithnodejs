const db = require('../config/db')
class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDay();

    let createdate = `${yyyy}-${mm}-${dd}`;

    let sql = `
        insert into new_table(  id,  title,  body, created_at) values( '${this.title}','${this.body}', '${createdate}')`;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }

  static findAll() {}
}

module.exports = Post;
