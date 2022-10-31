import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../colors/colors";
import { NewMath, YourMath } from "../components/math";
import { UserInfoHeader } from "../components/userInfoHeader";

const MathScreen = ({navigation}) => {
    const yourMatchUsers = [
        {
            img: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
            name: 'Feride',
            year: '24'
        },
        {
            img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Feride',
            year: '24'
        },
        {
            img: 'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            name: 'Feride',
            year: '24'
        }
    ]
    return (
        <SafeAreaView>
                <View style={{padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name={'arrow-left'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                        <Text style={{fontSize: 26, fontWeight: '600'}}>Match</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                        <Icon name={'magnify'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                        <Icon onPress={() => handleSnapPress(0)} name={'tune-variant'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                    </View>
                </View>
            <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 20, fontWeight:'bold', color: COLORS.black}}>New Match</Text>
                    <Text style={{color: COLORS.yellow, fontSize: 16, fontWeight: '500'}} onPress={() => navigation.push('NewMathScreen')}>See All</Text>
                </View>
                <NewMath />
                
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 20, fontWeight:'bold', color: COLORS.black}}>Your Match</Text>
                    <Text style={{color: COLORS.yellow, fontSize: 16, fontWeight: '500'}}>See All</Text>
                </View>
                <YourMath />
            </ScrollView>
        </SafeAreaView>
    )
}
export default MathScreen