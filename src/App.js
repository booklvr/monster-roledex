import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [monsters, setMonsters] = useState(() => [
    { name: 'Frankenstein' },
    {
      name: 'Dracula',
    },
    {
      name: 'Zombie',
    },
  ])
  return (
    <div className='App'>
      {
        
      }
    </div>
  )
}

export default App
