import axios from "axios";

const baseUrl = 'https://azideias-default-rtdb.firebaseio.com/cart.json'

const addProducts = async (cart) => {
    await axios.put(baseUrl, cart)
}

export const getProducts = async () => {
    const res = await axios.get(baseUrl)
    console.log(res.data)
    return res.data
}

export default addProducts