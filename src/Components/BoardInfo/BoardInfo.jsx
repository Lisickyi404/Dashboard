import './style.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import React from 'react';
import {BiTimeFive} from 'react-icons/bi'
import axios from 'axios';
import {BsTelephone,BsWhatsapp,BsChatDots,BsBookmarkDash} from 'react-icons/bs'
import {MdTimelapse} from 'react-icons/md'
import {FaRegHandshake,FaRegSmileWink,FaAngry} from 'react-icons/fa'

import {AiOutlineEye} from 'react-icons/ai'
export default function({data,date,account}){

    let today = new Date()

    const [dealStatus,setDealStatus] = React.useState(0)
    /* 0-сделка открыта 1-ожидаие подтверждения 2-подтверждение 3-отказ */

    React.useEffect(()=>{
        setDealStatus(data.boardStatus)
    },[])
    
    const ConfirmDeal = () =>{

    const acceptDeal = () =>{
        const temp ={...data}
        temp.boardStatus = 2
        setDealStatus(2)
        axios.put(`https://6317f2c8f6b281877c5feabe.mockapi.io/boards/${data.id}`,temp)
    }

    const decDeal = () =>{
        setDealStatus(3)

    }
    
      return(
        <div className='flex items-center'>
        <h3 className='p-1 text-sm bg-green-400 w-fit h-fit' onClick={()=>acceptDeal()}>accept</h3>
        <h3 className='p-1 text-sm bg-red-400 w-fit h-fit' onClick={()=>decDeal()}>decline</h3>

    </div>
      )
    }

    const sendDeal = (data) =>{
        
        console.log(data)
        axios.post('https://6317f2c8f6b281877c5feabe.mockapi.io/messages',{
            idBoard:data.idBoard,
            dealer:account.id,
            dealerName:account.name,
            dealerAva:account.picture.thumbnail,
            time:today,
            
        })
        const temp ={...data}
        
        switch(dealStatus){
            case 0:
            case null:
            case undefined:
                temp.boardStatus = 1
                setDealStatus(1)
                axios.put(`https://6317f2c8f6b281877c5feabe.mockapi.io/boards/${data.id}`,temp)

        }

    
    }

    return(
        <div className='info_page'>
        <h3 className='text-5xl'>{'$'+data.price}</h3>
        <p className='text-base leading-4 mt-2' >{'Опубликовано: '+ date +'🔥'} </p>

       <div className='creator_info px-4 py-4 '>

       <div className='flex items-center '>
            <img src={data.avatar} className='w-12 h-12 rounded-full'></img>
            <h5 className='text-2xl'>{data.creatorName.title+data.creatorName.first+data.creatorName.last}</h5>
        </div>

        <div className='mt-5'>
            <p className='text-base text-current flex items-center text-slate-500'><BiTimeFive size={23}/>  На сайте с 30.01.2022</p>

            <div className='w-full flex justify-between items-center mt-5'>
            <p className='w-fit flex items-center text-slate-500'> <BsTelephone size={20}/>
            Номер Телефона </p>
            
            <h3 className='text-black w-fit font-meduim text-xl'>{"+"+data.phone}</h3>
           </div>

           <div className='w-full flex justify-between items-center mt-5'>
            <p className='w-fit flex items-center text-slate-500'> <BsWhatsapp size={20}/>
            WhatsApp </p>
            
            <h3 className='text-black w-fit font-meduim text-xl'>{"+"+data.phone}</h3>
           </div>
            
        </div>

        <Link to={'/Message'} state={data} >
        <p className='button_connect' >
           <BsChatDots/>
        Написать продавцу
        </p >
        </Link>
       
        <p className='button_connect flex items-center'><BsTelephone />
            Забронировать Звонок
        </p>


        </div>
       
        <div className='flex mt-4 justify-evenly w-full'>
            <p className='text-lg text-slate-500 flex items-center'><AiOutlineEye className='mr-1' size={23}/>224 просмотра</p>
            <p className='text-lg text-slate-500 flex items-center'><BsBookmarkDash className='mr-1' size={23}/>{data.likes.length} сохранений</p>
        </div>
        <p className='button_connect flex items-center text-3xl cursor-pointer mx-auto' onClick={()=>sendDeal(data)}>
           
            {dealStatus==0 || dealStatus==null || dealStatus==undefined ? <><FaRegHandshake className='mr-1' size={34}/>  Deal </> : null}
            {dealStatus==1 ? <><MdTimelapse className='mr-1' size={34}/><ConfirmDeal/></>   :null}
            {dealStatus==2 ? <><FaRegSmileWink className='mr-1' size={34}/>Подтверждено</>   :null}
            {dealStatus==3 ? <><FaAngry className='mr-1' size={34}/>!ОТКАЗ!</>   :null}
        </p>
        </div>
    )
}