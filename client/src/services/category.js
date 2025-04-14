import { config } from './config';
import axios from 'axios';
// delete 
export async function deleteCategory(id) {
    try {
        const url = `${config.serverUrl}/category/${id}`;
        const token = sessionStorage.getItem('token');
        const response = await axios.delete(url, {
            headers: {
                token,
            },
        })
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// get category

export async function getCategories() {
    try {
        const url = `${config.serverUrl}/categories/`;
        const token = sessionStorage.getItem('token');
        const response = await axios.get(url, {
            headers: {
                token,
            },
        })
        console.log(response);
        const result = {
            status: response.status,
            data: response.data
        }
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}

// add category
export async function addCategory(title, description) {
    try {
        const url = `${config.serverUrl}/categories/`;
        const body = { title, description }
        const token = sessionStorage.getItem('token');
        const response = await axios.post(url, body, {
            headers: {
                token,
            },
        })
        return response.status;
    } catch (error) {
        console.error('Error:', error);
    }
}