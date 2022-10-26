import { configureStore } from "@reduxjs/toolkit";

import accountsData from './Account.js'
import likes from "./likes.js";



export const store = configureStore({
    reducer: {
   
        account:accountsData,
        likes:likes
    
    },

});
