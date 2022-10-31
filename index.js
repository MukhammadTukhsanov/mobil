// import React from "react";
import { AppRegistry } from "react-native";
import 'react-native-gesture-handler';
// import { registerRootComponent } from "expo";

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);
AppRegistry.registerComponent("main", () => App);

// import React from "react";
// import { AppRegistry, StyleSheet, Text, View } from "react-native";

// const RNHighScores = () => {
//   //   const contents = scores.map((score) => (
//   //     <Text key={score.name}>
//   //       {score.name}:{score.value}
//   //       {"\n"}
//   //     </Text>
//   //   ));
//   return (
//     <View style={styles.container}>
//       <Text style={styles.highScoresTitle}>2048 High Scores!</Text>
//       {/* <Text style={styles.scores}>{contents}</Text> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//   },
//   highScoresTitle: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//   },
//   scores: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5,
//   },
// });

// // Module name
// AppRegistry.registerComponent("main", () => RNHighScores);
