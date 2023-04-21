import { Increment,Decrement } from "../actions/IncType";
const initialState = 0;
export const Inc_Dec = (state=initialState,action)=>{
                switch(action.type)
                {
                    case "INCREMENT":
                        return state+1
                    case "DECREMENT":
                        return state-1
                    default: return state;
                }
            }