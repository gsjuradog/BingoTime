import React, {useState, useEffect} from 'react';
import shuffle from "shuffle-array";
import Square from './Square';
import {intersection, isEqual} from 'lodash';
import {useHistory} from 'react-router-dom'



export default function Board({items, winPosibilities}) {
  const [squares, setSquares] = useState({});
  const [win, setWin] = useState(false);
  const [selectedSquares, setSelectedSquare] = useState([12])
  const history = useHistory()

  useEffect(() => {
    choseItem(12)
    const data = shuffle(items).reduce(
      (data, value, index) => ({ ...data, [index]: value }),
      {}
    );
    setSquares(data)
  }, [])

  useEffect(()=> {
    const isWin = (selectedSquares) => {
      let win ;
      for (let i = 0; i < winPosibilities.length; i++) {
        if (intersection(selectedSquares, winPosibilities[i]).length > 4) {
          win =  intersection(selectedSquares, winPosibilities[i]);
          for (let j = 0; j < winPosibilities.length; j++) {
            if (isEqual(winPosibilities[i],win)) {
              
              return true;
            };
          };
         };
      };
      return false
    };
    const winning = isWin(selectedSquares)
    setWin(winning)
    
  },[selectedSquares, winPosibilities])


  const startCountDown = ()=>{
    return setTimeout(() => {
        history.push('/ups')   

    }, 2000);
  }
  
 
  const choseItem = (id)=> {
    if (selectedSquares.includes(Number(id))) return null
    setSelectedSquare([...selectedSquares, Number(id)])    
  }
 
  if (win) {
    startCountDown()
    
    return (
      <>
      <h1>Healthy habits bingo</h1>
      <h3>Do the tasks, see them desapear and be healthy</h3>
      <main>
    {Object.keys(squares).map(id => (
        <Square 
          key={id} 
          id={id} 
          onChecked={(e)=> {
            e.preventDefault()
            choseItem(id)} 
          }
          areChecked={selectedSquares}
          win={win}
        > 
          {"You're healtier"}
        </Square>
      )
    )}
    </main>
      </>
    )
  }

  return (
    <>
      <h1>Healthy habits bingo</h1>
      <h3>Do the tasks, see them desapear and be healthy</h3>
      <main>
      {Object.keys(squares).map(id => (
        <Square 
          key={id} 
          id={id} 
          onChecked={(e)=> {
            e.preventDefault()
            choseItem(id)} 
          }
          areChecked={selectedSquares}
          win={win}
        > 
          {squares[id]}
        </Square>
        )
      )}
      </main>
    </>
    
      )
}
