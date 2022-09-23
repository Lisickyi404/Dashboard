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




function Header(){
    return(
        <div className="Header border-b-2">
        <div className='flex justify-between  items-center' >
        <Link to={`/`}>
        <div className='flex items-center'>
            <img src={Logo} width={48} height={48}></img>
            <span>NOOMBADS</span>
        </div>
        </Link>
        <div>
        <span>Обновления</span>
            <Link to={`/login`}>
            <span className='cursor-pointer ml-3'>Логин</span>
            </Link>
            <Link to={`/Shops`}>
            <span className='cursor-pointer ml-3'>Магазины</span>
            </Link>
            <span className='cursor-pointer ml-3'>Обновления</span>
        </div>

        <div className='flex'>

        <Link to={`/Message`}>
        <img className='cursor-pointer' src={Chat} width={58} height={58}></img>
            </Link>
     
        <img className='cursor-pointer' src={Save}  width={58} height={58}></img>
        <img className='cursor-pointer'  src={Notif}  width={58} height={58}></img>
        </div>
        
        <div className='flex'>
        <img src={Ava}></img>
       <Link to={`/Posting`}>
       <span>Выставить объявление</span>
       </Link>
        </div>

        </div>
    </div>
    )
}

export default Header;