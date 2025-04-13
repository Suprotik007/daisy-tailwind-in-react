import { Suspense } from 'react'

import './App.css'
// import DaisyNav from './components/DaisyNav'
import Navbar from './components/navigation/Navbar'
// import PriceBox from './components/PriceBox'
import PriceBox from './components/Pricelist/PriceBox'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './components/Markbox/MarksChart'
 

const pricePromise=fetch('/public/plan.json')
.then(res=>res.json())

const marksData=axios.get('marks.json')

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
  <header>
      <Navbar></Navbar>
    </header>
    
<main >
<Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
 <PriceBox pricePromise={pricePromise}></PriceBox>
 
  </Suspense>

  
    {/* <MarksChart marksData={marksData}></MarksChart> */}
  
  <ResultChart ></ResultChart>
</main>
    </div>
  

  )
}

export default App
