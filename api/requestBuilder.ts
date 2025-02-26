import { API_URL } from "./config"
import axios from "axios"

interface RequestConfig {
    body?: any;
    method: string;
    url: string;
    token?: string;
  }
  
  const buildRequest = (request: RequestConfig) => {
    const { body, method, url, token } = request;
    const contentType = body instanceof FormData ? "multipart/form-data" : "application/json";
  
    const headers: Record<string, string> = {
      "content-type": contentType,
      ...(token && { Authorization: `Token ${token}` })
    };
  
    const apiUrl = API_URL();
  
    return {
      baseURL: apiUrl,
      data: body,
      headers,
      method,
      url,
      withCredentials: false
    };
  };
  


export const defaultResponse = {
  status: 500,
  data: {
    error: "Server error"
  }
}

export const formatError = responseError => {
  const response = responseError || defaultResponse
  const errors = response.data
  return {
    code: response.status,
    message: errors
  }
}

export const makeRequest = async request => {
  const requestConfig = buildRequest(request)
  return new Promise((resolve, reject) => {
    const axiosRequest = axios(requestConfig)
    axiosRequest.then(resolve).catch(error => {
      reject(error)
    })
  })

  // const axiosRequest = axios(requestConfig)
  //   return {
  //     status: (await axiosRequest).status,
  //     data: (await axiosRequest).data
  //   }
}
