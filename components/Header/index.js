import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where in the world?</Text>
      <View style={styles.iconContainer}>
        <Feather name="moon" size={24} color="black" />
      </View>
    </View>
  );
}

export default Header;
