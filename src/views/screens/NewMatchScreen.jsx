import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView, View, Text, FlatList, Image, ActivityIndicator, Dimensions, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../colors/colors";

const NewMathScreen = ({navigation}) => {
    const newMathUsers = [
        {
            img: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
            name: 'Feride',
            year: '24',
            title: 'Model'
        },
        {
            img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Feride',
            year: '24',
            title: 'Model'
        },
        {
            img: 'https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Feride',
            year: '24',
            title: 'Model'
        },
        {
            img: 'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            name: 'Feride',
            year: '24',
            title: 'Model'
        },
        {
            img: 'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            name: 'Feride',
            year: '24',
            title: 'Model'
        },
        {
            img: 'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            name: 'Feride',
            year: '24',
            title: 'Model'
        },
        {
            img: 'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            name: 'Feride',
            year: '24',
            title: 'Model'
        },
        {
            img: 'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            name: 'Feride',
            year: '24',
            title: 'Model'
        },
        {
            img: 'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            name: 'Feride',
            year: '24',
            title: 'Model'
        },
        {
            img: 'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            name: 'Feride',
            year: '24',
            title: 'Model'
        },
    ]

    const WIDTH = Dimensions.get('window').width
    return (
        <SafeAreaView style={{height: '100%'}}>
            <View style={{padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon onPress={() => navigation.navigate('MathScreen')} name={'arrow-left'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                    <Text style={{fontSize: 26, fontWeight: '600'}}>New Match</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                    <Icon name={'magnify'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                    <Icon onPress={() => handleSnapPress(0)} name={'tune-variant'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                </View>
            </View>
            <ScrollView style={{width: WIDTH}}>
                <View style={{width: WIDTH, alignItems: 'center', paddingHorizontal: 20}}>
                    <FlatList
                        data={newMathUsers}
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <View 
                                    style={{position: 'relative',margin: 5}}>
                                        <Image
                                            style={{
                                                width: WIDTH/2 - 30,
                                                height: 200,
                                                resizeMode: 'cover',
                                                borderRadius: 20,
                                            }}
                                            source={{ uri: item.img }}
                                            PlaceholderContent={<ActivityIndicator />}
                                        />
                                        <LinearGradient
                                            style={{
                                                position: 'absolute', 
                                                height: '50%', 
                                                width: '100%', 
                                                bottom: 0, 
                                                borderRadius: 20,
                                                opacity: .8
                                            }}
                                            colors={['transparent', COLORS.yellow]}
                                        />
                                        <View style={{position: 'absolute' , bottom: 20, left: 20}} >
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{color: COLORS.white, fontSize: 26, fontWeight: '600'}}>Feride</Text>
                                                <Text style={{color: COLORS.white, fontSize: 26}}>,</Text>
                                                <Text style={{color: COLORS.white, fontSize: 26, marginLeft: 10, fontWeight: '600'}}>24</Text>
                                            </View>
                                            <Text style={{color: COLORS.white, fontSize: 12}}>{item.title}</Text>
                                        </View>
                                    </View>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewMathScreen