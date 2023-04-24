import { Increment,Decrement } from "../actions/IncType";
import { useState,useReducer } from "react";
const initialState=10;

export const Inc_Dec = (state=initialState,action)=>{
    // const [initialState,setinitialState] = useState(0);

                switch(action.type)
                {
                    case "INCREMENT":
                        return (state + 1)
                    case "DECREMENT":
                        return (state - 1)
                    default: return state;
                }
            }