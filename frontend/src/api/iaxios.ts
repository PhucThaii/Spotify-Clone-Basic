import axios from "axios";

const baseURL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/api' : 'https://my-domain.com/api'

const iaxios = axios.create({
    baseURL: baseURL,
});

export default iaxios

// đặt token cho xios instance để sử dụng nó trong yêu cầu cần xác thực
export function setTokenToAxios(token: string) {
    iaxios.defaults.headers.common['Authorization'] = `Token ${token}`
}