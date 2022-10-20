import { CheckBox } from "@rneui/base";
import { Icon } from "@rneui/themed";
import React, { useState } from "react";
import { View, Text } from "react-native"
import { COLORS } from "../../colors/colors";

export const CheckingBox = ({text, ...props}) => {
    const [checked, setChecked] = useState(true)    
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <CheckBox 
                onPress={() => setChecked(!checked)}
                checkedColor={COLORS.yellow}
                uncheckedColor={COLORS.yellow}
                style={{margin: 0, padding: 0}}
                title={text}
                {...props}
                />
        </View>
    )
}

export const RadioCheckingBox = ({text, textSize}) => {
    const [radioChecked, setRadioChecked] = useState(false)    
    return <CheckBox
    center
    title={text}
    textStyle={{
        fontWeight: '400',
        fontSize: textSize,
        lineHeight: 20,
        textTransform: 'capitalize'
    }}
    checked={radioChecked}
    onPress={() => setRadioChecked(!radioChecked)}
        checkedIcon={
            <Icon
            name="radio-button-checked"
            type="material"
            color={COLORS.yellow}
            size={25}
            iconStyle={{ marginRight: 10 }}
            />
        }
        uncheckedIcon={
            <Icon
            name="radio-button-unchecked"
            type="material"
            color={COLORS.secondary}
            size={25}
            iconStyle={{ marginRight: 10 }}
            />
        }
        />
}
export const RadioCheckingBoxWithText = ({text, textSize, btnSize}) => {
    const [radioChecked, setRadioChecked] = useState(false)    
    return <CheckBox
    containerStyle={{margin: 0, padding: 0}}
    style={{margin: 0, padding: 0, alignSelf: 'center'}}
    center
    checked={radioChecked}
    onPress={() => setRadioChecked(!radioChecked)}
        checkedIcon={
            <View style={{width: btnSize, backgroundColor: COLORS.lightSecondary, paddingVertical: 8, alignItems: 'center', borderRadius: 17.5, borderWidth: 1, borderColor: COLORS.black}}>
                <Text
                name="radio-button-checked"
                type="material"
                style={{fontSize: textSize}}
                >{text}</Text>
            </View>
        }
        uncheckedIcon={
            <View style={{ width: btnSize, backgroundColor: COLORS.lightSecondary, paddingVertical: 8, alignItems: 'center', borderRadius: 17.5, borderWidth: 1, borderColor: COLORS.lightSecondary}}>
                <Text
                name="radio-button-checked"
                type="material"
                style={{fontSize: textSize}}
                >{text}</Text>
            </View>
        }
        />
}