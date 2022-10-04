import Item from "../Item/Item";
import React from "react";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'



function MiniListItems({id}){

    const ref=React.createRef()

    const [listItems,setListItems] = React.useState([])
    const [page,setPage] = React.useState(10)
    const [needLoading,setNeedLoading] = React.useState(true)

    


    React.useEffect(()=>
    {
       if (needLoading){
        
        fetch(`https://6317f2c8f6b281877c5feabe.mockapi.io/boards?page=${1}&limit=${page}`)
    
     
        .then((res)=>res.json())
        .then((res)=>setListItems(res))
        .then(()=>setNeedLoading(false))
       }

    },[needLoading])

    const HorizontalScroll=(ev)=>{

        if (ev.target.scrollWidth-ev.target.scrollLeft<1700){
            setPage(prev=>prev+5)
            setNeedLoading(true)
        }
    
        
    }

    const sliderLeft = (ev) =>{
        var slider = ref.current
        slider.scrollLeft = slider.scrollLeft-500
  
        console.log(ref.current)
    }

    const sliderRight = (ev) =>{
        var slider = ref.current
        slider.scrollLeft = slider.scrollLeft+500

        console.log(ref.current)
    }

    return(
        <div className="w-full flex items-center " >
           
             <MdChevronLeft className="left-0 right-auto absolute cursor-pointer" size={60} onClick={sliderLeft}/> 
          <div id={`slider`} ref={ref} className="w-full flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide" onScroll={HorizontalScroll}>
          {listItems.map((ob,i)=>(
           
                <div className="mx-4"  key={i}>
                     <Item
                     
                 id={ob.id}
                 key={i}
                 title={ob.title}
                 price={ob.price}
                 avatar={ob.avatar}
                 creator={ob.creatorName}
                 time={ob.createdAt}
                 location={ob.location}
            />
                </div>))}
          </div>
            <MdChevronRight size={60} className="right-0 left-auto absolute cursor-pointer" onClick={sliderRight}/>
                
        </div>
    )
}

export default MiniListItems;