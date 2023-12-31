import {COLORS, SAID} from "@/assets/styles/styles";
import {ReactNode, useRef} from "react";
import {Animated, Pressable, StyleSheet, Text} from "react-native";

type Props = {
  title?: string,
  onPress: (value?:any) => void,
  children?: ReactNode,
  className?:any,
}
export const Btn = ({title, onPress, children, className}: Props) => {

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.5,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };


  return (
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut} onPress={onPress}>
      <Animated.View style={[styles.container, {opacity: fadeAnim}, className]}>
        {children}
        <Text style={ title ? [styles.text] : null}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.medium,
    borderRadius: SAID.borderLight,
  },
  text: {
    color: COLORS.light100,
    marginHorizontal: 15,
    paddingVertical: 15
  }
})