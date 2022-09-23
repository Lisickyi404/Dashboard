import Logo from './img/Line.svg'

import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { Routes,Link,useParams } from 'react-router-dom';



function Category({title,linkName}){
   

    return( 
       <Link to={`theme/${linkName}`}>
          <div className='w-96 h-64 bg-gray-200 m-5 pl-7 pt-14 rounded-2xl cursor-pointer' >
        
        <img  src={Logo} width={48} height={48}></img>
        <div>
            <h3 className='text-3xl mt-3'>{title}</h3>
            <p className='text-base text-neutral-400 mt-1'>Квартиры, дома и многое другое</p>
        </div>
        <h4 className='bg-white rounded-2xl w-9/12 h-10 text-center align-middle text-sm tracking-wider font-bold pt-2 mt-6'>220 000+ ОБЪЯВЛЕНИЙ</h4>
        
      
       
        </div>
       </Link>
           

      
    )
}

export default Category;