import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import ava from './img/Afshin.png'
import React from 'react'
import {useLocation} from "react-router-dom";
import DateObject from "react-date-object";
import LoginPage from '../LoginPage/LoginPage'
import NavigationMenu from '../../Components/NavigationMenu/NavigationMenu'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import axios from 'axios'
  import { setData } from '../../Redux/Account'
  import { useSelector, useDispatch } from 'react-redux'
  import  './style.css'


import BoardInfo from '../../Components/BoardInfo/BoardInfo'




function Decaloration(){

    
    const account = useSelector(state=>state.account.accountsData)
    const dispatch = useDispatch()

    const [data,setData]=React.useState(null)
    const [time,setTime] = React.useState(null)
    const [showModalLogin,setShowModalLogin] = React.useState(false)

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

    
    const SetLike= (data) =>{
        
        if(Object.keys(account).length===0){
            setShowModalLogin(true)
        }
        else{
            const temp ={...data}
            temp.likes.push(account.id) 

            axios.put(`https://6317f2c8f6b281877c5feabe.mockapi.io/boards/${data.id}`,temp)
            .then((res)=>console.log(res))   
        }
        
        
        
    }

    
    return(
      <div onClick={()=>console.log(data)}>

        {showModalLogin ? <LoginPage setShowModalLogin={setShowModalLogin}/>:null}
    {data?
    <>
    {date=data.createdAd}
    <NavigationMenu/>

 <div className='my-5 flex justify-between'>

    <div>
    <p>
     {data.title}
     </p>
     <p>
 
     {data.location.postcode + ', '+ data.location.city  + ', '+data.location.country}
     </p>
    </div>
    
    <button className='button' onClick={()=>SetLike(data)}>Добавить в избранное</button>

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

    <BoardInfo 
        data={data}
        date={date}
        account={account}
        />

     

 </div>


 <div className='pt-10'>
         <h3 className='text-2xl'>Описание</h3>
         <p>{data.description.text}</p>
     </div>  </>:null}
   </div>
 
    )
}

export default Decaloration;