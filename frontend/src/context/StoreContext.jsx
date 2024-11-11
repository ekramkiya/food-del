import { createContext } from "react";



export const StoreContext = createContext(null)


const StoreContextProvider = (props)=>{
   const contextValue ={

   }

   return(
    <StoreContext.Provider>
        {props.childern }
    </StoreContext.Provider>
   )


}

export default StoreContextProvider;