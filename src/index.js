import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes, Route } from 'react-router-dom' ;
import './index.css';
import { AppProvider } from './Context';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import BookList from './Components/BookList/BooKList';
import BookDetails from './Components/BookDetails/BookDeatils'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
     <BrowserRouter>
   <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='about' element={<About/>}/>
        <Route path='book'  element={<BookList/>}/>
        <Route path='/book/:id' element ={<BookDetails/>}/>
      </Route>
   </Routes>
  </BrowserRouter>
 </AppProvider>
 
 
);


