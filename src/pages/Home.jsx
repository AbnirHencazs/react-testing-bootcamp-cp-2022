import React from 'react'
import DatePicker from '../components/DatePicker'
import POD from '../components/POD'
import usePOD from '../hooks/usePOD'
import { DateTime } from 'luxon'
import ReactLoading from 'react-loading'
import './Home.module.css'
import Alert from '../components/Alert'

const Home = () => {
  const [ date, setDate ] = React.useState(DateTime.now())
  const [ showAlert, setShowAlert ] = React.useState(false)
  const { pod, loading, error } = usePOD({ date: date.toFormat('yyyy-MM-dd') })

  const changeDate = (e) => {
    setDate(DateTime.fromFormat(e.target.value, 'yyyy-MM-dd'))
  }

  React.useEffect(() => {
    if(error){
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 1500)
    }
  }, [error])

  return (
    <section>
        <Alert show={showAlert} type='error' content={error?.data?.msg}/>
        <DatePicker
            date={date.toFormat('yyyy-MM-dd')}
            handleChange={changeDate}/>
        {
            loading ?
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <ReactLoading data-testid="loading" type="spin" color="#9BDAF1" height={300} width={200} />
            </div>
            :
            <POD item={pod}/>
        }
    </section>
  )
}

export default Home