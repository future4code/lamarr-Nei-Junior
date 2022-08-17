import React from "react";
import axios from "axios";
import { useState, useEffect} from 'react'

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [erro, setErro] = useState(undefined)

    useEffect(() => {
        setIsLoading(true);
        axios.get(url).then(response => {
            setIsLoading(false)
            setData(response.data)
        }).catch(error => {
            setIsLoading(false)
            setErro(error)
        })
    }, [])

    return [data, isLoading, erro];
}

export default useRequestData;
