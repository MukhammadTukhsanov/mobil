import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text } from "react-native";
import ProfileTitle from "../components/profileTitle";
import { COLORS } from "../../colors/colors";
import Input from "../components/input";
import { AppButton } from "../components/button";

const CreateNewPassScreen = ({navigation}) => {
    return(
        <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
            <View style={style.header}>
                <Icon size={22} name='arrow-left' onPress={() => navigation.navigate('CodeVerificationScreen')} />
            </View>

            <ScrollView contentContainerStyle={{padding: 20}}>
                <ProfileTitle text={'Creat new password'} />
                <View style={style.resetImage}>
                    <Image style={{width: '100%', height: 280}} source={require('../../Photos/createNewPass.png')} />
                </View>
                <View>
                    <Text style={style.confirmSubtitle}>
                        Your new password must be different from previous used password
                    </Text>
                </View>
                <View>
                    <Input placeholder={'Password'} password />
                    <Input placeholder={'Confirm password'} password />
                </View>
                <View style={style.resetSubmit}>
                    <AppButton text={'Next Page'} onPress={() => navigation.navigate('CongratulationsScreen')} />
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

export default CreateNewPassScreen