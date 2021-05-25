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
                        if (response.status === 200){
                            setState({
                                items: response.data,
                                loading:false
                            })
                        }
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
