import { ScrollView, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../colors/colors';
import Input from '../components/input';
import {CheckingBox} from '../components/checkbox';
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
    return (
      <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
          <ScrollView contentContainerStyle={{
              paddingTop: 50,
              paddingHorizontal: 20,
              height: '100%',
              justifyContent: 'flex-end'
          }}>
              <Text style={{
                  fontWeight: '600',
                  fontSize: '26px',
                  lineHeight: '24px',
                  textAlign: 'center',
                  marginBottom: 72,
                  color: COLORS.black
              }}>
                Create New Account
              </Text>
              <View>
                  {inputs.map(e => (
                      <Input key={e.iconName} marginBottom={20} placeholder={e.placeholder} iconName={e.iconName} password={e.password}/>
                  ))}
                  <AppButton text={'Register'} />
                  <TextwithLine text={'or contine with'}/>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30}}>
                      {sotIcons.map(e => <SotIconWithBtn sotIconName={e.sotIconName} />)}
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
              </View>
          </ScrollView>
      </SafeAreaView>
    )
}
export default RegistrationScreen