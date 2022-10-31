import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeActiveIcon from "../../Photos/svg/home-active.svg"
import MapActiveIcon from "../../Photos/svg/map-active.svg"
import HomeIcon from "../../Photos/svg/home.svg"
import MapIcon from "../../Photos/svg/map.svg"
import LovelyActiveIcon from "../../Photos/svg/lovely-active.svg"
import LovelyIcon from "../../Photos/svg/lovely.svg"
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import LovelyScreen from "../screens/LovelyScreen";
import { View } from "react-native";
import { COLORS } from "../../colors/colors";
import NewMathScreen from "../screens/NewMatchScreen";
import { createStackNavigator } from "@react-navigation/stack";


const TabScreens = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{tabBarLabelStyle: {display: 'none'}}} >
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false, tabBarIcon: ({focused}) => focused ? <HomeActiveIcon />: <HomeIcon />}}/>
            {/* <Tab.Screen name="LovelyScreens" component={LovelyPages} options={{tabBarIcon: ({focused}) => focused ? <LovelyActiveIcon />: <LovelyIcon />}} /> */}
            <Tab.Screen name="MapScreen" component={MapScreen} options={{headerShown: false, tabBarIcon: ({focused}) => focused ? <MapActiveIcon />: <MapIcon />}}/>
            <Tab.Screen name="LovelyScreen" component={LovelyScreen} options={{headerTitleAlign: 'left', headerShadowVisible: false,
            headerRight: () => (
                <View style={{flexDirection: 'row', marginRight: 20}}>
                    <Icon name={'magnify'} color={COLORS.black} size={24} style={{marginHorizontal: 10}} />
                    <Icon name={'tune-variant'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                </View>
            ), 
            headerTitle: 'Math', headerTitleStyle: {fontSize: 26}}}/>
            <Tab.Screen name='NewMathScreen' component={NewMathScreen} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

export default TabScreens