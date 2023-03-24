import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from "../components/Card"

const Home = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async()=>{
    const res = await fetch("https://api.punkapi.com/v2/beers")
    const data = await res.json()
    setBeers(data)
  }

  useEffect(()=>{
    getBeers()
  }, [])
  console.log(beers)
  return (
    <div className='grid'>
        {beers.length && beers.map(beer => (<Link key={beer.id} to={'/beer/' + beer.id}><Card data={beer} /></Link>))
        }
    </div>
  )
}

export default Home