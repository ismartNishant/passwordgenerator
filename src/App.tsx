
import './App.css'
import Hero from './Components/Hero'
import { Navbar } from './Components/Navbar'

function App() {

  return (
    <div className='w-screen h-screen relative overflow-x-hidden'>
      <Navbar />
      <Hero />
    </div>

  )
}

export default App
