import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ActivityIndicator, Dimensions, Image, ScrollView, Text, View } from "react-native";
import { COLORS } from "../../colors/colors";

const HEIGHT = Dimensions.get('screen').height
export const NewMath = () => {
    const newMathUsers = [
        {
            img: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
            name: 'Feride',
            year: '24'
        },
        {
            img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Feride',
            year: '24'
        },
        {
            img: 'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            name: 'Feride',
            year: '24'
        }
    ]
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginVertical: 40}}>
                    {newMathUsers.map(e => (
                        <View 
                            style={{position: 'relative', marginRight: 20}}>
                                <Image
                                    style={{
                                        width: 200,
                                        height: HEIGHT * .25,
                                        resizeMode: 'cover',
                                        borderRadius: 20,
                                    }}
                                    source={{ uri: e.img }}
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
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{color: COLORS.white, fontSize: 12}}>LOS ANGELES</Text>
                                        <Text style={{color: COLORS.white, fontSize: 12}}> • </Text>
                                        <Text style={{color: COLORS.white, fontSize: 12}}>20 KMS AWAY</Text>
                                    </View>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: COLORS.yellow,
                                        borderRadius: 5,
                                        width: 100, 
                                        marginTop: 10,
                                        flexDirection: 'row',
                                        padding: 2
                                        }}>
                                        <Text style={{color: COLORS.yellow}}> • </Text>
                                        <Text style={{color: COLORS.white}}>Active Now</Text>
                                    </View>
                                </View>
                            </View>
                    ))}
                </ScrollView>
    )
}

export const YourMath = () => {
    const yourMathUsers = [
        {
            img: 'https://images.unsplash.com/photo-1665686310934-8fab52b3821b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Feride',
            year: '24'
        },
        {
            img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Feride',
            year: '24'
        },
        {
            img: 'https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            name: 'Feride',
            year: '24'
        }
    ]
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginVertical: 40}}>
                    {yourMathUsers.map(e => (
                        <View 
                            style={{position: 'relative', marginRight: 20}}>
                                <Image
                                    style={{
                                        width: 200,
                                        height: HEIGHT * .25,
                                        resizeMode: 'cover',
                                        borderRadius: 20,
                                    }}
                                    source={{ uri: e.img }}
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
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: COLORS.yellow,
                                        borderRadius: 5,
                                        width: 100, 
                                        marginTop: 10,
                                        flexDirection: 'row',
                                        padding: 2
                                        }}>
                                        <Text style={{color: COLORS.yellow}}> • </Text>
                                        <Text style={{color: COLORS.white}}>Active Now</Text>
                                    </View>
                                </View>
                            </View>
                    ))}
                </ScrollView>
    )
}