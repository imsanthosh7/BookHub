import React from 'react';
import Header from '../../Components/Header/Header'
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
const Home = () => {
  return (
   <main>
    <Header/>
    <Outlet/>
    <Footer/>
   </main>
  )
}

export default Home