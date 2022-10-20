import { ListItem } from "@rneui/themed";
import React from "react";
import { Dimensions, FlatList, SafeAreaView, ScrollView, View } from "react-native";
import { COLORS } from "../../colors/colors";
import { LoginWithBtn } from "../components/button";
import { RadioCheckingBox } from "../components/checkbox";
import { COUNTRIES } from "../components/countries";
import Input from "../components/input";


const CountriesScreen = () => {
    const renderItem = ({item}) => {
        return (
            <View key={item.code} style={{
                                            borderColor: COLORS.secondary, 
                                            borderBottomWidth: .1, 
                                            borderTopWidth: .2,
                                            width: '100%',
                                            alignItems: 'left'}}>
                <RadioCheckingBox text={item.name} textSize={'20'}/>
            </View>
        )
    }
    const windovHeight = Dimensions.get('window').height - 200
    return(
                <View style={{backgroundColor: COLORS.white}}>
                    <SafeAreaView>
                        <Input placeholder={'Search'} iconName={'magnify'}/>
                        <FlatList 
                            style={{height: windovHeight}}
                            data={COUNTRIES}
                            renderItem={renderItem}
                        />
                        <View style={{paddingHorizontal: 20}}>
                            <LoginWithBtn disabled text={'Next Page'}/>
                        </View>
                    </SafeAreaView>
                </View>
    )
}

export default CountriesScreen