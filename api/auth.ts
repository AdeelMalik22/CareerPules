import axios from 'axios';
import { API } from '.';


interface Props {
    payload: any;
}

export const registerUser = async (payload : Props) => {
    const response =  await axios.post("http://13.229.224.211/api/register/",payload)
    return response
};
export const registerUserOtp = async (payload : Props) => {
    const response =  await axios.post("http://13.229.224.211/api/verify-email/",payload)
    return response
};
export const loginUser = async (payload : Props) => {
    const response =  await axios.post("http://13.229.224.211/api/login/",payload)
    console.log("response",response)
    return response
};

