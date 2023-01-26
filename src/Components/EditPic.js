import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import "../styles/stylin.css"
const API = process.env.REACT_APP_API_URL

function EditPic() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [ pic, setPic ] = useState({
        name: "",
        url: "",
        location: "",
        is_favorite: true
    })

    useEffect(() => {
        axios.get(`${API}/pics/${id}`)
        .then(res => setPic(res.data.payload))
        .catch(err => console.error(err))
    }, [id])

    const handleTextChange = (e) => {
        setPic({ ...pic, [e.target.id]: e.target.value });
      };

    const editPic = (updatedPic) => {
        axios.put(`${API}/pics/${id}`, updatedPic)
        .then(() => navigate("/pics"))
        .catch((c) => console.warn("catch", c));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editPic(pic)
    }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit} className="edit">
      <h1>Edit View</h1>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={pic.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
          <br />
          <br />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          value={pic.url}
          placeholder="URL"
          onChange={handleTextChange}
        />
          <br />
          <br />
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          type="text"
          name="locations"
          value={pic.location}
          placeholder="Location"
          onChange={handleTextChange}
        />
          <br />
          <br />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="text"
          name="is_favorite"
          value={pic.is_favorite}
          placeholder="Favorite?"
          onChange={handleTextChange}
        />
        <br />
        <br />
      <Link to={`/pics/${id}`}>
        <button>Nevermind!</button>
      </Link>
        <input type="submit" />
      </form>
    </div>
  );
}

export default EditPic