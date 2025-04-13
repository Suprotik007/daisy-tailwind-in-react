import { Suspense } from 'react'

import './App.css'
// import DaisyNav from './components/DaisyNav'
import Navbar from './components/navigation/Navbar'
// import PriceBox from './components/PriceBox'
import PriceBox from './components/Pricelist/PriceBox'
import ResultChart from './components/ResultChart/ResultChart'

 

const pricePromise=fetch('/public/plan.json')
.then(res=>res.json())



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
  <header>
      <Navbar></Navbar>
    </header>
    
<main>
<Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
 <PriceBox pricePromise={pricePromise}></PriceBox>
  </Suspense>
  <ResultChart></ResultChart>
</main>
    </div>
  

  )
}

export default App
