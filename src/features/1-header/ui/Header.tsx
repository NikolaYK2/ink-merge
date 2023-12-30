import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {FONT} from "@/assets/typography/typography";
import {COLORS} from "@/assets/styles/styles";

export const Header = () => {

  const insets = useSafeAreaInsets()


  return (
    <View style={[styles.container, {paddingTop:insets.top}]}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:COLORS.darkOpacity,
    zIndex:1
  },
  text: {
    fontSize: FONT.fsBig,
    color: COLORS.light100,
    fontWeight:FONT.fwB,
  }
})

