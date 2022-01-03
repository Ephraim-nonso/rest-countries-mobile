import React, { useContext } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { DarkTheme } from "../DarkTheme";

function FilterRegion() {
  const { dark, setValue } = useContext(DarkTheme);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: dark ? "#fff" : "#000" }]}>
        Filter by region
      </Text>
      <AntDesign name="filter" size={24} color={dark ? "#fff" : "black"} />
    </View>
  );
}

export default FilterRegion;
