import express from 'express';

import {
    getProducts,
    createProduct,
    insertProduct,
    getProductsByID,
    updateProducts,
    deleteProducts
} from '../controller/Products.js';
const router = express.Router();


router.get('/products', getProducts);
router.get('/products/create', createProduct);
router.post('/products/insert', insertProduct);
router.get('/products/edit/:id', getProductsByID);
router.post('/products/update/:id', updateProducts);
router.post('/products/delete/:id', deleteProducts);


export default router;