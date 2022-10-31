import { CheckBox } from "@rneui/base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React, { useContext, useState } from "react";
import { View, Text } from "react-native"
import { COLORS } from "../../colors/colors";
import { AppContext } from "../../../Global/Context";

export const CheckingBox = ({text, ...props}) => {

    const [checked, setChecked] = useState(false)    
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

export const RadioCheckingBox = ({text, textSize, ...props}) => {
    return <CheckBox
    {...props}
    center
    title={text}
    textStyle={{
        fontWeight: '400',
        fontSize: textSize,
        lineHeight: 20,
        textTransform: 'capitalize'
    }}
    // checked={radioChecked}
    // onPress={() => setRadioChecked(!radioChecked)}
        checkedIcon={
            <View>
                <Icon
                name="radiobox-marked"
                type="material"
                color={COLORS.yellow}
                size={25}
                iconStyle={{ marginRight: 10 }}
                />
            </View>
        }
        uncheckedIcon={
            <Icon
            name="radiobox-blank"
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

export const RadioForSelectIdeal = ({icon, windowWidth, text}) => {
    const [radioChecked, setRadioChecked] = useState(false)    
    return <CheckBox
    containerStyle={{margin: 0, padding: 0}}
    style={{margin: 0, padding: 0, alignSelf: 'center'}}
    center
    checked={radioChecked}
    onPress={() => setRadioChecked(!radioChecked)}
        checkedIcon={
            <View style={{
                    width: windowWidth, 
                    height: 207, 
                    borderWidth: 1, 
                    borderColor: COLORS.yellow,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    marginBottom: 20
                    }}>
                <Icon name={icon} size={36} style={{opacity: .5}} color={COLORS.yellow}/>
                <Text style={{fontSize: 16, color: COLORS.yellow }}>
                    {text}
                </Text>
            </View>
        }
        uncheckedIcon={
            <View style={{
                    width: windowWidth, 
                    height: 207, 
                    borderWidth: 1, 
                    borderColor: COLORS.black,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    marginBottom: 20
                    }}>
                <Icon name={icon} size={36} style={{opacity: .5}} color={COLORS.black} />
                <Text style={{fontSize: 16, color: COLORS.black }}>
                    {text}
                </Text>
            </View>
        }
        />
}

export const GenderCheckbox = ({text, width}) => {
    const [radioChecked, setRadioChecked] = useState(false)    
    return <CheckBox
    containerStyle={{margin: 0, padding: 0}}
    style={{margin: 0, padding: 0, alignSelf: 'center'}}
    center
    checked={radioChecked}
    onPress={() => setRadioChecked(!radioChecked)}
        checkedIcon={
            <View style={{
                    width: width,
                    height: 28, 
                    borderWidth: 1, 
                    borderColor: COLORS.yellow,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    marginBottom: 20
                }}>
                <Text style={{fontSize: 16, color: COLORS.yellow }}>
                    {text}
                </Text>
            </View>
        }
        uncheckedIcon={
            <View style={{
                    width: width,
                    height: 28, 
                    borderWidth: 1, 
                    borderColor: COLORS.black,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    marginBottom: 20
                    }}>
                <Text style={{fontSize: 16, color: COLORS.black, marginHorizontal: 'auto'}}>
                    {text}
                </Text>
            </View>
        }
        />
}