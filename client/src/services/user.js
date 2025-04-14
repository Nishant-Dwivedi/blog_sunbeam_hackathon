import axios from 'axios';
import { config } from './config';

// Login function
export async function loginUser(email, password) {
    try {
        // create url
        const url = `${config.serverUrl}/authenticate`

        // create the body
        const body = { email, password, }

        // make the API call
        const response = await axios.post(url, body)
        console.log(response);
        const result = {
            status: response.status,
            data: response.data
        }
        return result;
    } catch (ex) {
        console.error('exception: ', ex)
    }
}


//  Register User
export async function registerUser(email, password, full_name, phone_no) {
    try {
        // create url
        const url = `${config.serverUrl}/register`

        // create the body
        const body = { email, password, full_name, phone_no }

        // make the API call
        const response = await axios.post(url, body)
        // return response body
        return response.status;

    } catch (ex) {
        console.error('exception: ', ex)
    }
}