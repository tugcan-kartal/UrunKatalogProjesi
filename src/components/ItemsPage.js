import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './ItemsPage.css';

function ItemsPage() {

    const [infos,setInfos]=useState([]);
    const [favs,setFavs]=useState([]);
    const [popUp,setPopUp]=useState("");

    const addToFav=(id)=>{
      
      axios.get(`https://assignment-api.piton.com.tr/api/v1/product/get/${id}`,{
        headers: {
          "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiIsImlhdCI6MTY1MDE4OTM0NywiZXhwIjoxNjc2MTA5MzQ3fQ.r7j-guzdX9M9LVaxzwGtLvACwI3HbfbGkOj-QbHKRJo"
        }
      }).then((response)=>{
        const favList=[...favs,response.data.product]
        setFavs(favList);
      }).catch((err)=>{
        console.log(err.message);
      })

    }

    const toShowDetails=(id)=>{
      axios.get(`https://assignment-api.piton.com.tr/api/v1/product/get/${id}`,{
        headers: {
          "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiIsImlhdCI6MTY1MDE4OTM0NywiZXhwIjoxNjc2MTA5MzQ3fQ.r7j-guzdX9M9LVaxzwGtLvACwI3HbfbGkOj-QbHKRJo"
        }
      }).then((response)=>{
        const toShowItem=response.data.product;
        setPopUp(toShowItem);
      }).catch((err)=>{
        console.log(err.message);
      })
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
                
                <div>

                  <div> 
                    <h3>Name: {val.name}</h3> 
                    <h5>Price: {val.price}</h5>
                  </div>

                  <div>
                    <img onClick={()=>toShowDetails(val.id)} src='https://www.atap.com.tr/storage/images/32b84246280a488fa70b9933f3c42647.jpg' ></img>
                  </div>

                  <div>Number of likes {val.likes} </div>

                  <div> 
                    <label>Saved in favourite</label>
                    <input onClick={()=>addToFav(val.id)} type='checkbox'></input> 
                  </div>
            
                </div>
                
              </div>  
            )
          })}
        </div>

        <div>

            <div>{popUp.name}</div>
            <div>{popUp.price}</div>
            <div>{popUp.description}</div>

        </div>

    </div>
  )
}

export default ItemsPage;