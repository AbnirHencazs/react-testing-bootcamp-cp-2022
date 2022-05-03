import React from 'react'
import { DateTime } from 'luxon'
import './POD.css'

const POD = ({ item }) => {
  return (
    <article >
        <h2>{item?.title}</h2>
        <div className='pod-container'>
          <div className='pod-details'>
            <small>{item?.date}</small>
            <img src={item?.url}/>
          </div>
          <aside className='pod-explanation'>
            <p >{item?.explanation}</p>
          </aside>
        </div>
    </article>
  )
}

export default POD