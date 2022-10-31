import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { COLORS } from "../../colors/colors";

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const HEIGHT_MODAL = 'auto'

const SimpleModal = (props) => {

    const [selectedDate, setSelectedDate] = useState('');
    closeModal = (bool, data) => {
        props.changeModalVisible(bool)
        props.setData(data)
    }
    return (
        <TouchableOpacity
            disabled={true}
            style={style.container}
        >
            <View style={style.modal}>
                {/* <DatePicker
                    onSelectedChange={date => setSelectedDate(date)}
                /> */}
                {/* <TouchableOpacity style={{
                                        width: '100%',
                                        alignItems: 'center',
                                        height: 45,
                                        borderTopColor: COLORS.lightSecondary,
                                        borderTopWidth: 1,
                                        justifyContent: 'center'
                                        }}
                    onPress={() => closeModal(false, 'OK')}>
                    <Text>OK</Text> */}
                {/* </TouchableOpacity> */}
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    modal: {
        position: 'absolute',
        height: HEIGHT_MODAL,
        width: WIDTH - 80,
        paddingTop: 10,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        shadowColor: COLORS.black,
        shadowOpacity: .2,
        shadowOffset: 'hex'
    }
})

export default SimpleModal