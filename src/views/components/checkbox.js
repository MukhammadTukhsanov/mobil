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