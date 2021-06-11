import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const useFetchGet = (url) => {
    const [state,setState] = useState({
        loading:true,
        items: []
    })

    useEffect(() =>{
        (async function (){
            try {
                await axios.get(url)
                    .then(response =>{
                        setTimeout(() =>{
                            if (response.status === 200){
                                setState({
                                    items: response.data,
                                    loading:false
                                })
                            }
                        }, 1000)
                    })
            }
            catch(error) {
                console.log(error);
            }
        })()
    },[])

    return [
        state.items,
        state.loading
    ]
}

export const useFetchGetId = (url,id) => {
    const [state,setState] = useState({
        loading:true,
        items: []
    })

    useEffect(() =>{
        (async function (){
            try {
                await axios.get(url+id)
                    .then(response =>{
                        setTimeout(() =>{
                            if (response.status === 200){
                                setState({
                                    items: response.data,
                                    loading:false
                                })
                            }
                        }, 1000)
                    })
            }
            catch(error) {
                console.log(error);
            }
        })()
    },[])

    return [
        state.items,
        state.loading
    ]
}
