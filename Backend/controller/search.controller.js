const Product = require("../model/search.model"); // Ensure the path to your model file is correct

async function searchProducts(searchTerm) {
    console.log('Search term received:', searchTerm);  // Debugging output

    if (typeof searchTerm !== 'string' || searchTerm.trim() === '') {
        console.error('Search term must be a non-empty string.');
        return [];  // Return an empty array or you could also return a specific message or error
    }

    try {
        const products = await Product.find({
            title: { $regex: new RegExp(searchTerm, 'i') }
        });
        return products;
    } catch (error) {
        console.error('Error searching for products:', error);
        throw error;
    }
}


module.exports={
    searchProducts
}