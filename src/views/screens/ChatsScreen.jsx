import { Avatar } from '@rneui/themed'
import React from 'react'
import { Dimensions, FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../colors/colors'
import ChatUser from '../components/chatUser'

const ChatsScreen = ({navigation}) => {
    const novActiveUsers = [
        {
            img: 'https://randomuser.me/api/portraits/women/63.jpg'
        },
        {
            img: 'https://randomuser.me/api/portraits/women/64.jpg'
        },
        {
            img: 'https://randomuser.me/api/portraits/women/65.jpg'
        },
        {
            img: 'https://randomuser.me/api/portraits/women/66.jpg'
        },
        {
            img: 'https://randomuser.me/api/portraits/women/67.jpg'
        },
        {
            img: 'https://randomuser.me/api/portraits/women/68.jpg'
        },
        {
            img: 'https://randomuser.me/api/portraits/women/69.jpg'
        },
        {
            img: 'https://randomuser.me/api/portraits/women/62.jpg'
        },
    ]
    const chatList = [
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/29.jpg',
            userName: 'Natasha Winkles',
            online: true,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/28.jpg',
            userName: 'Natasha Winkles',
            online: true,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/27.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/26.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/25.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/24.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/23.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/22.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/21.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/20.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/19.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/18.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/17.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/16.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/15.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/14.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/13.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/12.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/11.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/10.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/9.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/8.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
        {
            userAvatar: 'https://randomuser.me/api/portraits/men/7.jpg',
            userName: 'Natasha Winkles',
            online: false,
            lastMess: 'Hello, evening too Rose',
            time: '20:03'
        },
    ]

    const HEIGHT = Dimensions.get('window').height
    return (
        <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
                <View style={{padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name={'arrow-left'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                        <Text style={{fontSize: 26, fontWeight: '600'}}>Chats</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                        <Icon name={'magnify'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                        <Icon onPress={() => handleSnapPress(0)} name={'tune-variant'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
                    </View>
                </View>
                <View style={{paddingHorizontal: 20}}>
                    <Text style={{fontSize: 20, fontWeight:'bold', color: COLORS.black}}>Now Active</Text>
                </View>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 20, marginVertical: 20,marginTop: 20}}>
                        <FlatList 
                            horizontal={true}
                            data={novActiveUsers}
                            renderItem={({item}) => (
                                <Avatar 
                                    rounded
                                    size={65}
                                    containerStyle={{marginRight: 12}}
                                    source={{uri: item.img}}
                                />
                            )
                            }
                        />
                    </ScrollView>
                </View>
                    <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
                        <FlatList 
                            data={chatList}
                            keyExtractor={(item)=> item.id}
                            renderItem={({item})=> <ChatUser 
                                                        onPress={() => navigation.navigate('ChatTextScreen', {userName: item.userName})}
                                                        userAvatar={item.userAvatar}
                                                        userName={item.userName}
                                                        lastMess={item.lastMess}
                                                        time={item.time}
                                                        online={item.online} />}
                        />
                    </ScrollView>
        </SafeAreaView>
    )
}

export default ChatsScreen