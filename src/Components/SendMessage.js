import Ava from './Header/img/Profile.png'

function SendMessage({text,creator}){
  if(creator=='vasya'){
   return(
      <div className="my-6 w-fit ml-auto mr-0">
      <p className="py-4 px-6 w-fit bg-blue-800 text-white rounded-l-3xl rounded-br-3xl rounded-tr">{text}</p>
  </div>
     )
  } else{
   return(
      <div className="my-6 w-fit mr-auto ml-0">
                
      <div className="flex">
      <img src={Ava} width={32} height={32}/>
             <div className="flex flex-col ml-3" >
             <h className='text-xl font-medium'>John ⚡️</h>
              <h className='text-sm text-slate-600'>Заходил в 14:42</h>
             </div>
          </div>
          <p className="  py-4 px-6 rounded-r-3xl rounded-bl-3xl rounded-lr bg-slate-300">{text}</p>
      </div>
   )
  }
}

export default SendMessage;