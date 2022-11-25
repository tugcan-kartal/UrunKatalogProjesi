import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './ItemsPage.css';

function ItemsPage() {

    const [infos,setInfos]=useState([]);

    useEffect(()=>{
        axios.get("https://assignment-api.piton.com.tr/api/v1/product/all",{
          headers:{
            "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiIsImlhdCI6MTY1MDE4OTM0NywiZXhwIjoxNjc2MTA5MzQ3fQ.r7j-guzdX9M9LVaxzwGtLvACwI3HbfbGkOj-QbHKRJo"
          }
        }).then((response)=>{
          console.log(response.data.products)
            setInfos(response.data.products);
        }).catch(()=>{
            console.log("Err");
        });
    },[]);

  return (
    <div>
        <div className='text-red-400'>
          {infos?.map((val)=>{
            return (
              <div key={val.id} className='friendContainer'>
                <div className='friend'> 
                  <h3>Name: {val.name}</h3> 
                </div>
              </div>  
            )
          })}
        </div>
    </div>
  )
}

export default ItemsPage