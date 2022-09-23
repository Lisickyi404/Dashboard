import { configureStore } from "@reduxjs/toolkit";

import accountsData from './Account.js'



export const store = configureStore({
    reducer: {
   
        account:accountsData
    
    },

});
