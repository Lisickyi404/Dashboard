import ItemImg from './img/Item.png'
import LocImg from './img/Location.svg'
import { Link } from 'react-router-dom'
import DateObject from "react-date-object";
import React, { useRef } from 'react';
import {BsBookmark} from 'react-icons/bs'
import {FcBookmark} from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';
import {setLikes,deleteLikes} from '../../Redux/likes'

import './style.scss'

function Item(props){
    const state = useSelector(state=>state.likes.likes)
    const [like, setLike] = React.useState(true)
    const ref = useRef()

    React.useEffect(()=>{
        setLike(!(state.find(el=>el.id==props.id)))
    })

    

    const dispatch = useDispatch()
    
    const likeItem = (e) =>{
        e.stopPropagation() 
        e.preventDefault();
        if (like){
            dispatch(setLikes(props))
        } else {

            dispatch(deleteLikes(props))

        }
        setLike(!like)
        
    }

    let date = new DateObject(props.time)
    return(
        <Link to={`/Decaloration/${props.id}`} ref={ref}>
         <div className='item' >
{
    like ?
    <div className='likes' onClick={(e)=>likeItem(e)}>
    <BsBookmark size={30}/>
 
</div> :

<div className='likes' onClick={(e)=>likeItem(e)}>
    <FcBookmark  size={30}/>

</div> 

}


<img className='' src={ItemImg} width={278} height={278}></img>
<span className='text-xl'>{props.title}</span>
<div className='flex'>
    <img src={LocImg}></img>
    <p className='text-base text-current'>{props.location.city+',   '+props.location.country}</p>
</div>
<h3 className='text-2xl py-4'>${props.price}</h3>

<div className='flex justify-between items-center '>
    <div className='flex w-28'>
    <img className='rounded-full h-14' src={props.avatar} ></img>
    
    <div className='creator px-2'>
        <span className='text-base '>
        {}
        </span>
        <p className='text-sm'>
        4.9(84)
        </p>

    </div>
    </div>

    <div className='public w-fit'>
        <span className='text-sm text-slate-500 font-normal'>
        Опубликовано
        </span>
        <h4 className='w-32'>{date.format("dddd DD MMMM")}</h4>
    </div>
</div>

</div>
        </Link>
       
    )
}


export default Item;