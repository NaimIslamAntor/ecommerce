import axios from 'axios'

const api = '/products'

const getProducts = async () => {

    const products = await axios.get(`${api}/all`)
    return products

}


const getAProduct = async (id) => {
    const product = await axios.get(`${api}/all/${id}`)
    console.log(product.data)
    return product.data
}



export {
    getProducts,
    getAProduct
}