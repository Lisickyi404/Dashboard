import Ava from './Afshin.png'

function CharPrev(){
    return(
        <div className='flex py-6 w-full cursor-pointer'>

        <img className='w-12 h-12' src={Ava} /> 
        
        <div className=' w-full ml-3 '>
            <h className='text-xl font-medium'>Ali Smith</h>
            <p className='text-sm font-normal text-slate-600 max-w-full absolute'>Привет! Объявление все еще актуальн...</p>
        </div>
       
        <p>03:28</p>
    </div>
    )
}


export default CharPrev