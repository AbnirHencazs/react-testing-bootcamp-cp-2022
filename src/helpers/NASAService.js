import axios from "axios"

const NASAservice = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

NASAservice.interceptors.response.use((response) => {
    return response.data
})

export default NASAservice