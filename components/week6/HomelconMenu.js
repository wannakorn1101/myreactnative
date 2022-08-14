import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TextInput, } from "react-native";
import MyIcon from "../week3/MyIcon";

export default function HomeIconMenu() {
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: 20, marginTop: -50, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white' }}>
      {/* View ก้อนที่ 1 */}
      <View style={{ backgroundColor: '#eeeeee', padding: 10, borderRadius: 10 }} >
        <TextInput style={{ fontSize: 20 }} placeholder="What're you looking for ?" />
      </View>
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
        <MyIcon title="Flex" name="th" size={30} color="orange" onPress={() => { navigation.navigate("Ex1"); }} />
        <MyIcon title="Travel" name="facebook" size={30} color="blue" onPress={() => { navigation.navigate("Travel"); }} />
        <MyIcon title="Resort" name="youtube" size={30} color="red" onPress={() => { navigation.navigate("Resort"); }} />
        <MyIcon title="Health" name="instagram" size={30} color="pink" onPress={() => { navigation.navigate("Health"); }} />
      </View>
      {/* View ก้อนที่ 3 */}
      <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
        <MyIcon title="Pokemon" name="bolt" size={30} color="orange" onPress={() => { navigation.navigate("PokemonTab"); }} />
        <MyIcon title="Book Store" name="cubes" size={30} color="orange" onPress={() => { navigation.navigate("Book"); }} />
        <MyIcon title="Location" name="map-marker" size={30} color="orange" onPress={() => { navigation.navigate("Location") }} />
        <MyIcon title="More" name="ellipsis-h" size={30} color="orange" />
      </View>
    </View>
  );
}