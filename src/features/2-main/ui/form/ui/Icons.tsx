import {Animated, StyleSheet, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import {COLORS} from "@/assets/styles/styles";
import {useAnimation} from "@/features/2-main/ui/form/lib/useAnimations";

type Props = {
  onIconSelected: (name: string) => void
}
export type IconsType = {
  name: 'food' | 'car' | 'home'
}
export const Icons = ({onIconSelected,}: Props) => {
  const icons: IconsType[] = [{name: 'food'}, {name: 'car'}, {name: 'home'}];

  const {animations,animate} = useAnimation(icons);

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      {icons.map((iconName, index) => {
        const isFirstChild = index === 0 ? styles.borderL : index === icons.length - 1 ? styles.borderR : styles.icons;
        return (
          <TouchableOpacity style={[styles.icons, isFirstChild]} key={index} onPress={() => {
            onIconSelected(iconName.name);
            animate(index);
          }}>
            <MaterialCommunityIcons name={iconName.name} size={24} color={COLORS.light100}/>

            <Animated.View style={[styles.anim, {
              transform: [
                {translateY: animations[index].transformY},
                {translateX: animations[index].transformX}
              ],
              opacity: animations[index].opacity
            }]}>
              <MaterialCommunityIcons name={iconName.name} size={24} color={COLORS.light100}/>
            </Animated.View>

          </TouchableOpacity>
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
    bottom: '35%',
    width: '100%',
    height: '100%',
    // backgroundColor: COLORS.lightOpacity,
    zIndex: -1
  }
})