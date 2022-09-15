import axios from "axios"

const request = {}
const baseUrl = "http://10.33.84.124:8200"

request.get = ({ url, params = {} }) => {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + url, {
            params
        }).then((res) => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export default request