import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CountryPicker from "react-native-country-codes-picker";
import { COLORS } from "../../colors/colors";

export default function CountrCode() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+998');

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
            height: 45,
            backgroundColor: COLORS.white,
            flexDirection: 'row',
            paddingHorizontal: 15,
            borderBottomWidth: 0.5,
            alignItems: 'center',
        }}
      >
        <Text style={{
            color: COLORS.black,
            fontSize: 20
        }}>
            {countryCode}
        </Text>
      </TouchableOpacity>

      <CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </View>
  );
}