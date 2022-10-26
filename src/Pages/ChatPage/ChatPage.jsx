import CharPrev from "./ChatPrev";

import ChatWindow from "./ChatWindow";

import React from "react";

import { useLocation } from "react-router-dom";

function ChatPage(){
    

    let data = useLocation()
    console.log(data)

  
   




 

    return(
        <>
        <div  className="flex w-full h-screen overflow-y-hidden container justify-between mx-auto"  >
          <div className="w-1/4 h-4/6 relative overflow-y-scroll scroll scroll-smooth scrollbar-hide pt-10">
          <p className="text-5xl w-fit mx-auto">Сообщения <h className="text-gray-400">(12)</h></p>
            <p className="mx-auto w-fit">Здесь находятся все ваши переписки</p>
            <input/>
            <div className="w-full z-10">
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                <CharPrev/>
                
            </div> 
          </div>

        
          
      <ChatWindow className='w-4/5'/>
        </div>
        </>
    )
}


export default ChatPage;