
import Ava from './Afshin.png'
import SendMessage from "../../Components/SendMessage";

import React from 'react';



function ChatWindow(){
    
   
    const ref=React.useRef()
    
    const [chat,setChat] = React.useState([])

    const sendMyMessage = (text) =>{
     var now = new Date()
         var obMessage = {
             text:text,
             time:now,
             creator:'vasya'
         }
 
         setChat(oldChat => [...oldChat,obMessage])
 
 
         sendFriendMessage (text)
         
    }

    const sendFriendMessage = (text) =>{
        var now = new Date()
        var obMessage = {
            text:text,
            time:now,
            creator:'friend'
        }
    
        setChat(oldChat => [...oldChat,obMessage])
        console.log(chat)
        
    }

    return(
        <>
          <div className="w-3/6 h-5/6 fixed inset-x-1/3  pl-10 " >
            <div className="flex justify-between  items-center py-4">
                <div className="flex">
                    <img src={Ava}/>
                    <div className="flex flex-col ml-3">
                        <h className='text-xl font-medium'>$42,290</h>
                        <h className='text-sm text-slate-600'>Mercedes S-Class</h>
                    </div>
                </div>

                <div className="flex">
                    <img src={Ava}/>
                    <div className="flex flex-col ml-3">
                        <h className='text-xl font-medium'>John ⚡️</h>
                        <h className='text-sm text-slate-600'>Заходил в 14:42</h>
                    </div>
                </div>

            </div>

            <div className="h-full overflow-y-scroll scroll scroll-smooth scrollbar-hide" >

                {chat.map((ob,i)=>
           
                <SendMessage
                text={ob.text}
                creator={ob.creator}
                
                />
               
                   
                )}
                

                <div className=" my-6 w-fit ml-auto mr-0">
                    <p className="py-4 px-6 w-fit bg-blue-800 text-white rounded-l-3xl rounded-br-3xl rounded-tr">Described by Queenstown House & Garden magazine </p>
                </div>

                <div className="my-6 w-fit ml-auto mr-0">
                    <p className="py-4 px-6 w-fit bg-blue-800 text-white rounded-l-3xl rounded-br-3xl rounded-tr">Described by Queenstown House & Garden magazine </p>
                </div>

                <div className="my-6 w-fit ml-auto mr-0">
                    <p className="py-4 px-6 w-fit bg-blue-800 text-white rounded-l-3xl rounded-br-3xl rounded-tr">Described by Queenstown House & Garden magazine </p>
                </div>

                <div className="my-6 w-fit mr-auto ml-0">
                
                <div className="flex">
                <img src={Ava} width={32} height={32}/>
                       <div className="flex flex-col ml-3" >
                       <h className='text-xl font-medium'>John ⚡️</h>
                        <h className='text-sm text-slate-600'>Заходил в 14:42</h>
                       </div>
                    </div>
                    <p className="  py-4 px-6 rounded-r-3xl rounded-bl-3xl rounded-lr bg-slate-300">Described by Queenstown House & Garden magazine as having 'one of the best views we've ever seen' you </p>
                </div>

            </div>

            <div className="w-full fixed bottom-0 py-7 z-50 bg-white top-auto">
                    <div className="">
                    <input className="w-2/4 text-2xl whitespace-normal h-fit" ref={ref}/>
                <p onClick={()=>sendMyMessage(ref.current.value)} className="bg-stone-400 w-fit px-4 py-2 rounded-full">Отправить</p>
                    </div>
              

            </div>
        </div>
       
        </>
    )
}

export default ChatWindow