import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text } from "react-native";
import ProfileTitle from "../components/profileTitle";
import { COLORS } from "../../colors/colors";
import { AppButton } from "../components/button";

const CodeVerificationScreen = ({navigation}) => {
    return(
        <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
            <View style={style.header}>
                <Icon size={22} name='arrow-left' onPress={() => navigation.navigate('ResetPasswordScreen')} />
            </View>

            <ScrollView contentContainerStyle={{padding: 20}}>
                <ProfileTitle text={'OTP Code Verification'} />
                <View style={style.resetImage}>
                    <Image style={{width: '100%', height: 170}} source={require('../../Photos/confirm.png')} />
                </View>
                <View>
                    <Text style={style.confirmTitle}>
                        Verification code
                    </Text>
                    <Text style={style.confirmSubtitle}>
                        We have sent the code verification to Your Mobile Number
                    </Text>
                    <Text style={style.confirmPhone}>+998 94 124 22 02</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={style.code}>
                        <Text style={style.codeStyle}>2</Text>
                    </View>
                    <View style={style.code}>
                        <Text style={style.codeStyle}>5</Text>
                    </View>
                    <View style={style.code}>
                        <Text style={style.codeStyle}>8</Text>
                    </View>
                    <View style={style.code}>
                        <Text style={style.codeStyle}>0</Text>
                    </View>
                </View>
                <View style={style.resetSubmit}>
                    <AppButton text={'Submit'} onPress={() => navigation.navigate('CreateNewPassScreen')} />
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
        height: 220,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resetSubmit: {
        paddingVertical: 20
    },
    confirmTitle: {
        fontWeight: '600',
        fontSize: 26,
        lineHeight: 32,
        textAlign: 'center',
        color: COLORS.black
    },
    confirmSubtitle: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'center',
        color: '#08203A',
        marginTop: 20   
    },
    confirmPhone: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 32,
        color: COLORS.black,
        fontWeight: '700'
    },
    code: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightSecondary,
        borderRadius: 10,
        marginVertical: 20,
        shadowColor: COLORS.lightSecondary,
        shadowOpacity: 1,
        shadowRadius: 10
    },
    codeStyle: {
        fontSize: 16,
        fontWeight: '700'
    }
})

export default CodeVerificationScreen