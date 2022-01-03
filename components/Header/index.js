import React, { useContext } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { DarkTheme } from "../DarkTheme";

function Header() {
  const { dark, setDark } = useContext(DarkTheme);
  const handleDarkMode = () => {
    setDark(!dark);
    console.log("working");
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: dark ? "hsl(207, 26%, 17%)" : "#fff",
        },
      ]}
    >
      <Text style={[styles.title, { color: dark ? "#fff" : "#000" }]}>
        Where in the world?
      </Text>
      <View style={styles.iconContainer}>
        <Feather
          name="moon"
          size={24}
          color={dark ? "#fff" : "#000"}
          onPress={handleDarkMode}
          style={{ padding: 5 }}
        />
      </View>
    </View>
  );
}

export default Header;
