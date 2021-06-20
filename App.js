import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-redux';
import {store} from './store'
import Routes from "./router/Routes"


const App = () => {

    useEffect(() => {
        setTimeout(() =>{
            SplashScreen.hide();
        },800)
    });

    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
}
export default App;
