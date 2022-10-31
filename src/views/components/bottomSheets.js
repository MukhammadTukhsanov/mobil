import { Button } from "@rneui/themed"
import React from "react"
import { Dimensions, Text, View } from "react-native"
import { COLORS } from "../../colors/colors"
import { GenderCheckbox } from "./checkbox"
import Input from "./input"

const BottomSheets = () => {
    const WIDTH = Dimensions.get('window').width
    return (
        <View style={{paddingHorizontal: 20, height: '100%'}}>
            <Text style={{fontSize: 20, fontWeight:'bold', color: COLORS.black}}>Gender</Text>
            <View style={{flexDirection: 'row', width: '100%', marginTop: 20}}>
                <GenderCheckbox text={'Male'} width={WIDTH/3 - 33}/>
                <GenderCheckbox text={'Female'} width={WIDTH/3 - 33}/>
                <GenderCheckbox text={'Random'} width={WIDTH/3 - 33}/>
            </View>
            <Text style={{fontSize: 20, fontWeight:'bold', color: COLORS.black}}>Age</Text>
            <Text style={{fontSize: 20, fontWeight:'bold', color: COLORS.black}}>Location</Text>
            <View>
                <Input placeholder={'Email'} iconName={'map-marker-outline'} iconVisibility={'none'} iconRight/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 'auto', marginBottom: 40}}>
                <Button title={'Reset'} 
                    buttonStyle={{
                        borderRadius: 20,
                        backgroundColor: COLORS.lightSecondary
                        }} 
                    style={{
                        width: WIDTH/2 - 30
                        }}
                    titleStyle={{
                        color: COLORS.black
                    }}
                    />
                <Button title={'Submit'} 
                    style={{width: WIDTH/2 - 30}}
                    buttonStyle={{
                        borderRadius: 20,
                        backgroundColor: COLORS.yellow
                    }}
                    titleStyle={{color: COLORS.black}}
                    />
            </View>
        </View>
    )
}
export default BottomSheets