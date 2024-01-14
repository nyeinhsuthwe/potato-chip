import React from 'react'
import './App.css'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router'
import Home from './Components/Home'
import Menu from './Components/Menu'
import ChileLemon from './Components/ChileLemon'
import Barbecue from './Components/Barbecue'
import Cream from './Components/Cream'
import Honey from './Components/Honey'
import Sweet from './Components/Sweet'
import SourCream from './Components/SourCream'


const App = () => {
  return (
    <div className=''>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/chile' element={<ChileLemon/>}/>
      <Route path='/barbecue' element={<Barbecue/>}/>
      <Route path='/cream' element={<Cream/>}/>
      <Route path='/honey' element={<Honey/>}/>
      <Route path='/sweet' element={<Sweet/>}/>
      <Route path='/sour' element={<SourCream/>}/>
     </Routes>
    </div>
  )
}

export default App