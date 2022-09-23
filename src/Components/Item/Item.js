import ItemImg from './img/Item.png'
import LocImg from './img/Location.svg'
import Ava from './img/Afshin.png'
import { Link } from 'react-router-dom'
import DateObject from "react-date-object";

function Item(props){
    let date = new DateObject(props.time)
    return(
        <Link to={`/Decaloration/${props.id}`}>
         <div className='Item p-3 w-72 cursor-pointer rounded-lg border-2'>

<img className='' src={ItemImg} width={278} height={278}></img>
<span className='text-xl'>{props.title}</span>
<div className='flex'>
    <img src={LocImg}></img>
    <p className='text-base text-current'>{props.location.city+',   '+props.location.country}</p>
</div>
<h3 className='text-2xl py-4'>${props.price}</h3>

<div className='flex justify-between '>
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

    <div className='public'>
        <span className='text-sm text-slate-500 font-normal'>
        Опубликовано
        </span>
        <h4>{date.format("dddd DD MMMM")}</h4>
    </div>
</div>

</div>
        </Link>
       
    )
}


export default Item;