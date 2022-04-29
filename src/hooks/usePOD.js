import React from "react";
import useAxios from "./useAxios";

const usePOD = (filters) => {
    const NASAservice = useAxios()
    const apiKey = process.env.REACT_APP_API_KEY
    const [ pod, setPOD ] = React.useState({})
    const [ loading, setLoading ] = React.useState()
    const [ error, setError ] = React.useState({ e: false })

    React.useEffect(() => {
        setLoading(true)
        const queryString = Object.keys(filters).map(key => key + '=' + filters[key]).join('&');
        NASAservice.get(`/planetary/apod?api_key=${apiKey}&${queryString}`,)
        .then((response) => {
            setPOD(response)
        })
        .catch((e) => {
            setError({ e: true, ...e.response  })
        })
        .finally(() => setLoading(false))
    }, [filters.date])

    return { pod, loading, error }
}

export default usePOD