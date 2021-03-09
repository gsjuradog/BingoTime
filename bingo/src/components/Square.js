import React from 'react'
import {Animated} from "react-animated-css";
export default function Square({children,areChecked,onChecked, id, win}) {
 
  if(areChecked.includes(Number(id)) && id !== '12' ) {
    return (
      <Animated 
      animationIn="hinge" 
 
      animationInDuration={1000} 
      animationOutDuration={1000} 
      isVisible={win}>
        <div onClick={onChecked} className={`bingo-square isChecked `}>
          {children}
        </div>

      </Animated>
    )
  }
  return (
    <>
      {id !== '12' ? (
      <div onClick={onChecked} className={`bingo-square `}>
        {children}
      </div>
      ) : (
        <div onClick={onChecked} className={`bingo-square bingo-time `}>
        {`Bingo Time`}
      </div>
      )
      }
    </>
  )
}
