import React from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import callApi from "../Redux/call";
import { emptyAction } from "../Redux/Actions/Actions";
import clouds from "../Images/clouds.png"
import sunny from "../Images/day.png"
import clear from "../Images/good-weather.png"
import haze from "../Images/haze.png"
import rainy from "../Images/rainy.png"
import smoke from "../Images/smoke.png"
import drizzle from "../Images/drizzle.png"
import snow from "../Images/snow.png"
const DisplayData = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        props.callApi(props.cityName);
        return () => {
            dispatch(emptyAction())
        };
    }, [props.cityName])

    if (props.userData && props.userData.city.main) {

        var link=clear;
        switch(props.userData.city.weather[0].main)
        {
            case "Clouds":link=clouds;break;
            case "Sunny":link=sunny;break;
            case "Haze":link=haze;break;
            case "Rain":link=rainy;break;
            case "Smoke":link=smoke;break;
            case "Drizzle":link=drizzle;break;
            case "Snow":link=snow;break;

            default : link=clear;
        }
        

        return (
            <div className="flex justify-around items-center flex-col md:flex-row ">
                <div>
                    <img src={link} alt={props.userData.city.weather[0].main} className="mt-5 md:mt-0 h-36 md:h-56 object-fit" />
                </div>
                <div className=" py-8 md:py-0 font-bold mt-2 md:mt-0">
                    <span className="block text-4xl md:text-6xl py-6">{props.userData.city.name}</span>
                    <span className="block text-xl">{props.userData.city.weather[0].main}</span>
                    <span className="block text-xl py-2"><span className="px-2">Min. {(props.userData.city.main.temp_min - 273.15).toFixed(2)}&#176;C</span> || <span className="px-2">Max. {(props.userData.city.main.temp_max - 273.15).toFixed(2)}&#176;C</span></span>
                </div>
            </div>
        )

    }
    else {
        return (
            <div>
                <h1>...Loading</h1>
            </div>
        )
    }


}

const mapStateToProps = (state, props) => {
    return {
        userData: state
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        callApi: () => dispatch(callApi(props.cityName))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayData);