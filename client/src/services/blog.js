import axios from 'axios';
import { config } from './config';

// Login function
export async function addBlog(title, contents) {
    try {
        // create url
        const url = `${config.serverUrl}/my-blogs`

        // create the body
        const body = { title, contents }

        // make the API call
        const response = await axios.post(url, body)
        console.log(response);
        // const result = {
        //     status: response.status,
        //     data: response.data
        // }
        return response.status;
    } catch (ex) {
        console.error('exception: ', ex)
    }
}

