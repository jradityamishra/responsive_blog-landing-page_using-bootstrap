import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import Filter from './component/Filter';
import FilterHeader from './component/FilterHeader';
const App = () => {
  return (
   <>
   <Navbar/>
   <Slider/>
   <FilterHeader/>
   <Filter/>
   </>
  )
}

export default App
