import React from "react";
import { Dimensions, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../colors/colors";
import UserAvatar from "../components/avatar";
import { AppButton } from "../components/button";
import CountrCode from "../components/countryCode";
import Input from "../components/input";
import ProfileTitle from "../components/profileTitle";

const FillProfileScreen = ({navigation}) => {
    const WIDTH = Dimensions.get('window').width
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding': 'height'}>
            <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
                <ScrollView contentContainerStyle={{padding: 20}}>
                    <ProfileTitle text={'Fill your profile'} />
                    <View style={{marginVertical: 30}}>
                        <UserAvatar />
                    </View>
                    <Input placeholder={'Full Name'} iconVisibility={'none'}/>
                    <Input placeholder={'Nickname'} iconVisibility={'none'}/>
                    {/* <DateAndTimePicker /> */}
                    <Input placeholder={'Email'} iconName={'email-outline'} iconVisibility={'none'} iconRight/>
                    <View style={{width: '100%', flexDirection: 'row', alignItems: 'flex-end'}}>
                        <CountrCode />
                        <Input placeholder={'94 124 22 02'} width={WIDTH - 150} iconVisibility={'none'} />
                    </View>
                    <Input placeholder={'Occupation'} iconVisibility={'none'} />
                    <View style={{marginTop: 20}}>
                        <AppButton text={'Next'} onPress={() => navigation.navigate('AddPhotosScreen')} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    genderBox: {
        height: 45,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderBottomWidth: 0.5,
        alignItems: 'center'
    },
    gender: {
        zIndex: 99,
        borderWidth: 0,
        height: 45,
        backgroundColor: COLORS.white,
    }
})

export default FillProfileScreen