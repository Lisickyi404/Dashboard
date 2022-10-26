import './style.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import {BiTimeFive} from 'react-icons/bi'
import axios from 'axios';
import {BsTelephone,BsWhatsapp,BsChatDots,BsBookmarkDash} from 'react-icons/bs'
import {FaRegHandshake} from 'react-icons/fa'

import {AiOutlineEye} from 'react-icons/ai'
export default function({data,date,account}){

    let today = new Date()
    const sendDeal = (data) =>{
        /* if(Object.keys(account).length===0){
            
        }
        else{
            const temp ={...data}
            const dealInfo ={
                idBoard:data.id,
                idUser:account.id,
                time:today
            }
            if (temp.hasOwnProperty('deals')){
                
                    temp.deals.push(dealInfo)
                
            } else{
                temp.deals=[]
                temp.deals.push(dealInfo)
            }
            
          

            axios.put(`https://6317f2c8f6b281877c5feabe.mockapi.io/boards/${data.id}`,temp)
            .then((res)=>console.log(res))   
        } */
        
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
        <p className='button_connect flex items-center text-3xl cursor-pointer mx-auto' onClick={()=>sendDeal(data)}> Deal <FaRegHandshake className='mr-1' size={34}/></p>
        </div>
    )
}