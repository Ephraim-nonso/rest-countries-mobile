import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

function Countries() {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Image
          source={require("../../assets/3.png")}
          style={{ width: 100, height: 100 }}
        />
        <View style={styles.details}>
          <Text>Ghana</Text>
          <Text>Population: 31072945</Text>
          <Text>Region: Africa</Text>
          <Text>Capital: Accra</Text>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <Image
          source={require("../../assets/4.png")}
          style={{ width: 100, height: 100 }}
        />
        <View style={styles.details}>
          <Text>Nigeria</Text>
          <Text>Population: 31072945</Text>
          <Text>Region: Africa</Text>
          <Text>Capital: Abuja</Text>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <Image
          source={require("../../assets/1.png")}
          style={{ width: 100, height: 100 }}
        />
        <View style={styles.details}>
          <Text>Nigeria</Text>
          <Text>Population: 31072945</Text>
          <Text>Region: Africa</Text>
          <Text>Capital: Abuja</Text>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <Image
          source={require("../../assets/2.png")}
          style={{ width: 100, height: 100 }}
        />
        <View style={styles.details}>
          <Text>Nigeria</Text>
          <Text>Population: 31072945</Text>
          <Text>Region: Africa</Text>
          <Text>Capital: Abuja</Text>
        </View>
      </View>
    </View>
  );
}

export default Countries;
