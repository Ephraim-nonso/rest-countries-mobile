import React from "react";
import { View } from "react-native";
import Countries from "../../components/Countries";
import FilterRegion from "../../components/FilterRegion";
import Header from "../../components/Header";
import Search from "../../components/Search";
import { styles } from "./styles";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <FilterRegion />
      <Countries />
    </View>
  );
}

export default HomeScreen;
