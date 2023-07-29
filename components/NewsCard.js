import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";

const NewsCard = ({ item }) => {
  const { width } = useWindowDimensions();
//   console.log(item);
  return (
    <TouchableOpacity style={{ flexDirection: "row", justifyContent:'space-between', alignItems:'center', paddingVertical: 10 }}>
      <Image
        source={{ uri: item.image_url }}
        style={{ width: 80 , height: 80 / 1.7, resizeMode:"contain" }}
      />
      <Text style={{marginLeft: 12}}>{item.title}</Text>
      <Text>{item.description.slice(0, 150)}</Text>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({});
