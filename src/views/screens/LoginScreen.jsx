import { ScrollView, SafeAreaView, Text, View, FlatList, KeyboardAvoidingView, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { COLORS } from '../../colors/colors';
import Input from '../components/input';
import {CheckingBox} from '../components/checkbox';
import { AppButton, SotIconWithBtn } from '../components/button';
import TextwithLine from '../components/textWithline';

const HEIGHT = Dimensions.get('window').height

const LoginScreen = ({navigation}) => {
    const sotIcons = [
        {sotIconName: 'social-google'},
        {sotIconName: 'social-facebook'},
        {sotIconName: 'bubbles'}
    ]
    return (
      <SafeAreaView style={{backgroundColor: COLORS.white}}>
          <View style={{
              paddingTop: 50,
              paddingHorizontal: 20,
              height: '100%',
              justifyContent: 'flex-end'
          }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{paddingTop: 60, paddingBottom: 40, marginBottom: 'auto'}}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 26,
                        lineHeight: 24,
                        textAlign: 'center',
                        color: COLORS.black
                    }}>
                        Login to Your Account
                    </Text>
                </View> 
            </TouchableWithoutFeedback>
            <KeyboardAvoidingView style={{backgroundColor: 'white'}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <Input marginBottom={20} placeholder={'Email'} iconName={'email-outline'}/>
                    <Input marginBottom={20} placeholder={'Password'} iconName={'lock-outline'} password/>
                    <CheckingBox text={'Remember me'}/>
                    <AppButton text={'Sign up'} onPress={() => navigation.navigate('CountriesScreen')} />
                  <TextwithLine text={'or contine with'}/>
            </KeyboardAvoidingView>
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
                        Dont have an account? 
                      </Text>
                      <Text 
                        style={{
                            color: COLORS.yellow, 
                            marginLeft: 10, 
                            fontSize: 14, 
                            textDecorationLine: 'underline'
                            }}
                        onPress={() => navigation.navigate('RegistrationScreen')}
                        >Register</Text>
                  </View>
        </View>
    </SafeAreaView>
    )
}
export default LoginScreen