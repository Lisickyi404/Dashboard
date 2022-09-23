import Category from "./Category"
import CateogryPage from "../../Pages/CategoryPage/CategoryPage";
import { catogories } from "../../data";



function CategoriesList(){


  
    return(
        <div className="mx-auto w-full flex flex-wrap">

            { catogories.map((ob,i)=>
            
            
            <div key={i}>
                 <Category 
            categoryName={ob.title}
            tags={ob.categories}
            title={ob.title}
            linkName={ob.linkName}
          
          
            
            
            />
            </div>
            
            )
    
             
            
           
            }
            <div>
      
            </div>
            
           
        </div>
    )
}
export default CategoriesList;
