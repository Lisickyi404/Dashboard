import Ava from './Afshin.png'

function CharPrev(){
    return(
        <div className='flex py-6 w-full cursor-pointer z-10'>

        <img className='w-12 h-12' src={Ava} /> 
        
        <div className=' w-full ml-3 '>
          <div className='flex  max-w-full justify-between  items-center '>
          <h className='text-xl font-medium'>Ali Smith</h>
            <p>03:28</p>
          </div>
            <p className='text-sm font-normal text-slate-600 max-w-full absolute z-0'>Привет! Объявление все еще актуальн...</p>
        </div>
       
       
    </div>
    )
}


export default CharPrev