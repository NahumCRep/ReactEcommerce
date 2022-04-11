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

const post = async (url, data) => {
    console.log("data api")
    console.log(data)
    return await instance.post(url, data, {
        withCredentials: true,
        "content-type":"application/json",
    })
}

export default instance
export { get, post }