import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { COLORS } from "../../colors/colors";
import { NewMath, YourMath } from "../components/math";

const LovelyScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
            <ScrollView contentContainerStyle={{paddingLeft: 20, marginTop: 10}}>
                <View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 20, fontWeight:'bold', color: COLORS.black}}>New Match</Text>
                    <Text style={{color: COLORS.yellow, fontSize: 16, fontWeight: '500'}}>See All</Text>
                </View>
                <NewMath />
                <View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 20, fontWeight:'bold', color: COLORS.black}}>Your Match</Text>
                    <Text style={{color: COLORS.yellow, fontSize: 16, fontWeight: '500'}}>See All</Text>
                </View>
                <YourMath />
            </ScrollView>
        </SafeAreaView>
    )
}
export default LovelyScreen