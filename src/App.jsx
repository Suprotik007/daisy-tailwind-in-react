import { useState } from 'react'

import './App.css'
import DaisyNav from './components/DaisyNav'
import Navbar from './components/navigation/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header>

      <DaisyNav>
        
      </DaisyNav>
      <Navbar></Navbar>
    </header>
  )
}

export default App
