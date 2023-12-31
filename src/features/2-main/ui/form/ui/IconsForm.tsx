import React from 'react';
import {Pressable, StyleSheet} from "react-native";
import {Icons, IconsType} from "@/features/2-main/ui/form/ui/Icons";


type Props = {
  showIcons: boolean,
  setShowIcons: (value: boolean) => void,
  setSelectedIcon: (nameIcon:  IconsType) => void,
}
export const IconsForm = ({setSelectedIcon, setShowIcons}: Props) => {

  return (
    <Pressable style={styles.icons} onPress={() => {
      setShowIcons(true);
    }}>
      {/*<FontAwesome5 name="icons" size={24} color={COLORS.light100} />*/}
      {/*<Animated.View style={[styles.iconsOpen, {transform: [{scale}]}]}>*/}
      {/*  {showIcons &&*/}
      {/*      <>*/}
      {/*          <Icons onIconSelected={setSelectedIcon} setShowIcons={setShowIcons} animateHeight={animateHeight}/>*/}
      {/*          <Text onPress={() => {*/}
      {/*            setShowIcons(false);*/}
      {/*            animateHeight(0)*/}
      {/*          }}>X</Text>*/}
      {/*      </>*/}
      {/*  }*/}
      {/*</Animated.View>*/}
      <Icons setSelectedIcon={setSelectedIcon}/>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icons: {
  },
})
