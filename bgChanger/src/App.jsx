import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor]=useState("olive")

  return (
    <>
      <div className="h-screen w-full" 
      style={{backgroundColor:color}}
      >
        <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={()=>{setColor("olive")}}
          className='outline-none px-4 rounded-full shadow-lg text-white '
          style={{backgroundColor:'olive'}}
          >Olive</button>
          <button
          onClick={()=>{setColor("red")}}
          className='outline-none px-4 rounded-full shadow-lg text-white '
          style={{backgroundColor:'red'}}
          >Red</button>
          <button
          onClick={()=>{setColor("blue")}}
          className='outline-none px-4 rounded-full shadow-lg text-white '
          style={{backgroundColor:'blue'}}
          >Blue</button>
          <button
          onClick={()=>{setColor("green")}}
          className='outline-none px-4 rounded-full shadow-lg text-white '
          style={{backgroundColor:'green'}}
          >Green</button>
          <button
          onClick={()=>{setColor("pink")}}
          className='outline-none px-4 rounded-full shadow-lg text-white '
          style={{backgroundColor:'pink'}}
          >Pink</button>
          <button
          onClick={()=>{setColor("black")}}
          className='outline-none px-4 rounded-full shadow-lg text-white '
          style={{backgroundColor:'black'}}
          >Black</button>
          <button
          onClick={()=>{setColor('purple')}}
          className='outline-none px-4 rounded-full shadow-lg text-white '
          style={{backgroundColor:'purple'}}
          >Purple</button>
          <button
          onClick={()=>{setColor("white")}}
          className='outline-none px-4 rounded-full shadow-lg text-black '
          style={{backgroundColor:'white'}}
          >White</button>
          </div> 
        </div>
      </div>
    </>
  )
}

export default App
