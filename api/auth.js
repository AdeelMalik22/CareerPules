import {API} from './';

export const registerUser = (token,payload) => {
    return API.post('register')
}