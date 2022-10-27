import React from "react"
import NotifLogo from './img/Notifications.svg'

import './Style.scss'

import axios from "axios"




function Notif(){

    const [data,setData] = React.useState([])

    React.useEffect(()=>{
        axios.get('https://6317f2c8f6b281877c5feabe.mockapi.io/messages')
        .then((res)=>setData(res.data))
    },[])
    
    const [showListNot,setShowListNot] = React.useState(false)

    const NotsList = () =>{
        return(
            <ul className="list">
                {data.map((el,i)=>
                <li key={i}>
                    <div className="list_item">
                       <div className="flex justify-between">
                        
                       <span className="name">by {el.dealerName.first}</span>
                        <img src={el.dealerAva} width={50} height={50} className="rounded-full"/>
                       </div>
                        <p className="time">{el.time}</p>

                    </div>
                </li>)}
            </ul>
        )
    }


    return(
        <div className="Notifications">
            
        <img className='cursor-pointer'  src={NotifLogo}  width={58} height={58} onClick={()=>setShowListNot(!showListNot)}/>
        <span className="cout">{data.length}</span>

        {showListNot ? <NotsList/> : null}
    </div>
    )
}

export default Notif;