import './App.css'
import { Route, Routes } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import GallerySection from './components/GallerySection'
import FeaturesSection from './components/FeaturesSection'

function App() {

  return (
    <div className='h-screen w-full bg-black'>
      <Navbar/>

      <HeroSection/>

      <hr className='border-[#9F9F9F] opacity-40 mt-[8%] max-w-[90%] mx-auto'></hr>

      <GallerySection/>

      <hr className='border-[#9F9F9F] opacity-40 mt-[8%] max-w-[90%] mx-auto'></hr>

      <FeaturesSection/>
    </div>
  )
}

export default App