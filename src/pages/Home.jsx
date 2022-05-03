import React from 'react'
import DatePicker from '../components/DatePicker'
import POD from '../components/POD'
import usePOD from '../hooks/usePOD'
import ReactLoading from 'react-loading'
import './Home.css'
import Alert from '../components/Alert'

const Home = () => {
  const [ showAlert, setShowAlert ] = React.useState(false)
  const { pod, loading, error, changeDate, date } = usePOD()
  
  React.useEffect(() => {
    if(error.e){
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 1500)
    }
  }, [error.e])
  return (
    <section>
        <Alert show={ showAlert } type='error' content={error?.data?.msg}/>
        <DatePicker
            date={date.toFormat('yyyy-MM-dd')}
            handleChange={changeDate}/>
        {
            loading ?
            <div className={'loading-container'}>
                <ReactLoading data-testid="loading" type="spin" color="#9BDAF1" height={300} width={200} />
            </div>
            :
            <POD item={pod}/>
        }
    </section>
  )
}

export default Home