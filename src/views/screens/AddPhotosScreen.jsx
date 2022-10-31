import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, ActivityIndicator, View, Text, Dimensions } from 'react-native';
import { Image } from '@rneui/themed';
import { COLORS } from '../../colors/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileTitle from '../components/profileTitle';
import { AppButton } from '../components/button';
import { ScrollView } from 'react-native-virtualized-view';

const windowHeight = Dimensions.get('window').height - 150
const windowWidth = Dimensions.get('window').width / 2 - 30

const images = [
    {
        id: 1,
        image: 'https://source.unsplash.com/random?sig=5'
    },
    {
        id: 2,
        image: 'https://source.unsplash.com/random?sig=6'
    },
    // {
    //     id: 3,
    //     // image: require('../../Photos/FramePhoto.png')
    //     image: 'https://source.unsplash.com/random?sig=6'
    // },
    // {
    //     id: 4,
    //     // image: require('../../Photos/FramePhoto.png')
    //     image: 'https://source.unsplash.com/random?sig=6'
    // }
]
const AddPhotoScreen = ({navigation}) => {
return (
    <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
        <ScrollView style={{height: windowHeight}}>
            <View style={{ paddingHorizontal: 20}}>
                <ProfileTitle text={'Add Your Best Photos'} />
                <Text style={style.confirmSubtitle}>
                    Add your best photos to get a higher amount of daily matches
                </Text>
                <FlatList
                    data={images}
                    style={style.list}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Image
                            key={item.id}
                            style={{height: 400, resizeMode: 'cover'}}
                            source={{ uri: item.image }}
                            containerStyle={style.item}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    )}
                />
                <View style={{flexDirection: 'row'}}>
                    <View 
                        style={{
                            width: windowWidth, 
                            height: 207, 
                            borderWidth: 1, 
                            borderColor: COLORS.black,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            margin: 5}}>
                        <Icon name={'plus'} size={36} style={{opacity: .5}} />
                    </View>
                    <View 
                        style={{
                            width: windowWidth, 
                            height: 207, 
                            borderWidth: 1, 
                            borderColor: COLORS.black,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            margin: 5}}>
                        <Icon name={'plus'} size={36} style={{opacity: .5}} />
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={{marginTop: 'auto', padding: 20}}>
            <AppButton 
                onPress={() => navigation.navigate('SelectIdealScreen')}
                text={'Contine'} />
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

export default AddPhotoScreen;