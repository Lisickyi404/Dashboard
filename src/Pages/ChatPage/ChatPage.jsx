import CharPrev from "./ChatPrev";
import Ava from './Afshin.png'
import SendMessage from "../../Components/SendMessage";

import React from "react";

function ChatPage(){

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
        console.log(chat)

        sendFriendMessage(text)
        
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
        <div  className="flex w-full">
          <div className="w-4/12">
          <p>Сообщения (<h>12</h>)</p>
            <p>Здесь находятся все ваши переписки</p>
            <input/>
            <div className="w-full">
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                
            </div>
          </div>
          
        <div className="w-8/12">
            <div className="flex justify-between  items-center">
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

            <div>

                {chat.map((ob,i)=>
           
                <SendMessage
                text={ob.text}
                creator={ob.creator}
                
                />
               
                   
                )}

         {/*        <SendMessage text={'Described by Queenstown House & Garden magazine '}/>
                <SendMessage text={'Described by Queenstown House & Garden magazine '}/>
                <SendMessage text={'Desc333333House & Garden magazine '}/>
                <SendMessage text={'111111111own House & Garden magazine '}/> */}
                

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

            <div className="w-full">

                <input className="w-full" ref={ref}/>
                <p onClick={()=>sendMyMessage(ref.current.value)}>Отправить</p>

            </div>
        </div>
       
        </div>
        </>
    )
}


export default ChatPage;