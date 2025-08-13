//import { useState } from 'react'
import Card from './components/Card'

import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  let myObj = {
    username:"Dipayan",
    age:21
  }

  return (
    <>
     <h1 className='bg-blue-500 text-black p-4 rounded-xl'>Tailwind test</h1>
     <Card channel="Dip" some={myObj} btn="Click me"/>
    </>
  )
}

export default App
