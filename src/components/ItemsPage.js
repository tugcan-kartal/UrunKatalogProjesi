import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './ItemsPage.css';

function ItemsPage() {

    const [infos,setInfos]=useState([]);
    const [hideStatus,setHideStatus]=useState(false);

    const handleClick=event=>{
      setHideStatus(current => !current);
    }

    const goBackToItems=event=>{
      setHideStatus(current => !current);
    }
    
    useEffect(()=>{
        axios.get("https://assignment-api.piton.com.tr/api/v1/product/all",{
          headers:{
            "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiIsImlhdCI6MTY1MDE4OTM0NywiZXhwIjoxNjc2MTA5MzQ3fQ.r7j-guzdX9M9LVaxzwGtLvACwI3HbfbGkOj-QbHKRJo"
          }
        }).then((response)=>{
            setInfos(response.data.products);
        }).catch(()=>{
            console.log("Err");
        });
    },[]);

  return (
    <div>
        <div>
          {infos?.map((val)=>{
            return (
              <div  key={val.id}>
                
                <div className={hideStatus ? 'block' : 'hidden'}>

                  <div> 
                    <h3>Name: {val.name}</h3> 
                    <h5>Price: {val.price}</h5>
                  </div>

                  <div onClick={handleClick}>
                    <img src='https://www.atap.com.tr/storage/images/32b84246280a488fa70b9933f3c42647.jpg' ></img>
                  </div>

                  <div>Number of likes {val.likes} </div>

                  <div> 
                    <label>Saved in favourite</label>
                    <input type='checkbox'></input> 
                  </div>

                </div>

                
                <div className={hideStatus ? 'hidden' : 'block'}>
                  <div>{val.name}</div>
                  <div>{val.description}</div>
                  <div>{val.price}</div>
                  <button onClick={goBackToItems}>Go back</button>
                </div>

              </div>  
            )
          })}
        </div>
    </div>
  )
}

export default ItemsPage