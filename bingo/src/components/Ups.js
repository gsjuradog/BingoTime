import React from 'react'
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';
export default function Ups() {
  return (
    
    <div className='ups'>
      <div className='nav-title'>
        <h1>Ups!</h1>
        <Link className='nav-link' to='/'>Go back</Link>
      </div>
      <Animated 
        animationIn="bounceInDown" 

        animationInDuration={1000} 
        animationOutDuration={1000} 
        isVisible={true}
      >
 
        <div className="card">
        <img className="ups-img" src="https://media.giphy.com/media/WsGKzpdvWXY7jBNLqc/giphy.gif" alt="Ups Gif"/>
        <div className="container">
          <h4><b>Seams like you broke it...</b></h4>
          <p>You might be too healthy to play this</p>
          
        </div>
        </div>


      </Animated>
      
    </div>
  )
}
