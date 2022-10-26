import logo from './img/logo.png'
import img1 from './img/1.png'
import img2 from './img/2.png'
import './style.scss'

import React from 'react'

import { Link } from 'react-router-dom'

export default function Footer(){

    const menuLinks = [
        {title:'Главная',path:'/'},
        {title:'Объявления',path:'/Shops'},
        {title:'Магазины',path:'/Shops'},
        {title:'Услуги',path:'/Shops'},
        {title:'Помощь',path:''},
        {title:'Главная',path:'/'},

    ]

    const [menuLink,setMenuLink] = React.useState(null)



    return(
        <div className="Footer_wrapper">
            <div className='Footer'>
                <div className='left_logo'>
                    <span className='Logo'>
                        <img src={logo} width={48} height={48}/>
                        <h3>NOOMBADS</h3>
                    </span>
                </div>

                <ul className='menu_list'>
                {menuLinks.map((el,i)=>
              <Link to={el.path}>
              
              <li key={'i'+i}
                onClick={()=>setMenuLink(i)}
                className={menuLink==i ? 'active link' : 'link'}
                >
                    {el.title}
                </li>
                </Link>
                    )}
                </ul>


                <div className='right_logo'>
                    <img src={img1} className='logo1'/>
                    <img src={img2} className='logo2'/>
                </div>
            </div>
        </div>
    )
}