import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=USD&to=EUR`)
        // after chaining you can use chaining using .then()
        .then((res) => res.json())
        .then((res) => {
            const data = Object.keys(data);
            setData(data);
        })   

    },[currency])
    console.log(data);
    return data;
    }

export default useCurrencyInfo;