import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../colors/colors";
import { LoginWithBtn } from "../components/button";
import TextwithLine from "../components/textWithline";

const LoginWithScreen = ({ navigation }) => {
  const logInBtns = [
    {
      btnIcon: "social-google",
      btnText: "LOG IN WITH GOOGLE",
      lastBtn: false,
    },
    {
      btnIcon: "social-facebook",
      btnText: "LOG IN WITH FACEBOOK",
      lastBtn: false,
    },
    {
      btnIcon: "envelope-open",
      btnText: "LOG IN WITH NUMBER / EMAIL",
      lastBtn: false,
    },
    {
      btnIcon: null,
      btnText: "LOG IN WITH NUMBER / EMAIL",
      lastBtn: true,
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={style.logIn}>
        <Text style={style.logInText}>sinqly</Text>
        <Text style={style.logInSubTitle}>
          By clicking Log In, you agree with our{" "}
          <Text style={style.logInTextLink}>Terms</Text>. Learn how we process
          your data in our{" "}
          <Text style={style.logInTextLink}>Privacy Policy</Text> and{" "}
          <Text style={style.logInTextLink}>Cookies Policy</Text>.
        </Text>
        <View>
          {logInBtns.map((e) =>
            e.lastBtn ? (
              <View>
                <TextwithLine text={"OR"} />
                <LoginWithBtn text={e.btnText} iconName={e.btnIcon} />
              </View>
            ) : (
              <LoginWithBtn text={e.btnText} iconName={e.btnIcon} />
            )
          )}
        </View>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Text>Don’t you have an account? </Text>
          <Text
            style={style.logInTextLink}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Sign Up
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  logIn: {
    width: "100%",
    alignItems: "center",
    height: "100%",
    padding: 20,
    justifyContent: "flex-end",
    backgroundColor: COLORS.white,
  },
  logInText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "52px",
    textAlign: "center",
    textTransform: "uppercase",
    // letterSpacing: '21px',
    color: COLORS.black,
  },
  logInSubTitle: {
    marginTop: 96,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    textAlign: "center",
    color: COLORS.secondary,
  },
  logInTextLink: {
    color: COLORS.yellow,
    textDecorationLine: "underline",
  },
});

export default LoginWithScreen;
