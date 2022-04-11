import axios from "axios";
import { URL } from "../config";

const instance = axios.create({
    baseURL: URL
})

const get = async (url) => {
    return await instance.get(url, {
        withCredentials: true
    })
}

const post = async (url, data, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await instance.post(url, data, config)
}

const postLogin = async (url, data) => {
    return await instance.post(url, data)
}

export default instance
export { get, post, postLogin }