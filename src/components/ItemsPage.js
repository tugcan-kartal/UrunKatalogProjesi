import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './ItemsPage.css';

function ItemsPage() {

    const [ınfos,setInfos]=useState([]);

    useEffect(()=>{
        axios.get("https://assignment-api.piton.com.tr/api/v1/product/all",{
          headers:{
            "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiIsImlhdCI6MTY1MDE4OTM0NywiZXhwIjoxNjc2MTA5MzQ3fQ.r7j-guzdX9M9LVaxzwGtLvACwI3HbfbGkOj-QbHKRJo"
          }
        }).then((response)=>{
            setInfos(response.data);
        }).catch(()=>{
            console.log("Err");
        });
    },[]);

  return (
    <div>
        <div>
            {ınfos.products.map(ınfo=>(
              <div key={ınfo.id}>
                <h1>{ınfo.name}</h1>
                <img src={ınfo.image} alt='image not found'/>
                <h4>{ınfo.price}</h4>
                <h4>{ınfo.description}</h4>
                <h4>{ınfo.timestamp}</h4>
              </div>
            ))}
        </div>
    </div>
  )
}

export default ItemsPage