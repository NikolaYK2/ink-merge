import React, {useRef, useState} from 'react';
import {Animated, Button, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {ListType} from "@/features/2-main/ui/Main";
import {Icons} from "@/common/components/Icons";


type Props = {
  list: ListType[],
  setList: (text: any) => void
}


export const Form = ({setList, list}: Props) => {
  const [value, setValue] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [showIcons, setShowIcons] = useState(false)
  const scale = useRef(new Animated.Value(0)).current

  const clickHandle = () => {
    if (value !== '' || selectedIcon !== '') {
      setList([{id: value + Date.now(), text: value, image: selectedIcon}, ...list]);
      setValue('');
      setSelectedIcon('');
    }
  }

  const animateHeight = (toValue: number) => {
    Animated.timing(scale, {
      toValue, // Значение, до которого анимируется высота
      duration: 300, // Продолжительность анимации в миллисекундах
      useNativeDriver: false, // Используем нативный драйвер
    }).start(); // Запускаем анимацию
  };

  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue} placeholder={'What to do?'}/>

      <View>
        <Text style={{color: 'red'}} onPress={() => {setSelectedIcon(''); }}>{selectedIcon ? '🖼️' + 'x' : ''}</Text>
      </View>

      <Pressable style={styles.icons} onPress={() => {setShowIcons(true);animateHeight(1)}}>
        <Animated.View style={[styles.iconsOpen, {transform:[{scale}]}]}>
          {showIcons &&
              <>
                  <Icons onIconSelected={setSelectedIcon} setShowIcons={setShowIcons}/>
                  <Text onPress={() => {setShowIcons(false); animateHeight(0)}}>X</Text>
              </>
          }
        </Animated.View>
      </Pressable>

      <Button title={'add'} onPress={clickHandle}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  icons: {
    position: "relative",
    height: 20,
    backgroundColor: 'green',
    zIndex: 1,
  },
  iconsOpen: {
    position: "absolute",
    top: 0,
    left: '5%',
    width: '90%',
    height: 300,
    backgroundColor: 'red',
  }

})