import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Text, Dimensions } from 'react-native';
import { COLORS } from '../../colors/colors';
import ProfileTitle from '../components/profileTitle';
import { AppButton } from '../components/button';
import { RadioForSelectIdeal } from '../components/checkbox';
import { ScrollView } from 'react-native-virtualized-view';

const windowHeight = Dimensions.get('window').height - 150
const windowWidth = Dimensions.get('window').width / 2 - 40

const ideals = [
    {
    icon: 'cards-heart-outline',
    text: 'Love'
    },
    {
    icon: 'account-group-outline',
    text: 'Friends'
    },
    {
    icon: 'bag-suitcase-outline',
    text: 'Fling'
    },
    {
    icon: 'chart-line',
    text: 'Business'
    }
]
const SelectIdealScreen = ({navigation}) => {
return (
    <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
        <ScrollView>
            <View style={{ paddingHorizontal: 20}}>
                <ProfileTitle text={'Select Your Ideal Match'} />
                <Text style={style.confirmSubtitle}>
                    What are you hoping to fing on the
                </Text>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <FlatList 
                        data={ideals}
                        numColumns={ 2 }
                        renderItem={({ item }) => (
                            <RadioForSelectIdeal 
                                key={item.text} 
                                windowWidth={windowWidth} 
                                text={item.text} 
                                icon={item.icon}
                                />
                        )}
                    />
                </View>
            </View>
        </ScrollView>
        <View style={{marginTop: 'auto', padding: 20}}>
            <AppButton text={'Contine'} onPress={() => navigation.navigate('HomeScreen')} />
        </View>
    </SafeAreaView>
);
};

const style = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    list: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingTop: 40
    },
    confirmSubtitle: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'left',
        color: '#08203A',
        marginTop: 20   
    },
    item: {
        margin: 5,
        borderRadius: 20,
        aspectRatio: .8,
        width: '100%',
        flex: 1,
    },
});

export default SelectIdealScreen;