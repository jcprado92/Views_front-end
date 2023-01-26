import React, { useEffect, useState } from "react";
import Pic from "./Pic";
import axios from "axios";
import "../styles/stylin.css"

const API = process.env.REACT_APP_API_URL;

function Pics() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/pics`)
      .then((res) => setPics(res.data.payload))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div>
      <section className="pic-container">
        {pics.map((pic) => (
          <Pic key={pic.id} pic={pic} id={pic.id}/>
        ))}
      </section>
    </div>
  );
}

export default Pics;
