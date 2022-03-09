const db = require("../db")

class Autor {
  static async inserir(data){
    const connect = await db.connect();
    const sql = "insert into autores(nome, sobrenome, datanasc) values($1,$2,$3)";
    const values = [data.nome, data.sobrenome, data.datanasc]
    return await connect.query(sql, values);
  }
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("select * from autores");
  }
  static async atualizar(data){
    const connect = await db.connect();
    const sql = "update autores"
    return await connect.query("update autores ");
  }
  static async deletar(data){
    const connect = await db.connect();
    const sql = "delete from autores where $1"
    const where = [data.condition];
    return await connect.query("delete from autores");
  }
  }

  module.exports = Autor;