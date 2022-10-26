import Logo from './img/Frame.png'
import Chat from './img/Chat.svg'
import Notif from './img/Notifications.svg'
import Save from './img/Save.svg'
import Ava from './img/Profile.png'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

import { setData } from "../../Redux/Account";


function Header(){

    const account = useSelector(state=>state.account.accountsData)
    const dispatch = useDispatch()

    return(
        <div className="Header border-b-2 fixed bg-white z-20 w-screen">
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
            <Link to={`/login`}>
            <p className=' bg-blue-600 text-white px-2 py-1 my-auto w-fit h-fit rounded-lg' >
         Войти
         </p >
            </Link>
         
        </div> :
        
        <div className='flex'>

            <Link to={`/Message`}>
            <img className='cursor-pointer' src={Chat} width={58} height={58}></img>
                </Link>
         
            <img className='cursor-pointer' src={Save}  width={58} height={58}></img>
            <img className='cursor-pointer'  src={Notif}  width={58} height={58}></img>


            <div className='flex ml-12 items-center'>
<img src={account.picture.thumbnail} className="w-14 h-14 rounded-full"></img>
<Link to={`/Posting`}>
<span className=' bg-blue-600 text-white px-2 py-1 my-auto w-fit h-fit rounded-lg'  onClick={()=>console.log(account)}>Выставить объявление</span>
</Link>
</div>
            </div>


       
        
        }
   
        

    
        
       

        </div>
    </div>
    )
}

export default Header;