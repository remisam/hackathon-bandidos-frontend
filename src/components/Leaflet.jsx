 import React from 'react'

 import { Marker, Popup } from 'react-leaflet'
 import { useNavigate } from 'react-router-dom'
 import './style/Leaflet.css'

 export const Leaflet = ({
  surname,
  name,
  image,
  id,
  ville,
  rating,
  armes,
  latitude,
  longitude,
  prime
 }) => {
   let navigate = useNavigate()
   // const position = [41.249335, -104.668069]

   return (
     <>
       <Marker key={id} position={[latitude, longitude]}>
         <Popup position={[latitude, longitude]} >
           <div className='pop_up-contain'>
             <>
             <img className="popImg" src={require(`../assets/img/${image}`)} alt={name}/>
             <h2>{surname}</h2>
               <p>nom: {name}</p>
               <p>armes: {armes}</p>
               <p>ville: {ville}</p>
               <p className='LFprime'>💰 {prime} $</p>
               <p className='rating'>☠️{rating}☠️</p>
             </>
             <button
               className='leaflet_btn__card'
               onClick={() => navigate(`/bandits/${id}`)}
             >
               Détail
             </button>
           </div>
         </Popup>
       </Marker>
     </>
   )
 }
