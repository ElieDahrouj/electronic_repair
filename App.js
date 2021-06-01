import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import HomeScreen from './screens/Home';
import CategoryScreen from './screens/Category'
import EshopCategoryScreen from './screens/EshopCategory'
import ShoppingCartScreen from './screens/ShoppingCart'


const Tab = createBottomTabNavigator();

const App = () => {

    useEffect(() => {
        setTimeout(() =>{
            SplashScreen.hide();
        },800)
    });

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
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Category" component={CategoryScreen} />
                <Tab.Screen name="Shop" component={EshopCategoryScreen} />
                <Tab.Screen name="Basket" component={ShoppingCartScreen} options={{ tabBarBadge: 0 }}  />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default App;
