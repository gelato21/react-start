import { useState, useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength]=useState(8);
  const [numberAllow, setNumberAllow]=useState(false);
  const [charAllow, setCharAllow]=useState(false);
  const [password, setPassword]=useState('')

  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllow){
      str+="1234567890"
    }
    if(charAllow){
      str+="!@#$%^&*(){}[]?/"
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllow, charAllow, setPassword])

  const copyPassToClipBoard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className=' text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly
           ref={passwordRef}
          />
          <button className=' bg-blue-800 text-white px-2 py-2 sh'
          onClick={copyPassToClipBoard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className=' cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)}
            }
            />
            <label >length: {length}</label>
            <input
            type='checkbox'
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={()=>{
              setNumberAllow((prev)=> !prev);
            }} />
            <label htmlFor='numberInput'>Numbers</label>
            <input type="checkbox"
            defaultChecked={charAllow}
            id="charInput"
            onChange={()=>{
              setCharAllow((prev)=>!prev)
            }} />
            <label htmlFor="charInput">Characters</label>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
