import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";

function FilterRegion() {
  return (
    <View style={styles.container}>
      <Text>Filter by region</Text>
      <AntDesign name="filter" size={24} color="black" />
    </View>
  );
}

export default FilterRegion;
