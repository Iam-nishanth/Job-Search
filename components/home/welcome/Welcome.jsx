import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full Time", "Part Time", "Internship"];

import styles from "./welcome.style";
import { router } from "expo-router";

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full Time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello World</Text>
        <Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={(e) => console.log(e)}
            placeholder="Search for a Job"
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => console.log("Search")}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
