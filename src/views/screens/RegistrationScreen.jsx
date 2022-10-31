import { SafeAreaView, Text, View, FlatList, Dimensions, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { COLORS } from '../../colors/colors';
import Input from '../components/input';
import { AppButton, SotIconWithBtn } from '../components/button';
import TextwithLine from '../components/textWithline';

const RegistrationScreen = ({navigation}) => {
    const inputs = [
        {
            placeholder: 'Enter your email address',
            iconName: 'email-outline',
            password: false
        },
        {
            placeholder: 'Enter your full name',
            iconName: 'account-outline',
            password: false
        },
        {
            placeholder: 'Enter your phone no',
            iconName: 'phone-outline',
            password: false
        },
        {
            placeholder: 'Enter your password',
            iconName: 'lock-outline',
            password: true
        }
    ]
    const sotIcons = [
        {sotIconName: 'social-google'},
        {sotIconName: 'social-facebook'},
        {sotIconName: 'bubbles'}
    ]
    const HEIGHT = Dimensions.get('window').height
    return (
        <SafeAreaView style={{backgroundColor: COLORS.white, height: HEIGHT}}>
                <View style={{marginBottom: 'auto'}} >
                    <Text style={{fontWeight: '600', fontSize: 26, lineHeight: 24, paddingTop: 80,
                        textAlign: 'center',
                        color: COLORS.black,
                    }}>
                        Login to Your Account
                    </Text>
                </View>
                <KeyboardAvoidingView style={{paddingHorizontal: 20}} behavior={Platform.OS === 'ios' ? 'padding': 'height'}>
                    <FlatList
                        data={inputs}
                        scrollEnabled={false}
                        keyExtractor={item => item.iconName}
                        renderItem={({item}) => (
                            <Input marginBottom={10} placeholder={item.placeholder} iconName={item.iconName} password={item.password}/>
                        )}
                    />
                    <AppButton text={'Register'} />
                </KeyboardAvoidingView>
                <TextwithLine text={'or contine with'}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30}}>
                    <FlatList
                        contentContainerStyle={{justifyContent: 'space-between',width:'100%'}}
                        data={sotIcons}
                        keyExtractor={item => item.sotIconName}
                        horizontal
                        renderItem={({item}) => (
                            <SotIconWithBtn sotIconName={item.sotIconName} />
                        )}
                    />
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 49, marginBottom: 20}}>
                    <Text style={{fontSize: 14}}>
                        Already have an account? 
                    </Text>
                    <Text 
                        style={{
                            color: COLORS.yellow, 
                            marginLeft: 10, 
                            fontSize: 14, 
                            textDecorationLine: 'underline'
                            }}
                        onPress={() => navigation.navigate('LoginScreen')}    
                        >Sign in</Text>
                </View>
        </SafeAreaView>
    )
}
export default RegistrationScreen