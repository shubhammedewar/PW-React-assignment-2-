import { useState } from 'react'
import './App.css'

function App() {
const [count, setCount] = useState(0)

  return (
    <div className='body'>
    <div id='count'>{count}</div>
    <div id='buttons'>
      <button id='decre' onClick={()=> {setCount(count-1)} } >Decrement</button>
      <button id='incre' onClick={()=> {setCount(count+1)} } >Increment</button>
    </div>
     
    </div>
  )
}

export default App
