// import React, { useState } from "react";
// import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import DatePicker from 'react-native-modern-datepicker';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { COLORS } from "../../colors/colors";
// import SimpleModal from "./simpleModal";

// const DateAndTimePicker = () => {
//     const [selectedDate, setSelectedDate] = useState('');
//     const [isModalVisible, setIsModalVisible] = useState(false)

//     const changeModalVisible = (bool) => {
//         setIsModalVisible(bool)
//     }

//     const setData = (data) => {
//         setSelectedDate(data)
//     }
//   return (
//       <View>
//         <TouchableOpacity
//             style={style.touchableOpacity}
//             onPress={() => changeModalVisible(true)}
//         >
//             <Text
//                 style={{color: COLORS.black, opacity: .3, fontSize: 20 }}
//             >
//                 Date of Birth
//             </Text>
//             <Icon name="calendar-blank-multiple" style={{color: COLORS.black, opacity: .3}} size={22} />
//         </TouchableOpacity>
//         <Modal 
//             transparent={true}
//             animationType={'fade'}
//             visible={isModalVisible}
//             nRequestClose={() => {setIsModalVisible(false)}}
//             changeModalVisible= {changeModalVisible}
//             setData={setData}
//         >
//             {/* <SimpleModal /> */}
//         </Modal>
//       </View>
//   );
// }

// const style = StyleSheet.create({
//     touchableOpacity: {
//         flexDirection: 'row',
//         height: 55,
//         backgroundColor: COLORS.white,
//         flexDirection: 'row',
//         paddingHorizontal: 15,
//         borderBottomWidth: 0.5,
//         borderBottomColor: COLORS.black,
//         alignItems: 'center',
//         justifyContent: 'space-between'
//     }
// })

// export default DateAndTimePicker