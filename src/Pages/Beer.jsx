import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Beer = () => {
    const [beer, setBeer] = useState([])

    const navigate = useNavigate()
    const { id } = useParams()
    console.log(id)

    const getBeer = async()=>{

        const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
        const data = await res.json()
        setBeer(data[0])
    }

    useEffect(()=>{
        getBeer()
    }, [])

  
  
  return (
    <div>
        <h2>Cerveza numero {id}</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>

  )
}

export default Beer