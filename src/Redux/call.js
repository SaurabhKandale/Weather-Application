import axios from "axios";
import { action } from "./Actions/Actions";

const callApi=(name)=>{
    return (dispatch)=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d24e64da9219d237c630372865373db7`).then(
            (response)=>{
                dispatch(action(response.data));
            }
        ).catch(
            (err)=>{console.log(err.message)}
        );
    }
}

export default callApi;