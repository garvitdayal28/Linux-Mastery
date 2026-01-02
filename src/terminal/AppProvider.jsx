import { createContext, useLayoutEffect } from "react";
import { useActorRef, useSelector } from "@xstate/react";
import { DataContext } from "./DataProvider.jsx";
import { SOCKET_URL } from "../lib/constans.js";
export const AppContext = createContext();

export default function AppProvider({ children }) {

    const dataContext = useActorRef(DataContext);
    const data = useSelector(DataContext,(state)=> state.context);
    const setData = (keyValue) => dataContext.send({type:'SET', obj:keyValue})
  
    useLayoutEffect(()=>{
        if(data.webSocket===null){
            setData({webSocket:SOCKET_URL})
        }

        if(data.webSocket !=null && data.terminal != null){

        }
    },[data.webSocket, data.terminal,setData])

  return (
    <AppContext.Provider
      value={
        {
          data,
          setData,
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
}
