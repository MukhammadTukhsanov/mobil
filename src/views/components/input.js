import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from "../../colors/colors";

const Input = ({label, iconName, error, password, marginBottom, onFocus= () => {}, ...props}) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [onFocusColor, setOnFocusColor] = React.useState(COLORS.black)
    const [hidePassword, setHidePassword] = React.useState(password)
    return (
        <View style={{marginBottom: marginBottom}}>
            <Text>{label}</Text>
            <View style={{
                            height: 55,
                            backgroundColor: COLORS.white,
                            flexDirection: 'row',
                            paddingHorizontal: 15,
                            borderBottomWidth: 0.5,
                            borderBottomColor: onFocusColor,
                            alignItems: 'center'
                }} >
                <Icon name={iconName} style={{fontSize: 22, color: onFocusColor, marginRight: 10}}/>
                <TextInput 
                    secureTextEntry={hidePassword}
                    autoCorrect={false} 
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                        setOnFocusColor(COLORS.yellow)
                    }} 
                    onBlur={() => {
                        setIsFocused(false)
                        setOnFocusColor(COLORS.black)
                    }}
                    {...props} 
                    style={{color: COLORS.secondary, fontSize: 20, width: 'auto' }} />
                    {password && 
                        <Icon 
                            onPress={() => setHidePassword(!hidePassword)}
                            name={hidePassword ? "eye-outline" : "eye-off-outline"}
                            style={{marginLeft: 'auto', fontSize: 22, color: onFocusColor}} />
                    }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        height: 55,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderBottomWidth: 0.5,
        alignItems: 'center',
    }
})

export default Input