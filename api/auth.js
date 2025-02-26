import {API} from './';

export const registerUser = () => {
    return API.post('register')
}