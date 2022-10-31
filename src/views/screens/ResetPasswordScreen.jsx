import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView, ScrollView, StyleSheet, View, Image, ImageBackground, Text, Pressable } from "react-native";
import ProfileTitle from "../components/profileTitle";
import { COLORS } from "../../colors/colors";
import Input from "../components/input";
import { AppButton } from "../components/button";

const ResetPasswordScreen = ({navigation}) => {
    return(
        <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
            <View style={style.header}>
                <Icon size={22} name='arrow-left' />
            </View>

            <ScrollView contentContainerStyle={{padding: 20}}>
                <ProfileTitle text={'Reset password'} />
                <View style={style.resetImage}>
                    <Image style={{height: 290 }} source={require('../../Photos/resetPassword.png')} />
                </View>
                <View>
                    <Text style={style.resetText}>
                        Enter the email or number associated with your account and we’ll send confirmationn number to reset  your password.
                    </Text>
                </View>
                <View>
                    <Input placeholder={'Email / Number'} iconName={'email-outline'} />
                </View>
                <View style={style.resetSubmit}>
                    <AppButton text={'Submit'} onPress={() => navigation.navigate('CodeVerificationScreen')} />
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
        height: 350,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resetText: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 25,
        color: '#08203A'
    },
    resetSubmit: {
        paddingVertical: 20
    }
})

export default ResetPasswordScreen