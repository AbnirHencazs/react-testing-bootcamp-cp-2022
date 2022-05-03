import React from "react";
import NASAservice from "../helpers/NASAService";
import { DateTime } from "luxon";

const usePOD = () => {
    const apiKey = process.env.REACT_APP_API_KEY
    const [ pod, setPOD ] = React.useState({})
    const [ loading, setLoading ] = React.useState()
    const [ error, setError ] = React.useState({ e: false })
    const [ date, setDate ] = React.useState(DateTime.now())

    const changeDate = (e) => {
        setDate(DateTime.fromFormat(e.target.value, 'yyyy-MM-dd'))
    }

    React.useEffect(() => {
        setLoading(true)
        setError({ e: false })
        NASAservice.get(`/planetary/apod?api_key=${apiKey}&date=${date.toFormat('yyyy-MM-dd')}`,)
        .then((response) => {
            setPOD(response)
        })
        .catch((e) => {
            setError({ e: true, ...e.response  })
        })
        .finally(() => setLoading(false))
    }, [date])
   
    return { pod, loading, error, changeDate, date }
}

export default usePOD