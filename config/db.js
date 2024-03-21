import { Sequelize } from "sequelize";

const db = new Sequelize('db_crud_products', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
  });

  export default db;