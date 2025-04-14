import axios from 'axios';
import { config } from './config';

export async function loginUser(email, password) {
    try {
      // create url
      const url = `${config.serverUrl}/user/login`
  
      // create the body
      const body = {
        email,
        password,
      }
  
      // make the API call
      const response = await axios.post(url, body)
  
      // return response body
      return response.data
    } catch (ex) {
      console.error('exception: ', ex)
    }
  }

