import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView, ScrollView, View, Image, ActivityIndicator, Text, FlatList, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../colors/colors";
import { UserInfoHeader } from "../components/userInfoHeader";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet"
import LinearGradient from "react-native-linear-gradient";
import BottomSheets from "../components/bottomSheets";

const HomeScreen = () => {
    const sheetRef = useRef(null)

    const [isOpen, setIsOpen] = useState(false)

    const snapPoints = ['60%']

    const handleSnapPress = useCallback(index => {
        sheetRef.current.snapToIndex(index)
        setIsOpen(true)
    },[])

    const imageBtns = [
        {
            size: 50,
            icon: 'swap-vertical',
            color: COLORS.green
        },
        {
            size: 60,
            icon: 'close',
            color: COLORS.black
        },
        {
            size: 60,
            icon: 'cards-heart-outline',
            color: COLORS.red
        },
        {
            size: 50,
            icon: 'star-outline',
            color: COLORS.yellow
        },
    ]

    const HEIGHT = Dimensions.get('screen').height
    return (
        <SafeAreaView style={{height: '100%', backgroundColor: isOpen ? '#00000080': COLORS.white}}>
            <View style={{padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                <UserInfoHeader />
                <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                    <Icon name={'bell-outline'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                    <Icon onPress={() => handleSnapPress(0)} name={'tune-variant'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                </View>
            </View>
            <ScrollView bounces={false} contentContainerStyle={{paddingHorizontal: 50}}>
                    <View 
                    style={{position: 'relative'}}>
                        <Image
                            style={{
                                height: HEIGHT * .6,
                                resizeMode: 'cover',
                                borderRadius: 20,
                                opacity: isOpen ? .4 : 1
                            }}
                            source={{ uri: 'https://source.unsplash.com/random?sig=5' }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <LinearGradient 
                        style={{height: 200, width: '100%', position: 'absolute', bottom: 0, borderRadius: 20}}
                        colors={['transparent', COLORS.yellow]} />
                        <View style={{position: 'absolute' , bottom: 20, left: 20}} >
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{color: COLORS.white, fontSize: 26, fontWeight: '600'}}>Feride</Text>
                                <Text style={{color: COLORS.white, fontSize: 26}}>,</Text>
                                <Text style={{color: COLORS.white, fontSize: 26, marginLeft: 10, fontWeight: '600'}}>24</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', opacity: isOpen ? .4 : 1}}>
                                <Icon name="map-marker-outline" size={24} color={COLORS.white} />
                                <Text style={{color: COLORS.white, fontSize: 12}}>LOS ANGELES</Text>
                                <Text style={{color: COLORS.white, fontSize: 12}}> • </Text>
                                <Text style={{color: COLORS.white, fontSize: 12}}>20 KMS AWAY</Text>
                            </View>
                            <View style={{
                                borderWidth: 1,
                                borderColor: COLORS.yellow,
                                borderRadius: 5,
                                maxWidth: 120, 
                                marginTop: 10,
                                flexDirection: 'row',
                                paddingHorizontal: 5,
                                padding: 2
                                }}>
                                <Text style={{color: COLORS.yellow}}> • </Text>
                                <Text style={{color: COLORS.white}}>Active Now</Text>
                            </View>
                        </View>
                    </View>
                    <View 
                        style={{
                            flexDirection: 'row', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            width: '100%',
                            marginVertical: 20}}>
                                <FlatList
                                    contentContainerStyle={{alignItems: 'center', justifyContent: 'center', width: '100%', paddingVertical: 5}}
                                    horizontal
                                    data={imageBtns}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({item}) => (
                                        <TouchableOpacity 
                                            style={{
                                                width: item.size,
                                                opacity: isOpen ? .4 : 1,
                                                height: item.size, 
                                                shadowColor: COLORS.black, 
                                                borderRadius: 10,
                                                shadowOpacity: .3,
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 0
                                                },
                                                backgroundColor: COLORS.white,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginHorizontal: 5
                                            }}>
                                        <Icon name={item.icon} color={item.color} size={30} />
                                    </TouchableOpacity>
                                    )}
                                />
                    </View>
            </ScrollView>
            <BottomSheet
                ref={sheetRef}
                snapPoints={snapPoints}
                index={-1}
                style={{backgroundColor: COLORS.white, borderRadius: 20}}
                enablePanDownToClose={true}
                onClose={() => setIsOpen(false)}
            >
                <BottomSheetView>
                    <BottomSheets />
                </BottomSheetView>
            </BottomSheet> 
        </SafeAreaView> 
    )
}

export default HomeScreen