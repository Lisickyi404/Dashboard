import './style.scss'
/*----------------------------------------------------------------*/ 
import Item from "../../Components/Item/Item"
/*----------------------------------------------------------------*/ 
import React from "react"

import { useSelector } from 'react-redux'

export default function LikesPage(){
    const state = useSelector(state=>state.likes.likes)

    return(
        <div className="LikesPage" onClick={()=>console.log(state)}>
            <ul className='likesList'>
                
                {state.map((ob,i)=>
                     
               <li className='list_item'>
                 <Item
                className="Item"
                id={ob.id}
                key={ob.id}
                title={ob.title}
                price={ob.price}
                avatar={ob.avatar}
                creator={ob.creatorName}
                time={ob.createdAt}
                location={ob.location}
                />
               </li>

                )}

            </ul>
        </div>
    )
}