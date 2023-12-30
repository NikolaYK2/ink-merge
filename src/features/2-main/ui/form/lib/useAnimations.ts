import {useRef} from 'react';
import {Animated} from 'react-native';
import {IconsType} from "@/features/2-main/ui/form/ui/Icons";

export const useAnimation = (icons: IconsType[]) => {

  const animations = icons.map(() => ({
    transformY: useRef(new Animated.Value(0)).current,
    transformX: useRef(new Animated.Value(0)).current,
    opacity: useRef(new Animated.Value(1)).current,
  }));

  const animate = (index: number) => {
    // Сброс значений анимации
    animations[index].transformY.setValue(0);
    animations[index].transformX.setValue(0);
    animations[index].opacity.setValue(1);

    Animated.parallel([
      Animated.timing(animations[index].transformY, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animations[index].transformX, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animations[index].opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return {animations, animate};
};
