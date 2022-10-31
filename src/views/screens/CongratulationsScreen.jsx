import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView, ScrollView, StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import ProfileTitle from "../components/profileTitle";
import { COLORS } from "../../colors/colors";
import { AppButton } from "../components/button";

const CongratulationsScreen = ({navigation}) => {
    return(
        <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
            <View style={style.header}>
                <Icon size={22} name='arrow-left' onPress={() => navigation.navigate('CodeVerificationScreen')} />
            </View>

            <ScrollView contentContainerStyle={{padding: 20}}>
                <ProfileTitle text={'Congratulations !'} />
                <View style={style.resetImage}>
                    <Image style={{width: '100%', height: 280}} source={require('../../Photos/congratulations.png')} />
                </View>
                <View>
                    <Text style={style.confirmSubtitle}>
                        Your account is ready to use. Let’s go to main page and enter with your new password
                    </Text>
                </View>
                <View style={style.resetSubmit}>
                    <AppButton text={'Main page'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    resetImage: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resetSubmit: {
        paddingVertical: 20
    },
    confirmSubtitle: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'center',
        color: '#08203A',
        marginTop: 20   
    },
    codeStyle: {
        fontSize: 16,
        fontWeight: '700'
    }
})

export default CongratulationsScreen