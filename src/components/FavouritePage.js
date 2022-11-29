import React from 'react';
import './FavouritePage.css';
import './ItemsPage.js';
import ItemsPage from './ItemsPage.js';

function FavouritePage() {

  const fav_name=localStorage.getItem("name");
  const fav_price=localStorage.getItem("price");
  const fav_description=localStorage.getItem("description");

  return (

    <div>
       <div> {fav_name} </div>
       <div> {fav_price} </div>
       <div> {fav_description} </div>
    </div>
  )
}

export default FavouritePage;