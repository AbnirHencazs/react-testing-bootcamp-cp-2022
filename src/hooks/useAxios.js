import axios from 'axios'

const useAxios = () => {
    const NASAservice = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL
    })

    NASAservice.interceptors.response.use((response) => {
        return response.data
    })

    return NASAservice
}

export default useAxios