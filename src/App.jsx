import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const defaultColor = "olive"
  const [color , setColor] = useState(defaultColor)
  const handleColorChange = (newColor) => {
    setColor((prevColor) =>(prevColor === newColor ? defaultColor : newColor))
  }

  return (
    <>
      <div className = "w-full h-screen duration-200" style={{backgroundColor: color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex justify-center flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> handleColorChange("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=> handleColorChange("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=> handleColorChange("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
        </div>
      </div>
    </>
  )
}

export default App
