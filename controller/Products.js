// import {Op}  from 'sequelize/sequelize'
import Products from '../models/ProductModel.js'

export const getProducts = async (req, res)=>{
    res.render('products/index',{
        
        products: await Products.findAll({
            attributes:['id','nama_barang','harga_barang','keterangan']
        })
    })
   
}

export const createProduct = (req, res) =>{
    res.render('products/form_tambah')
}

export const insertProduct = async(req, res) =>{
   const {id,nama_barang,harga_barang,keterangan} = req.body;
    try {
        let insert = await Products.create({
            id:id,
            nama_barang:nama_barang,
            harga_barang:harga_barang,
            keterangan:keterangan,
        })
        if (insert) {
            // res.send('berhasil input ke database')
            res.redirect('/products')
        }
    } catch (error) {
        res.send(error)
    }
}


export const getProductsByID = async (req,res)=>{
    try {
        const products = await Products.findOne({
            where: {id:req.params.id}
        })
        res.render('products/form-edit', {products:products})
        // console.log(products)
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}

export const updateProducts = async (req,res)=>{
    try {
        const products = await Products.findOne({
            id:req.params.id
        })
        const {nama_barang,harga_barang,keterangan} = req.body;
        if(products){
            await Products.update({
                nama_barang, harga_barang, keterangan
            },{
                where: {id:req.params.id}
            })
        }
        res.redirect('/products')
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}

export const deleteProducts = async (req, res) => {
    try {
        const product = await Products.findOne({
            id:req.params.id
        })
        if(product){
            await Products.destroy({
                where: {
                    id:product.id
                }
            })
        }
        res.redirect('/products')
        // res.status(200).json({msg:" Product Berhasil Hapus"});
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}
