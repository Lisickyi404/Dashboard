import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import ava from './img/Afshin.png'
import React from 'react'
import {useLocation} from "react-router-dom";
import DateObject from "react-date-object";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Decaloration(){

    const [data,setData]=React.useState(null)
    const [time,setTime] = React.useState(null)
    let location=useLocation()
    var date = new DateObject("2020 8 21 11 55 36 100 am");
    date=date.format("format", "MM/DD/YYYY")
    var id = (location.pathname).replace('/Decaloration/', "")
    
    React.useEffect(()=>
    {
        fetch(`https://6317f2c8f6b281877c5feabe.mockapi.io/boards/${id}`)
        .then((res)=>res.json())
        .then((res)=>setData(res))
     
        

    },[])


    return(
      <div >
    {data?
    <>
    {date=data.createdAd}
     <div className="flex justify-between my-5">
     <span>Вернуться к объявлениям</span>
     
     <ul className="flex">
         <li>
             Главная>
         </li>
         <li>
             объявления>
         </li>
         <li>
             Недвижимость>
         </li>
         <li>
         8723 New York st. Alihey 187921
         </li>
     </ul>
 </div>

 <div className='my-5'>
     <p>
     {data.title}
     </p>
     <p>
 
     {data.location.postcode + ', '+ data.location.city  + ', '+data.location.country}
     </p>
 </div>

 <div className='flex'>
     <div>
         <img src={img2} width={896} height={545}/>
         <ul className='flex gap-4'>
             <li>
                 <img src={img1}></img>
             </li>
             <li>
                 <img src={img3}></img>
             </li>
             <li>
                 <img src={img4}></img>
             </li>
             <li>
                 <img src={img1}></img>
             </li>
         </ul>
     </div>

     <div className='ml-9 p-6 bg-slate-300 h-fit rounded-lg'>
         <h3 className='text-5xl'>{'$'+data.price}</h3>
         <p className='text-base' >{'Опубликовано: '+ date +'🔥'} </p>

         <div className='flex items-center mt-6'>
             <img src={ava}></img>
             <h5 className=''>{data.creatorName.title+data.creatorName.first+data.creatorName.last}</h5>
         </div>

         <div className='mt-6'>
             <p className='text-sm text-current'>На сайте с 30.01.2022</p>
             <p className='flex text-sm text-current justify-between '>
             Номер Телефона </p>
             <h3 className='text-black'>{"+"+data.phone}</h3>
            

             <p className='flex text-sm text-current justify-between '>
             Whatsapp  </p>
             <h3 className='text-black'>{"+"+data.phone}</h3>
           
         </div>

         <Link to={'/Message'} state={data} >
         <p className='mt-7 p-5 bg-blue-600 text-white pl-11 rounded-lg'>
         написать продавцу
         </p >
         </Link>
        
         <p className='mt-7 p-5 bg-blue-600 text-white pl-11 rounded-lg'>
             Забронировать Звонок
         </p>

         <div className='flex mt-4 justify-between'>
             <p>224 просмотра</p>
             <p>32 сохранения</p>
         </div>
         </div>

     

 </div>
 <div className='pt-10'>
         <h3 className='text-2xl'>Описание</h3>
         <p>{data.description.text}</p>
     </div>  </>:null}
   </div>
 
    )
}

export default Decaloration;