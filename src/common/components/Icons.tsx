import {TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";

type p = {
  name: 'food' | 'car' | 'home'
}
export const Icons = ({onIconSelected, setShowIcons,setSt}:any) => {
  const icons: p[] = [{name: 'food'}, {name: 'car'}, {name: 'home'}]; // Замени на имена твоих иконок

  return (
    <View style={{flexDirection: 'row'}}>
      {icons.map((iconName, index) => (
        <TouchableOpacity key={index} onPress={() => {onIconSelected(iconName.name); setShowIcons(false); setSt(0)}}>
          <MaterialCommunityIcons name={iconName.name} size={24} color="black"/>
        </TouchableOpacity>
      ))}
    </View>
  );
};
