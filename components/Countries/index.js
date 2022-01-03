import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { DarkTheme } from "../DarkTheme";
import { styles } from "./styles";

function Countries() {
  const [countries, setCountries] = useState([]);
  const baseUrl = "https://restcountries.com/v3.1/all";

  // useEffect(() => {
  const getCountries = axios
    .get(baseUrl)
    .then((response) => {
      setCountries((prevState) => [...prevState, response.data]);
      // console.log(countries);
    })
    .catch((err) => console.log(err));

  // console.log(countries);
  // countries.map((country) => console.table(country));
  const slicedArray = countries.slice(0, 7);
  // slicedArray.map((item) => console.log(item.name.common));
  // }, [slicedArray]);

  const country = slicedArray.map(
    ({ name }) => console.log(name[0])
    // <TouchableOpacity>
    //   <View
    //     style={[
    //       styles.boxContainer,
    //       { backgroundColor: dark ? "hsl(207, 26%, 17%)" : "#fff" },
    //     ]}
    //   >
    //     <Image
    //       source={require("../../assets/1.png")}
    //       style={{ width: 100, height: 100 }}
    //     />
    //     <View style={styles.details}>
    //       <Text style={[styles.titleName, { color: dark ? "#fff" : "#000" }]}>
    //         {/* {country.name.official} */}
    //       </Text>
    //       <Text style={[styles.others, { color: dark ? "#fff" : "#000" }]}>
    //         Population: <Text style={styles.info}>31072945 </Text>
    //       </Text>
    //       <Text style={[styles.others, { color: dark ? "#fff" : "#000" }]}>
    //         Region: <Text style={styles.info}>Africa</Text>
    //       </Text>
    //       <Text style={[styles.others, { color: dark ? "#fff" : "#000" }]}>
    //         Capital: <Text style={styles.info}>Abuja</Text>
    //       </Text>
    //     </View>
    //   </View>
    // </TouchableOpacity>
  );

  const { dark } = useContext(DarkTheme);
  // const Country = (item) => ()
  if (countries === []) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <ScrollView style={styles.container}>
        {countries ? console.log("loading...") : <View>{country}</View>}

        {/* <FlatList
          data={slicedArray}
          renderItem={(country) => {
            console.log(country);
            return (
              <TouchableOpacity>
                <View
                  style={[
                    styles.boxContainer,
                    { backgroundColor: dark ? "hsl(207, 26%, 17%)" : "#fff" },
                  ]}
                >
                  <Image
                    source={require("../../assets/1.png")}
                    style={{ width: 100, height: 100 }}
                  />
                  <View style={styles.details}>
                    <Text
                      style={[
                        styles.titleName,
                        { color: dark ? "#fff" : "#000" },
                      ]}
                    >
                      {country.name.official}
                    </Text>
                    <Text
                      style={[styles.others, { color: dark ? "#fff" : "#000" }]}
                    >
                      Population: <Text style={styles.info}>31072945 </Text>
                    </Text>
                    <Text
                      style={[styles.others, { color: dark ? "#fff" : "#000" }]}
                    >
                      Region: <Text style={styles.info}>Africa</Text>
                    </Text>
                    <Text
                      style={[styles.others, { color: dark ? "#fff" : "#000" }]}
                    >
                      Capital: <Text style={styles.info}>Abuja</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        /> */}
      </ScrollView>
    );
  }
}

export default Countries;
