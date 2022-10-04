import Search from "../../Components/Search/Search";
import Item from "../../Components/Item/Item";

import MiniListItems from "../../Components/MiniLIstItems/MiniListItem.js";
import Ava from './Afshin.png'
import React from "react";

import axios from "axios";

function ShopPage(){

    const ref = React.createRef()

    const [items,setItems] = React.useState([])
    const [coutItems,setCoutItems] = React.useState(1)
    const [loading,setLoading] = React.useState(true)

    React.useEffect(()=>{
        setCoutItems(coutItems+1)
        if (loading){
            axios.get(`https://6317f2c8f6b281877c5feabe.mockapi.io/1/${coutItems}`).then
            ((res)=>setItems(oldArray=>[...oldArray,res.data]))
            .then(()=>console.log(items))
            setLoading(false)
        }
       
        
    },[loading])

    React.useEffect(()=>{
        document.addEventListener('scroll',scrollHandler)
        return ()=>{
            document.removeEventListener('scroll',scrollHandler)
        }
    })

    const scrollHandler = (e) =>{
        /*  console.log(e.target.documentElement.scrollTop)
            console.log(window.innerHeight)  */
            if(!loading){
                if (e.target.documentElement.scrollHeight -(e.target.documentElement.scrollTop + window.innerHeight)<300){
                    setLoading(true)
                }
            }
        
    }
    
    return(
        <div className="w-full">
            <div className="mx-auto w-fit">
                <p>Все магазины (132)</p>
            </div>

            <Search/>

            <div ref={ref}  onClick={()=>{scrollHandler()}}>
                <ul>
                    {items.map((ob,i)=>(
                         <li key={i}>
                         <div className="pb-12 border-b-2">
                             <div className="flex justify-between  items-center ">
                                 <div className="flex py-12">
                                 <img src={ob.picture.medium}  width={64} height={64}/>
                                 <div className="ml-5    ">
                                 <p className="text-3xl font-medium">Tech Pro</p>
                                 <div className=" flex items-center mt-1">
                                     <p className="text-sm text-base">4.9</p>
                                     <p className="text-gray-500">(84 отзыва)</p>
                                 </div>
                                 </div>
                                 </div>
 
                                 <span className="py-6 px-9 bg-blue-700 rounded-lg text-white cursor-pointer">
                                 Написать
                                 </span>
                             </div>  
                             <MiniListItems/>
                             <p className="text-white mx-auto w-fit mt-7 px-8 py-5 bg-black rounded-b-full rounded-t-full cursor-pointer">Cмотреть больше</p>
                         </div>
 
                      
                    
 
 
                     </li>
                    ))}
                   
                </ul>
            </div>


        </div>
    )
}

export default ShopPage;