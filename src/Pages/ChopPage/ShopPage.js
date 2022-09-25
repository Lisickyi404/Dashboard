import Search from "../../Components/Search/Search";
import Item from "../../Components/Item/Item";

import MiniListItems from "../../Components/MiniLIstItems/MiniListItem.js";
import Ava from './Afshin.png'


function ShopPage(){
    return(
        <div className="w-full">
            <div className="mx-auto w-fit">
                <p>Все магазины (132)</p>
            </div>

            <Search/>

            <div>
                <ul>
                    <li>
                        <div className="pb-12 border-b-2">
                            <div className="flex justify-between  items-center ">
                                <div className="flex py-12">
                                <img src={Ava} width={64} height={64}/>
                                <div className="ml-5    ">
                                <p className="text-3xl font-medium">Tech Pro</p>
                                <div className=" flex items-center mt-1">
                                    <p className="text-sm text-base">4.9</p>
                                    <p className="text-gray-500">(84 отзыва)</p>
                                </div>
                                </div>
                                </div>

                                <span className="py-6 px-9 bg-blue-700 rounded-lg text-white cursor-pointer">
                                Написать
                                </span>
                            </div>  
                            <MiniListItems/>
                            <p className="text-white mx-auto w-fit mt-7 px-8 py-5 bg-black rounded-b-full rounded-t-full cursor-pointer">Cмотреть больше</p>
                        </div>

                     
                   


                    </li>
                </ul>
            </div>


        </div>
    )
}

export default ShopPage;