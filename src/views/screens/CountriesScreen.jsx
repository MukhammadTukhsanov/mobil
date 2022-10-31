import React, { useEffect } from "react";
import { useContext } from "react";
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-virtualized-view";
import { AppContext } from "../../../Global/Context";
import { COLORS } from "../../colors/colors";
import { LoginWithBtn } from "../components/button";
import { RadioCheckingBox } from "../components/checkbox";
import { COUNTRIES } from "../components/countries";
import Input from "../components/input";


const CountriesScreen = ({navigation}) => {
    const {radioChecked, setRadioChecked} = useContext(AppContext)
    
    const renderItem = ({item}) => {
        return (
            <View key={item.code} style={{borderColor: COLORS.secondary, borderBottomWidth: .1, borderTopWidth: .2, width: '100%',alignItems: 'flex-start'}}>
                <RadioCheckingBox onPress={() => setRadioChecked(!radioChecked)} checked={radioChecked} text={item.name} textSize={20}/>
            </View>
        )
    }

    // useEffect(() => {
    //     console.log(
    //         setRadioChecked
    //     )
    // },[setRadioChecked])

    // const windovHeight = Dimensions.get('window').height - 120
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding': 'height' }>
            <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
                <Input placeholder={'Search'} iconName={'magnify'}/>
                    <FlatList 
                        data={COUNTRIES}
                        renderItem={renderItem}
                    />
                <Divider width={1}/>
                <View style={{paddingHorizontal: 20}}>
                    <LoginWithBtn onPress={() => navigation.navigate('InterestsScreen')} text={'Next Page'}/>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default CountriesScreen