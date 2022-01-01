import React from "react";
import { TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

function Search() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search for a country" />
      <AntDesign name="search1" size={24} color="black" />
    </View>
  );
}

export default Search;
