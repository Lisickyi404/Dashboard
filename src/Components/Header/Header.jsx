import Logo from './img/Frame.png'
import Chat from './img/Chat.svg'

import Save from './img/Save.svg'
import LoginPage from '../../Pages/LoginPage/LoginPage'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Notif from './Notif';

import { setData } from "../../Redux/Account";


function Header(){

    const account = useSelector(state=>state.account.accountsData)
    const dispatch = useDispatch()

    const [showLoginPage,setShowLoginPage] = React.useState(false)


    return(
        <div className="Header border-b-2 fixed bg-white z-20 w-screen pt-3 pb-3">
        <div className='flex justify-between  items-center w-9/12 mx-auto  ' >
        <Link to={`/`}>
        <div className='flex items-center'>
            <img src={Logo} width={48} height={48}></img>
            <span>NOOMBADS</span>
         

        </div>
        </Link>


        <div>
        <span>Обновления</span>
          
            <Link to={`/Shops`}>
            <span className='cursor-pointer ml-3'>Магазины</span>
            </Link>
            <span onClick={()=>dispatch(setData({}))}>Выйти</span>
            <span className='cursor-pointer ml-3'>Обновления</span>
        </div>
        {Object.keys(account).length === 0 ? 
        <div>
           
            <p className=' bg-blue-600 text-white px-2 py-1 my-auto w-fit h-fit rounded-lg cursor-pointer'
            onClick={()=>setShowLoginPage(true)}
            >
              
         Войти
         </p >
    
         
        </div> :
        
        <div className='flex items-center'>

            <Link to={`/Message`}>
            <img className='cursor-pointer' src={Chat} width={58} height={58}/>
                </Link>
         
            <Link to={'/Likes'}>
            <img className='cursor-pointer' src={Save}  width={58} height={58}/>
            </Link>
            <Notif/>
     
            <div className='flex ml-12 items-center'>
<img src={account.picture.thumbnail} className="w-14 h-14 rounded-full"></img>
<Link to={`/Posting`}>
<span className=' bg-blue-600 text-white px-2 py-1 my-auto w-fit h-fit rounded-lg'  onClick={()=>console.log(account)}>Выставить объявление</span>
</Link>

{/* <h3 className='p-3 bg-orange-300 cursor-pointer ml-2 rounded-lg' onClick={()=>changeUser()}>random user</h3> */}
</div>
            </div>


       
        
        }
   
        

    
        
       {showLoginPage ?
       
       <LoginPage
       setShowLoginPage={setShowLoginPage}
      
       />
       
       : null}

        </div>
    </div>
    )
}

export default Header;