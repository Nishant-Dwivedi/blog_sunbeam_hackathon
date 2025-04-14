import { config } from './config';

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
        const url = `${config.serverUrl}/category/`;
        const token = sessionStorage.getItem('token');
        const response = await axios.get(url, {
            headers: {
                token,
            },
        })
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// add category
export async function addCategory(title, description) {
    try {
        const url = `${config.serverUrl}/category/`;
        const body = { title, description }
        const token = sessionStorage.getItem('token');
        const response = await axios.post(url, body, {
            headers: {
                token,
            },
        })
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}