import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Routes,Route } from 'react-router-dom'
import Result from './components/Result'
import TopNews from './components/TopNews'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<News/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/topnews' element={<TopNews/>}></Route>
      </Routes>
    </>
  )
}

export default App
