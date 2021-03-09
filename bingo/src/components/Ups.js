import React from 'react'
import {Animated} from "react-animated-css";
export default function Ups() {
  return (
    
    <div className='ups'>
      <h1>Seams like you broke it...</h1>
      <h3>You might be too healthy to play this</h3>
      <Animated 
        animationIn="bounceInDown" 

        animationInDuration={1000} 
        animationOutDuration={1000} 
        isVisible={true}
      >
 
        <img className="ups-img" src="https://media.giphy.com/media/WsGKzpdvWXY7jBNLqc/giphy.gif" alt="Ups Gif"/>
      </Animated>
    </div>
  )
}
