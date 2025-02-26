import { makeRequest } from "./requestBuilder"

interface RequestConfig {
    body?: any
    method: string
    url: string
    token?: string
}
export const API = {
  get: ({url, token, body} : RequestConfig) =>
    makeRequest({
      method: "get",
      url,
      token,
      body
    }),

  post: ({url, body, token}: RequestConfig) =>
    makeRequest({
      method: "post",
      body,
      url,
      token
    }),

  patch: ({url, body, token}:RequestConfig) =>
    makeRequest({
      method: "patch",
      body,
      url,
      token
    }),

  put: ({url, body, token}:RequestConfig) =>
    makeRequest({
      method: "put",
      body,
      url,
      token
    }),

  delete: ({url, body, token}:RequestConfig) =>
    makeRequest({
      method: "delete",
      url,
      body,
      token
    })
}
