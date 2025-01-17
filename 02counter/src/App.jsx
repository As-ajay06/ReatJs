import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)
  
  const addValue = () => {
    counter += 1 ;
    if(counter > 20){
      return
    }
    else{
      console.log('clicked', counter);
      setcounter(counter)
    }
  }
  const removeValue = () => {
    counter -=1;
    if (counter < 0){
      return
    }
    else{
      setcounter(counter)
    }

  }

  return (
    <>
    <h1>I will count</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value</button>
    {/* line break tag */}
    <br /> 
    <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
