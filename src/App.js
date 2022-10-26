
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Decaloration from './Pages/Declaration/Decloration';
import CateogryPage from './Pages/CategoryPage/CategoryPage';
import ChatPage from './Pages/ChatPage/ChatPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import PostingPage from './Pages/PostingPage/PostingPage';
import ShopPage from './Pages/ChopPage/ShopPage';
import Footer from './Components/Footer/Footer';
/*---------------------------------------------------------------------------------------*/ 
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/*---------------------------------------------------------------------------------------*/ 



function App() {

  const category=[23,24,25,26,42,9,11,34,21,84,27,29,30,97,14,39,96,28,32,88]
  



  return (
    <div className="App">
       <Header/>
      <div className='wrapper container max-w-screen-xl mx-auto'>
       
        <div className='pt-20 z-10'>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path={`/theme/*`}element={<CateogryPage/>} />
          <Route path={'/Message'} element={<ChatPage/>}/>
          <Route path={'/Posting'} element={<PostingPage/>}/>
          <Route path={'/Shops'} element={<ShopPage/>}/>
          <Route path={`/Decaloration/:id`} element={<Decaloration/>}/>
        </Routes>
        </div>
     

        
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
