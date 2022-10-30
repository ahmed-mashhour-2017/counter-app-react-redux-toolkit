//import  { useState } from "react";

import { useSelector ,useDispatch} from "react-redux";
 import { useEffect, useState } from 'react';
import { inc_action,dec_action, dec_action_by_val, inc_action_by_val } from "../redux_toolkit/reducers/counter_slice";
 
 
   
export default function Counter(){
    // const [counter,dispatchCounter]=useState(0);
    const [value,setValue]=useState(0);
    useEffect(()=>{
      console.log(value);
        
    })
    
    const {count}=useSelector((state)=>state.counter );
    console.log(count);
    const dispatch_action=useDispatch();
    const handelInc=()=>{
     
        dispatch_action(inc_action())
    }
    const handleDec=()=>{
   
        dispatch_action(dec_action())
    }
    const handelInc_by_val=()=>{
        dispatch_action(inc_action_by_val(value))
    }
    const handleDec_by_val=()=>{
        dispatch_action(dec_action_by_val(value))

    }
    return(
        <>
        <p>{count}</p>
        <button onClick={handelInc}>+</button>
        <span> -----------</span>
        <button onClick={handleDec}>-</button>
        <br/>
         value: <input value={value}  onInput={(e)=>{
            isFinite( e.target.value)&&!(isNaN( e.target.value))?setValue(parseInt(e.target.value) ):setValue(  value);
            }} />
               <br/>
         <button onClick={handelInc_by_val}>inc by value</button>
        <span> -----------</span>
        <button onClick={handleDec_by_val}>dec by value</button>
        </>
    );
}