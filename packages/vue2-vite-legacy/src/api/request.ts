import axios from "axios";

const instance = axios.create({
    baseURL: '/api'
})

const requestInterceptors = instance.interceptors.request.use(config => {
    return config
})

const responseInterceptors = instance.interceptors.response.use(response => {
    return response
})

export default instance