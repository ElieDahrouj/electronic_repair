import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {
    categoryIdCss,
    eshopCategoryIdCss,
    eshopIdCss,
    formToPurchaseCss,
    shoppingCartCss,
    recapOrderCss
} from '../assets/css/appStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

let reg = new RegExp('(.+)([0-9]{4}$)')

const RecapOrder = ({cartItems,totalPrice, navigation,route}) => {
    const { information } = route.params;

    return (
        <View style={formToPurchaseCss.purchaseView}>
            <ScrollView style={recapOrderCss.mb70}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="#FF8C00" />
                </TouchableOpacity>

                <Text style={formToPurchaseCss.title}>Recapitulatif de la commande </Text>
                <View style={recapOrderCss.viewOrder}>
                    {
                        cartItems.map((item, index) => (
                            <View key={index} style={recapOrderCss.viewCard} >
                                <View style={[shoppingCartCss.replacementTutorialView]}>
                                    <View>
                                        <Image style={shoppingCartCss.imageReplacementTutorial}
                                               source={{uri: item.picture}}/>
                                    </View>

                                    <View style={recapOrderCss.card}>
                                        <Text style={shoppingCartCss.textTitle}>{item.name}</Text>

                                        <View style={categoryIdCss.my}>
                                            <Text style={eshopCategoryIdCss.textPrice}>Quantité: 1</Text>
                                            <Text style={eshopCategoryIdCss.textPrice}>{item.price} €</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>

                <Text style={formToPurchaseCss.title}>Adresse de livraison</Text>

                <Text style={[recapOrderCss.fs16,recapOrderCss.txtCenter]}>{information.name} {information.nickname}</Text>
                <Text style={[recapOrderCss.fs16,recapOrderCss.txtCenter]}>{information.address}</Text>
                <Text style={[recapOrderCss.fs16,recapOrderCss.txtCenter]}>{information.city}, {information.postalCode}</Text>
                <Text style={[recapOrderCss.fs16,recapOrderCss.txtCenter]}>France</Text>

                <Text style={formToPurchaseCss.title}>Mode de paiement </Text>

                <Text style={[recapOrderCss.fs16,recapOrderCss.txtCenter]}>{information.creditCart.values.type} | Derniers chiffres : {information.creditCart.values.number.match(reg)[2]}</Text>
            </ScrollView>

            {cartItems.length !== 0 ?
                <View style={shoppingCartCss.displayPrice}>
                    <Text style={{fontSize: 20}}>Total:</Text>
                    <Text style={{fontSize: 20}}>{totalPrice} €</Text>
                </View>
                : null
            }

            <TouchableOpacity activeOpacity={0.8} style={[formToPurchaseCss.btnValid]} onPress={() =>console.log('hehe')}>
                <Text style={eshopIdCss.txtBtn}>Validez la commande et payez</Text>
            </TouchableOpacity>
        </View>
    )
};

const mapStateToProps = (state) =>{
    return {
        cartItems: state.cartItems,
        totalPrice:state.totalPrice
    }
}

const mapDispatchToProps =  (dispatch) =>{
    return {
        removeItem:(product) => dispatch({type:'REMOVE_FROM_CART',payload:product})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RecapOrder);
