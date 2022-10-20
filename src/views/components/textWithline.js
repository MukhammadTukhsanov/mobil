import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../colors/colors";

const TextwithLine = ({text}) => (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <View
            style={style.orText}
        />
        <Text style={style.loginTextWithLine}>
            {text}
        </Text>
    </View>
)

const style = StyleSheet.create({
    loginTextWithLine: {
        marginVertical: 20,
        paddingHorizontal: 16,
        textTransform: 'uppercase',
        backgroundColor: COLORS.white
    },
    orText: {
        position: 'absolute',
        height: 1,
        backgroundColor: COLORS.lightSecondary,
        width: '100%',
        
    }
})

export default TextwithLine