import axios from 'axios'

export async function getUsers() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error
    }
}

export async function getProducts() {
    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response.data);
        return response.data
    } catch (error) {
        throw error
    }
}