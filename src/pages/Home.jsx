import React from 'react'
import DatePicker from '../components/DatePicker'
import POD from '../components/POD'
import usePOD from '../hooks/usePOD'
import { DateTime } from 'luxon'
import ReactLoading from 'react-loading'
import './Home.module.css'

const Home = () => {
  const [ date, setDate ] = React.useState(DateTime.now())
  const { pod, loading } = usePOD({ date: date.toFormat('yyyy-MM-dd') })

  const changeDate = (e) => {
    setDate(DateTime.fromFormat(e.target.value, 'yyyy-MM-dd'))
  }

  return (
    <section>
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