import {Animated, StyleSheet, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import {COLORS} from "@/assets/styles/styles";
import {useAnimation} from "@/features/2-main/ui/form/lib/useAnimations";
import {Btn} from "@/common/components/Btn";
import {FONT} from "@/assets/typography/typography";

const icons = ['food', 'car', 'home', 'format-clear'] as const;

export type IconsType = typeof icons[number] | undefined;

type Props = {
  setSelectedIcon: (name: IconsType) => void
}
export const Icons = ({setSelectedIcon,}: Props) => {

  const {animations, animate} = useAnimation(icons);

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      {icons.map((iconName, index) => {
        const isFirstChild = index === 0 ? styles.borderL : index === icons.length - 1 ? styles.borderR : styles.icons;
        return (
          <Btn
            className={[styles.icons, isFirstChild]} key={index}
            onPress={() => {
              setSelectedIcon(iconName);
              animate(index)
            }}
          >
            <MaterialCommunityIcons name={iconName} size={FONT.fsBig} color={COLORS.light100}/>
            <Animated.View style={[styles.anim, {
              transform: [
                {translateY: animations[index].transformY},
                {translateX: animations[index].transformX}
              ],
              opacity: animations[index].opacity
            }]}>
              <MaterialCommunityIcons name={iconName} size={FONT.fsBig} color={COLORS.light100}/>
            </Animated.View>

          </Btn>
        );
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  icons: {
    position: 'relative',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    backgroundColor: COLORS.lightOpacity,
    zIndex: 1,
    marginHorizontal: 2,
  },
  borderL: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25
  },
  borderR: {
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25
  },
  anim: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    top: 0,
    right: 0,
    zIndex: -1
  }
})

//   <Pressable style={[styles.icons, isFirstChild]} key={index} onPress={() => {
//   setSelectedIcon(iconName);
//   animate(index);
// }}>
// <MaterialCommunityIcons name={iconName} size={24} color={COLORS.light100}/>
//
// <Animated.View style={[styles.anim, {
//   transform: [
//     {translateY: animations[index].transformY},
//     {translateX: animations[index].transformX}
//   ],
//   opacity: animations[index].opacity
// }]}>
//   <MaterialCommunityIcons name={iconName} size={24} color={COLORS.light100}/>
// </Animated.View>
// </Pressable>