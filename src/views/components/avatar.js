import React from "react";
import { Avatar } from "@rneui/themed";
import { View } from "react-native";
import { COLORS } from "../../colors/colors";

const UserAvatar = () => (
    <View style={{width: '100%', alignItems: 'center'}}>
        <Avatar
            size={120}
            rounded
            source={require('../../Photos/avatar.png')}
            title="Bj"
            containerStyle={{ backgroundColor: 'grey', shadowColor: COLORS.yellow, shadowOpacity: .1, shadowRadius: 50 }}
        >
        </Avatar>
    </View>
)

export default UserAvatar