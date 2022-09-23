 import { catogories } from "../../data";  
import Select from 'react-select'
import React from "react";
import { useForm } from "react-hook-form";
/* ------------------------------------------------------------- */
import Item from "../../Components/Item/Item";


function PostingPage(){


    
    let option = catogories.map((el,i)=>{

        return{
            value:el.title,
            label:el.title
        }
    }
    )
    const [options,setOptions] = React.useState()
    
    const getCategory = (e)=>{
        console.log(e)
        setOptions(((catogories.find(el=>el.title==e.value)).categories.map((el,i)=>{

            return{
                value:el.id,
                label:el.categoryName
            }
        }
        )))
    }

    const submitForm = (data) =>{
        data.preventDefault()
        console.log(data)
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <div className="flex">
            <div className="left w-10/12">
            <h3>Выставить новое объявление</h3>
            
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="w-1/2 flex"> 
                <Select options={option} className=""onChange={getCategory}/>
   {  <Select options={options} onChange={register('id')}/>}
                </div>



 <input type='file' />


<p className="mt-8 text-base leading-tight">Введите название</p>
                <input
                {...register("title")}
                id="title"
                autoComplete="text"
                required
                className="relative  text-base  block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                placeholder="Пример: Красивый дом"
                
                />

<p className="mt-8 text-base leading-tight">Описание</p>
                <textarea
                {...register("description")}
                id="description"
                autoComplete="text"
                required
                className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-base"
                placeholder="Helping text"
                
                />

<div className="contscts flex mt-8">

                <input className='w-48'
                {...register("email")}
                id="email"
                autoComplete="text"
                type='email'
                required
              
                placeholder="email"
                
                />

                <input className='w-48'
                {...register("phone")}
                id="phone"
                autoComplete="text"
                type='phone'
                required
               
                placeholder="phone"
                
                />
</div>






  <input type="submit" value="Отправить" className="mt-8" />
            </form>



            </div>



            <div className="right "></div>
            <Item
            id={111}
            title={'example'}
            location={
                {city:123,
                country:123}
            }
            price={123}
            />
        </div>
    )
}

export default PostingPage;