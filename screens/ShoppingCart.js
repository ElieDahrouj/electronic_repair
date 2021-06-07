import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import Header from '../components/Header';
import {categoryCss, homeCss, shoppingCartCss} from '../assets/css/appStyle';
import emptyCart from "../assets/pictures/emptyCart.png"
const ShoppingCartScreen = () => {

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

export default ShoppingCartScreen;
