import React from 'react';
import {Pressable, StyleSheet} from "react-native";
import {Icons} from "@/features/2-main/ui/form/ui/Icons";


type Props = {
  showIcons: boolean,
  setShowIcons: (value: boolean) => void,
  setSelectedIcon: (nameIcon: string) => void,
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
      <Icons onIconSelected={setSelectedIcon}/>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icons: {
    // position: "relative",
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingVertical: 10,
    // marginTop: 20,
    // backgroundColor: COLORS.lightOpacity,
    // borderRadius: SAID.borderBig,
    // zIndex: 1,
  },
  // iconsOpen: {
  //   position: "absolute",
  //   top: 0,
  //   left: '5%',
  //   width: '90%',
  //   height: 300,
  //   backgroundColor: 'red',
  // },
})
