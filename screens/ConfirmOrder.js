import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
    eshopIdCss,
    formToPurchaseCss,
    confirmOderCss
} from '../assets/css/appStyle';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

const ConfirmOrder = ({navigation,emptyCart,reset}) => {

    useEffect(() =>{
        emptyCart()
        reset()
    },[])

    return (
        <View style={[formToPurchaseCss.purchaseView,confirmOderCss.flex]}>

            <LottieView style={{height:200}} source={require('../assets/animation/66824-check.json')} autoPlay loop={false} />

            <View style={confirmOderCss.viewTxt}>
                <Text style={confirmOderCss.firstTxt}>Achat Confirmé</Text>

                <Text style={confirmOderCss.firstTxt}>Nous espérons vous revoir très bientôt !</Text>
            </View>


            <TouchableOpacity activeOpacity={0.8} style={[formToPurchaseCss.btnValid]} onPress={() => navigation.navigate('Shop')}>
                <Text style={eshopIdCss.txtBtn}>Retour à la boutique</Text>
            </TouchableOpacity>
        </View>
    )
};

const mapDispatchToProps =  (dispatch) =>{
    return {
        emptyCart:() => dispatch({type:'EMPTY_CART'}),
        reset:()=>dispatch({type:'RESET'})
    }
}

export default connect(null,mapDispatchToProps)(ConfirmOrder);
