import React from 'react'
import Select from 'react-select'



function Search(){
   
    const options = [
        { value: 'all1', label: 'all1' },
        { value: 'all2', label: 'all2' },
        { value: 'all3', label: 'all3' }
    ]
    return(
        <div className="Search mx-auto my-40 flex flex-col items-center ">
            <span  className="text-5xl">Поиск объявлений</span>

            <div className="m-12 w-10/12  h-24 bg-gray-200 rounded-full absolute flex   items-center">
            <Select options={options} className="w-1/5 mx-2 "/>
                <input className="h-5/6 w-3/5 mx-4 bg-gray-200 focus:outline-none text-xl" placeholder="Например: Квартира в Эстонии..." ></input>     
            </div>
            
        </div>
    )
}



export default Search;