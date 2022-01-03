import { StatusBar } from "expo-status-bar";
import { createContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { DarkTheme } from "./components/DarkTheme";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <DarkTheme.Provider value={{ dark, setDark }}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
          },
        ]}
      >
        <StatusBar style="auto" />

        <HomeScreen />
      </View>
    </DarkTheme.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginBottom: 50,
    // height: "100%",
    backgroundColor: "hsl(0, 0%, 98%)",
  },
});
