import { useState } from 'react'


function App(props) {
  const [color, setColor] = useState("olive")
  console.log('color', color)
  console.log(props)

  return (
    <>
   <div className="w-full h-screen duration-200" 
   style={{backgroundColor: color}}>Hello
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <button
    onClick={() => setColor("red")} className='flex flex-wrap justify-center bg-white text-black rounded-lg px-4 py-1 border-2 border-red-400'>
        Red
      </button>
      <button
      onClick={()=> setColor("blue")} className='flex flex-wrap justify-center bg-white text-black rounded-lg px-4 py-1 border-2 border-blue-400'>
        Blue
      </button>
      <button
      onClick={()=> setColor("yellow")} className='flex flex-wrap justify-center bg-white text-black rounded-lg px-4 py-1 border-2 border-yellow-400'>
        Yellow
      </button>
      <button
      onClick={()=> setColor("green")} className='flex flex-wrap justify-center bg-white text-black rounded-lg px-4 py-1 border-2 border-green-400'>
        green
      </button>
      
   
    </div>
   </div>
  </>
  )
}

export default App
