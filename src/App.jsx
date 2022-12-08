import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='main'>
        <div className='center'></div>
        <div className='item mercury' style={{animationDelay: '-1s',animationDuration: '2s'}}></div>
        <div className='item venus' style={{animationDelay: '-2s',animationDuration: '3s'}}></div>
        <div className='item earth' style={{animationDelay: '-3s',animationDuration: '4s'}}></div>
        <div className='item mars' style={{animationDelay: '-4s',animationDuration: '5s'}}></div>
      </div>
    </div>
  )
}

export default App
