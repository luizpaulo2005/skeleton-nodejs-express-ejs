const db = require("../db")

class Autor {
  static async inserir(){
    const connect = await db.connect();
    return await connect.query("insert into autores");
  }
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("select * from autores");
  }
  static async atualizar(){
    const connect = await db.connect();
    return await connect.query("update autores");
  }
  static async deletar(){
    const connect = await db.connect();
    return await connect.query("delete from autores");
  }
  }

  module.exports = Autor;