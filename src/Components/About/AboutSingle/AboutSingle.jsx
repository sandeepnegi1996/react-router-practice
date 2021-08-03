import React, { useState, useEffect } from 'react'
import './AboutSingle.css'

const AboutSingle = ({ match }) => {
  const [singleAbout, setsingleAbout] = useState([])

  const fetchSingleAbout = async () => {
    const singleFetchObject = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    )
    const singleObject = await singleFetchObject.json()

    setsingleAbout(singleObject)
  }

  useEffect(() => {
    fetchSingleAbout()
  }, [])

  return (
    <div className='single-about'>
      <img src={singleAbout.image} alt='' srcset='' />
    </div>
  )
}

export default AboutSingle
