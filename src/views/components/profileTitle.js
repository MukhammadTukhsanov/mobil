import React from "react";
import { Text, View } from "react-native";

const ProfileTitle = ({text}) => (
    <View>
        <Text style={{fontWeight: '600',
        fontSize: 26,
        lineHeight: 32,
        color: '#08203A'
        }}>{text}</Text>
    </View>
)

export default ProfileTitle