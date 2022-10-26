import React from "react"

export default function NavigationMenu({category}){

    const [way,setWay] = React.useState([{title:'Главная',link:'/'},{title:category,link:''}])
    

    

    return(
        <>
         <div className="flex justify-between items-center py-5">
                <span className="text-base  font-medium px-8 py-4 border-2 rounded-full cursor-pointer">Вернуться к объявлениям</span>
                
                <ul className="flex">

                    {way.map((el,i)=>(
                        <li className="text-base font-semibold text-gray-400 cursor-pointer">{el.title} ></li>
                    ))}
                    
                </ul>
            </div>
        </>
    )
}