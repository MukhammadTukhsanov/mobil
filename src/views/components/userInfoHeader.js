import { Avatar } from "@rneui/themed";
import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../../colors/colors";

export const UserInfoHeader = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Avatar
                rounded
                size={45}
                source={{uri: 'https://randomuser.me/api/portraits/men/35.jpg'}}
            />
            <View style={{marginLeft: 16}}>
                <Text style={{fontSize: 16, color: COLORS.mute}}>Good Morning</Text>
                <Text style={{fontSize: 20, color: COLORS.black}}>Isabella Ava</Text>
            </View>
        </View>
    )
}