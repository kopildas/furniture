const createProduct = async (req,res) => { res.send('create products')}
const getAllProduct = async (req,res) => { res.send('get all products')}
const updateProduct = async (req,res) => { res.send('update products')}
const deleteProduct = async (req,res) => { res.send('delete products')}
const showStatsProduct = async (req,res) => { res.send('show stats')}

export {createProduct, getAllProduct,updateProduct,deleteProduct,showStatsProduct}