import React, { useContext } from "react";
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { DarkTheme } from "../DarkTheme";

function Search() {
  const { dark } = useContext(DarkTheme);
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <DismissKeyboard>
      <View
        style={[styles.container, { borderColor: dark ? "#fff" : "black" }]}
      >
        <TextInput
          placeholder="Search for a country"
          placeholderTextColor={dark ? "#fff" : "#000"}
          style={{ color: dark ? "#fff" : "#000", width: "90%" }}
        />
        <AntDesign name="search1" size={24} color={dark ? "#fff" : "black"} />
      </View>
    </DismissKeyboard>
  );
}

export default Search;
