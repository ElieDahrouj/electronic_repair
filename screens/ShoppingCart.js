import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import {
    categoryCss,
    categoryIdCss,
    eshopCategoryIdCss, eshopIdCss,
    homeCss,
    shoppingCartCss,
} from '../assets/css/appStyle';
import emptyCart from "../assets/pictures/emptyCart.png"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';

const ShoppingCartScreen = ({cartItems, removeItem,totalPrice, navigation,decrementPrice}) => {
    console.log(cartItems)
    return (
        <View style={categoryCss.categoryView}>
            <Header/>

            <Text style={homeCss.title}>Mon panier</Text>

            <ScrollView>
                <View style={[shoppingCartCss.scrollViewCCC]}>
                    {
                        cartItems.length === 0 ?
                            <View>
                                <Image source={emptyCart}/>
                                <View style={shoppingCartCss.scrollViewCCC}>
                                    <Text style={shoppingCartCss.firstTxt}>Votre panier est vide !</Text>
                                    <Text style={shoppingCartCss.secondTxt}>Commandez des articles dans la boutique
                                        !</Text>
                                </View>
                            </View>
                            :
                            cartItems.map((item, index) => (
                                <View style={shoppingCartCss.containerAction} key={index}>
                                    <View style={[shoppingCartCss.replacementTutorialView]}>
                                        <View>
                                            <Image style={shoppingCartCss.imageReplacementTutorial}
                                                   source={{uri: item.cart.picture}}/>
                                        </View>

                                        <View style={shoppingCartCss.viewTextAppliance}>
                                            <Text style={shoppingCartCss.textTitle}>{item.cart.name}</Text>

                                            <View style={categoryIdCss.my}>
                                                <Text style={eshopCategoryIdCss.textPrice}>Quantité: 1</Text>
                                                <Text style={eshopCategoryIdCss.textPrice}>{item.cart.price} €</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <TouchableHighlight style={shoppingCartCss.deleteBox} underlayColor={"#E76D6D"} onPress={() =>[removeItem(item.uid),decrementPrice(item.cart.price)]}>
                                        <FontAwesome5 name="trash-alt" size={25} color="#ffffff"/>
                                    </TouchableHighlight>
                                </View>
                            ))
                    }
                </View>
            </ScrollView>

            {cartItems.length !== 0 ?
                <View style={shoppingCartCss.displayPrice}>
                    <Text style={{fontSize: 20}}>Total:</Text>
                    <Text style={{fontSize: 20}}>{totalPrice} €</Text>
                </View>
                : null
            }

            {cartItems.length !== 0 ?
                <TouchableOpacity activeOpacity={0.8} style={[eshopIdCss.btnAdd]} onPress={() => {navigation.navigate('FormToPurchase')}}>
                    <Text style={eshopIdCss.txtBtn}>Finalisez la commande </Text>
                </TouchableOpacity>
                : null
            }
        </View>
    );
}

const mapStateToProps = (state) =>{
    return {
        cartItems: state.cartItems,
        totalPrice:state.totalPrice
    }
}

const mapDispatchToProps =  (dispatch) =>{
    return {
        removeItem:(product) => dispatch({type:'REMOVE_FROM_CART',payload:product}),
        decrementPrice:(product) => dispatch({type:'DECREMENT', payload:product})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartScreen);
