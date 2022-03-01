import React from "react";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import callApi from "../Redux/call";
import { emptyAction } from "../Redux/Actions/Actions";

const DisplayData = (props) => {

    console.log(props.cityName);
    const dispatch = useDispatch();

    useEffect(() => {
        props.callApi(props.cityName);
        return () => {
            dispatch(emptyAction())
        };
    }, [props.cityName])

    if (props.userData && props.userData.city.main) {

        var link="https://cdn-icons.flaticon.com/png/512/2280/premium/2280705.png?token=exp=1646156146~hmac=3b7b10f009ddc0b8f22b44692bc5a95a"
        if(props.userData.city.weather[0].main=="Clouds")
        {
            link="https://cdn-icons-png.flaticon.com/512/414/414825.png";
        }
        if(props.userData.city.weather[0].main=="Haze")
        {
            link="https://cdn-icons-png.flaticon.com/512/1779/1779807.png";
        }
        if(props.userData.city.weather[0].main=="Rain")
        {
            link="https://cdn-icons.flaticon.com/png/512/2337/premium/2337478.png?token=exp=1646156795~hmac=98241266b4132a7ae1b3be62da5a861c";
        }
        if(props.userData.city.weather[0].main=="Smoke")
        {
            link="https://cdn-icons.flaticon.com/png/512/4429/premium/4429947.png?token=exp=1646157503~hmac=dac4ea8bfab337565ba082cebbbb832f";
        }

        return (
            <div className="flex justify-around items-center flex-col md:flex-row ">
                <div>
                    <img src={link} alt="clouds" className="h-24 md:h-56 object-fit" />
                </div>
                <div className="font-bold mt-5 md:mt-0">
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