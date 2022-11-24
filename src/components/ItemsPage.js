import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import './ItemsPage.css';

function ItemsPage() {

    const [ınfos,setInfos]=useState([]);

    useEffect(()=>{
        const tokenFromLogin=String(localStorage.getItem("token"));
        Axios.get(`https://assignment-api.piton.com.tr/api/v1/product/all`,tokenFromLogin).then((response)=>{
            setInfos(response.data);
        }).catch(()=>{
            console.log("Err");
        });
    },[]);

  return (
    <div>
        <div className='allOfPosts'>
            {ınfos.map(ınfo=>(
              <div className='borderPost' key={ınfo._id}>
                <h1>{ınfo.name}</h1>
                <img className='postImage' src={ınfo.image} alt='image not found'/>
                <h4 className='subjectparagraph'>{ınfo.price}</h4>
                <h4 className='subjectparagraph'>{ınfo.description}</h4>
                <h4 className='subjectparagraph'>{ınfo.timestamp}</h4>
              </div>
            ))}
        </div>
    </div>
  )
}

export default ItemsPage