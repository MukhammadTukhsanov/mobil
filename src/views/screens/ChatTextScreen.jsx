import React, { useState, useCallback, useEffect, useLayoutEffect } from "react";
import { KeyboardAvoidingView, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../colors/colors";
import { GiftedChat } from 'react-native-gifted-chat'
import { ChatText } from "../components/chatText";

const ChatTextScreen = ({navigation}) => {
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  useLayoutEffect(() => {
      navigation.setOptions({
          headerRight: () => (
              <TouchableOpacity>
                  <Icon name="plus"/>
              </TouchableOpacity>
          )
      })
  })
    return(
        // <SafeAreaView>
        //     <View style={{padding: 20, flexDirection: 'row', alignItems: 'center' }}>
        //         <View style={{flexDirection: 'row', alignItems: 'center'}}>
        //             <Icon onPress={() => navigation.navigate('ChatsScreen')} name={'arrow-left'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
        //             <Text style={{fontSize: 26, fontWeight: '600'}}>Chats</Text>
        //         </View>
        //         <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
        //             <Icon name={'phone'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
        //             <Icon name={'video-outline'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
        //             <Icon name={'tune-variant'} color={COLORS.black} size={24} style={{marginHorizontal: 5}} />
        //         </View>
        //     </View>
            <GiftedChat
                                messages={messages}
                                onSend={messages => onSend(messages)}
                                user={{
                                    _id: 1,
                                }}
                            />
    )
}

export default ChatTextScreen