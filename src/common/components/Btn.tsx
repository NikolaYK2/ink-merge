import React, {ReactNode} from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {COLORS, SAID} from "@/assets/styles/styles";


type Props = {
  title: string,
  onPress: () => void,
  children?: ReactNode,
}
export const Btn = ({title, onPress, children}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: COLORS.medium,
    borderRadius:SAID.borderLight,
  },
  text: {
    flex: 1/5,
    color: COLORS.light100,
    marginHorizontal:15,
    paddingVertical:15
  }
})