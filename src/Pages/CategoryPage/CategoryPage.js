import Search from "../../Components/Search/Search";
import Item from "../../Components/Item/Item";
import { catogories } from "../../data";
/*---------------------------------------------------------------------------------------*/ 
import bgImg from './img/bg.png'
/*---------------------------------------------------------------------------------------*/ 
import Select from 'react-select'
import { useNavigate, useLocation,useParams } from "react-router-dom";

import React from "react";
import { useState } from "react";

import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";

function CateogryPage(){

    let location=useLocation()
    const params = useParams()
   

    const nameCategory= params['*']

    const categoriesOnPage = catogories.find(ob=>ob.linkName===nameCategory)
  

   const catgrs = categoriesOnPage.categories
    
    let option = catgrs.map((ob)=>{
        return{
            value:ob.id,
            label:ob.categoryName
        }
    })

    const [selectedOption, setSelectedOption] = useState(25);
    const [items,setItems] = React.useState([])

    React.useEffect(()=>
    {
        fetch(`https://6317f2c8f6b281877c5feabe.mockapi.io/boards?`)
        .then((res)=>res.json())
        .then((res)=>setItems(res))
        .then((res)=>console.log(items))

    },[selectedOption])

      

    return(
        <div className="mt-12">
           <NavigationMenu category={categoriesOnPage.title}/>

            <div className="h-96">
            <img src={bgImg} className=' z-0 absolute'></img>

                <span className="ml-4 mt-6 bg-white p-2 rounded-full absolute text-sm  tracking-wider font-bold">220 000+ ОБЪЯВЛЕНИЙ</span>
                <span className=" mt-20 ml-4 text-xl absolute text-6xl text-white ">{categoriesOnPage.title}</span>
                <div className="ml-4 mt-48 w-10/12  h-24 bg-gray-200 rounded-full absolute flex   items-center">
            <Select options={option} className="w-1/5 mx-2 " defaultValue={selectedOption} onChange={setSelectedOption}/>
                <input className="h-5/6 w-3/5 mx-4 bg-gray-200 focus:outline-none text-xl" placeholder="Например: Квартира в Эстонии..." ></input>     
            </div>
            
            </div>

            <div className="filter flex justify-between">
                <div>
                    <label>
                    <input value='123' type='checkbox'/>
                    С фото
                    </label>

                    <label>
                    <input value='123' type='checkbox'/>
                    С фото
                    </label>
                   
                </div>

                <select>
                    <option>Новые</option>
                    <option>Новые</option>
                    <option>Новые</option>
                </select>
            </div>

            <div className="mt-6 flex gap-8 flex-wrap" >
         {items.map((ob,i)=>(
                <Item
                id={ob.id}
                key={ob.id}
                title={ob.title}
                price={ob.price}
                avatar={ob.avatar}
                creator={ob.creatorName}
                time={ob.createdAt}
                location={ob.location}
                category={categoriesOnPage.title}

               
                />
             ))} 
            </div>
          

        </div>
    )
}


export default CateogryPage;