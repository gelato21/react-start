import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) //hooks 15 is initial value of counter variable here setCounter is function to set the value of counter


  // let counter=5;
  const incValue = ()=>{
    counter++;
    if(counter>=20){
      counter=20;
    }
    setCounter(counter)  //pass value to set the value
  }
  const decValue= function(){
    counter--;
    if(counter<=0){
      counter=0;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Increment or Decrement</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incValue}>Increase Value: {counter}</button>
      <br />
      <button onClick={decValue}>Decrese Value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
