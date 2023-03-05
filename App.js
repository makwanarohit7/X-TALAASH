import { StatusBar } from "expo-status-bar";

import { Text, View, StyleSheet, ScrollView } from "react-native";
import Header from "./Components/Header";
import Qr_Screen from "./Components/Qr_Screen";
import YouWonTheGame from "./Components/YouWonTheGame";
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  // const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <Header />

      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome To Xenesis-2023">
          <Stack.Screen name="Welcome To Xenesis-2023" component={Qr_Screen} />
          <Stack.Screen name="Finish" component={YouWonTheGame} />
        </Stack.Navigator>
      </NavigationContainer> */}

      <Qr_Screen />
      {/* <YouWonTheGame /> */}
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
