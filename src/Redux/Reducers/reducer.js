import { fetch_info, makeEmpty } from "../Constants/actionTypes";

const initialState={
    city:{}
};

const reducer=(state=initialState,actions)=>{
    switch (actions.type){
        case fetch_info:
            return{
                ...state,city:actions.payload
            }
        case makeEmpty:
            return{
                ...state,city:{}
            } 
         
        default: return state;    
    }
}

export default reducer;