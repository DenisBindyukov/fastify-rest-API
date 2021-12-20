const Product = require("../models/product.model");


const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return products
    } catch (error) {
        res.code(500).send(error);
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        return res.code(200).send(product);
    } catch (e) {
        res.code(500).send(error);
    }

};

const creatProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        console.log(newProduct)

        await newProduct.save();

        res.code(201).send(newProduct);
    } catch (error) {
        res.code(500).send(error);
    }

};

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.code(204).send()
    } catch (error) {
        res.code(500).send(error);
    }

};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if (!product) {
            res.code(404).send('Id not found')
        }

        res.code(200).send(product)
    } catch (error) {
        res.code(500).send(error)
    }

};


module.exports = {
    getProducts,
    getProduct,
    creatProduct,
    deleteProduct,
    updateProduct
};
