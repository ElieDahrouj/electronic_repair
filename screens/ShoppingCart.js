import React, {useEffect} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import Header from '../components/Header';
import {categoryCss, shoppingCartCss} from '../assets/css/appStyle';
import emptyCart from "../assets/pictures/emptyCart.png"
import {connect} from 'react-redux';

const ShoppingCartScreen = ({cartItems, navigation}) => {
    useEffect(() =>{
        navigation.setOptions({
            tabBarBadge: cartItems.length
        })
    },[cartItems,navigation])

    return (
        <View style={categoryCss.categoryView}>
            <Header/>

            <ScrollView style={shoppingCartCss.mb}>
                <View style={[shoppingCartCss.scrollViewCCC]}>
                    <Image source={emptyCart} />
                    <View style={shoppingCartCss.scrollViewCCC}>
                        <Text style={shoppingCartCss.firstTxt}>Votre panier est vide !</Text>
                        <Text style={shoppingCartCss.secondTxt}>Commandez des articles dans la boutique !</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const mapStateToProps = (state) =>{
    return {
        cartItems: state,
    }
}

export default connect(mapStateToProps,null)(ShoppingCartScreen);
