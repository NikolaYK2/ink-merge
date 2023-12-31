import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {ListType} from "@/features/2-main/ui/Main";
import {COLORS, SAID} from "@/assets/styles/styles";


type Props={
  item:ListType
}
export const List = ({item}:Props) => {

  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons name={item.image} size={24} color={COLORS.light100}/>
      </View>
      <Text style={styles.text}>
        {item.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    backgroundColor: COLORS.darkOpacity,
    padding: 10,
    margin:10,
    borderRadius:SAID.borderLight,
  },
  text:{
    marginLeft:10,
    color:COLORS.light100
  }
})