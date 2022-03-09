const db = require("../db")

class Autor {
  static async inserir(){
    const connect = await db.connect();
    const sql = "insert into autores(nome, sobrenome, datanasc) values($1,$2,$3)"; 
    return await connect.query("");
  }
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("select * from autores");
  }
  static async atualizar(){
    const connect = await db.connect();
    return await connect.query("update autores ");
  }
  static async deletar(){
    const connect = await db.connect();
    return await connect.query("delete from autores");
  }
  }

  module.exports = Autor;