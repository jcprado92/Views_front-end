 import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import "../styles/stylin.css"

const API = process.env.REACT_APP_API_URL

function PicDetail() {
    const [ pic, setPic ] = useState([])
    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API}/pics/${id}`)
        .then(res => {
          
          console.log(res.data.payload)
          setPic(res.data.payload)})
        .catch(err => console.error(err))
    }, [id])

    const deletePic = () => {
      axios.delete(`${API}/pics/${id}`)
      .then(navigate('/pics'))
      .catch(err => console.error("error"))
    }

    const handleDelete = () => {
      deletePic()
    }

  return (
    <div className='pic-details'>
        <h2>{pic.name}</h2>
        <img className="pic-image"src={pic.url} alt={pic.name}></img>
        <h3>{pic.location}</h3>
        <h4>{pic.is_favorite ? "🌊What a View 🌊" : ""}</h4>
        <Link to={`/pics/${id}/edit`}><Button variant="outline-primary">Edit View</Button></Link>
        <Button onClick={handleDelete} variant="outline-primary">Delete This View</Button>
        <Link to="/pics"><Button variant="outline-primary">Nevermind</Button></Link>
    </div>
  )
}

export default PicDetail