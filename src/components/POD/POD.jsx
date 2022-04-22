import React from 'react'

const POD = ({ item }) => {
  return (
    <article>
        <h3>{item.title}</h3>
        <span>{item.date}</span>
        <p>{item.explanation}</p>
        <img src={item.url}/>
    </article>
  )
}

export default POD