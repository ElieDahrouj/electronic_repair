import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import HomeScreen from '../screens/Home';
import CategoryScreen from '../screens/Category'
import CategoryIdScreen from '../screens/Category_id'
import ApplianceIdScreen from '../screens/Appliance_id'
import TutorialIdScreen from '../screens/Tutorial_id'
import EshopCategoryScreen from '../screens/EshopCategory'
import EshopCategoryIdScreen from '../screens/EshopCategoryId'
import FormToPurchaseScreen from "../screens/FormToPurchase"
import EshopIdScreen from '../screens/Eshop_id'
import ShoppingCartScreen from '../screens/ShoppingCart'
import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tutorial_id" component={TutorialIdScreen} />
        </Stack.Navigator>
    );
}

function CategoryStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="Category_id" component={CategoryIdScreen} />
            <Stack.Screen name="Appliance_id" component={ApplianceIdScreen} />
            <Stack.Screen name="Tutorial_id" component={TutorialIdScreen} />
        </Stack.Navigator>
    );
}

function EshopCategoryStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Shop" component={EshopCategoryScreen} />
            <Stack.Screen name="Eshop_category_id" component={EshopCategoryIdScreen} />
            <Stack.Screen name="Eshop_id" component={EshopIdScreen} />
        </Stack.Navigator>
    );
}

function ShoppingCartStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Basket" component={ShoppingCartScreen} />
            <Stack.Screen name="FormToPurchase" component={FormToPurchaseScreen} />
        </Stack.Navigator>
    );
}


const Routes = ({cartItems}) => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = "home";
                        }
                        else if (route.name === 'Category') {
                            iconName = "albums";
                        }
                        else if (route.name === 'Shop') {
                            iconName = "shop";
                            return <Entypo name={iconName} size={size} color={color}/>;
                        }
                        else if (route.name === 'Basket') {
                            iconName = "shopping-cart";
                            return <Entypo name={iconName} size={size} color={color}/>;
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#FF8C00',
                    inactiveTintColor: '#707070',
                    activeBackgroundColor:"#F8F8F8",
                    labelStyle: {
                        paddingBottom: 5,
                    },
                }}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Category" component={CategoryStackScreen} />
                <Tab.Screen name="Shop" component={EshopCategoryStackScreen} />
                {
                    cartItems.length > 0 ?
                        <Tab.Screen name="Basket" component={ShoppingCartStackScreen} options={{ tabBarBadge: cartItems.length}}  />
                        :
                        <Tab.Screen name="Basket" component={ShoppingCartStackScreen} />
                }
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const mapStateToProps = (state) =>{
    return {
        cartItems: state.cartItems,
    }
}
export default connect(mapStateToProps)(Routes);
