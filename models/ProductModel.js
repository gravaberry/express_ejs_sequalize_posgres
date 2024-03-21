import { Sequelize } from "sequelize";

import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Products = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nama_barang: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      harga_barang: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      keterangan: {
        type: Sequelize.STRING,
      },
},{
    tableName: "products",
    underscored: true,
})

export default Products;

// export const get_one = async(req,res)=>{
//   try {
//     let data_dari_sql = await db.query(`
//         SELECT * from products
//         WHERE id = $1`,
//         [id]
//     )
//     return data_dari_sql.rows
// } catch (error) {
//     return error
// }
// }
