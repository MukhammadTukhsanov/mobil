import { Avatar } from "@rneui/themed";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { COLORS } from "../../colors/colors";

const ChatUser = ({userAvatar, userName, online, lastMess, time, ...props}) => {
    const WIDTH = Dimensions.get('window').width
    return(
        <TouchableOpacity {...props} style={{flexDirection: 'row', marginVertical: 8}}>
            <Avatar 
                rounded
                size={65}
                source={{uri: userAvatar}}
            />                            
            <View style={{marginLeft: 20 }}>
                <View style={{width: WIDTH - 130, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                    <Text style={{color: COLORS.black, fontSize: 20, fontWeight: '600'}}>
                        {userName}
                    </Text>
                    {
                        online &&
                        <Icon name="dot-fill" size={10} color={COLORS.yellow} />
                    }
                </View>
                <View style={{width: WIDTH - 130, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                    <Text style={{color: COLORS.mute, fontSize: 12, fontWeight: '500'}}>
                        {lastMess}
                    </Text>
                    <Text style={{color: COLORS.mute, fontSize: 12}}>{time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ChatUser