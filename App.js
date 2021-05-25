import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/Home';
import CategoryScreen from './screens/Category'

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
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default App;
