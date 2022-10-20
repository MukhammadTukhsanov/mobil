import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from "react";
import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS } from '../../colors/colors';
import { RadioCheckingBoxWithText } from '../components/checkbox';
import { INTERESTS } from '../components/interests';

const InterestsScreen = () => {
    const windowWidth = Dimensions.get('window').width / 2 - 20
    const windowHeight = Dimensions.get('window').height - 200
    const renderItem = ({item}) => {
        return (
            <View style={{marginVertical: 7}}>
                <RadioCheckingBoxWithText textSize={18} text={item.name} btnSize={windowWidth}/>
            </View>
        )
    }
    return(
        <SafeAreaView style={{backgroundColor: COLORS.white}}>
           <View style={style.header}>
                <Icon size={22} name='arrow-left' />
           </View>
           <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20}}>
                <View style={{paddingHorizontal: 15, paddingVertical: 5, backgroundColor: COLORS.secondary, borderRadius: 20}}>
                    <Text style={{color: COLORS.white}}>0  /  30</Text>
                </View>
           </View>
           <View style={{paddingHorizontal: 20}}>
               <Text style={{fontWeight: '600',
                            fontSize: 26,
                            lineHeight: 32,
                            color: '#08203A'
                    }}>
                    Pick some topics you are interested in.
               </Text>
               <Text style={{
                   marginTop: 14,
                   fontWeight: '400',
                   fontSize: 18,
                   lineHeight: 20,
                   color: '#08203A'
               }}>
                    We’ll use them to match with other based on common interests.
               </Text>
           </View>
           <ScrollView style={{height: windowHeight}}>
                    <FlatList 
                        data={INTERESTS}
                        renderItem={renderItem}
                        numColumns={2}
                    />
           </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
})

export default InterestsScreen