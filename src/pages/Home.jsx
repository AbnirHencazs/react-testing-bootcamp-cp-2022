import React from 'react'
import DatePicker from '../components/DatePicker'
import POD from '../components/POD'
import { mockPOD } from '../mocks/APOD/mockPOD'

const Home = () => {
  return (
    <section>
        <DatePicker/>
        <POD item={mockPOD}/>
    </section>
  )
}

export default Home