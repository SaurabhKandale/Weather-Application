import { fetch_info } from "../Constants/actionTypes"
import { makeEmpty } from "../Constants/actionTypes"

export const action=(data)=>{
    return {
        type:fetch_info,
    payload:data
    }
}

export const emptyAction=()=>{
    return {
        type:makeEmpty
    }
}