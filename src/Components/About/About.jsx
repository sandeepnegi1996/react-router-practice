import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const itemData = await fetch('https://fakestoreapi.com/products')
    const itemsReceived = await itemData.json()
    // console.log(itemsReceived)

    setItems(itemsReceived)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <div>
      <h2>about</h2>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/about/${item.id}`}>{item.title}</Link>
        </h1>
      ))}
    </div>
  )
}

export default About
