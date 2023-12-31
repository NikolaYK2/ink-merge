import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import {ListType} from "@/features/2-main/ui/Main";
import {COLORS, SAID} from "@/assets/styles/styles";
import {FONT} from "@/assets/typography/typography";
import {Btn} from "@/common/components/Btn";
import {MaterialIcons} from "@expo/vector-icons";
import {Icons, IconsType} from "@/features/2-main/ui/form/ui/Icons";


const bcImage = require('@/assets/img/bcApp/bc.jpg');

type Props = {
  list: ListType[],
  setList: (text: any) => void
}
export const Form = ({setList, list}: Props) => {
  const [value, setValue] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<IconsType>();
  // const [showIcons, setShowIcons] = useState(false)

  const addTaskHandle = () => {
    if (value !== '' || selectedIcon !== undefined) {
      setList([{id: value + Date.now(), text: value, image: selectedIcon}, ...list]);
      setValue('');
      setSelectedIcon(undefined);
    }
  }


  return (

    <View style={styles.container}>
      {/*Background -------------------------------------------*/}
      <ImageBackground source={bcImage} style={styles.bc1}/>
      <View style={styles.bc2}/>
      {/*Background -------------------------------------------*/}

      <View style={styles.blockInput}>

        <View style={styles.item}>
          <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder={'What to do?'}/>

          <Text style={styles.iconsInput} onPress={() => {
            setSelectedIcon(undefined);
          }}>{selectedIcon ? '🖼️' + ' x' : ''}</Text>
        </View>

        <Btn title={'ADD'} onPress={addTaskHandle}>
          <MaterialIcons name="post-add" size={24} color={COLORS.light100}/>
        </Btn>

      </View>

      <Icons setSelectedIcon={setSelectedIcon}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: COLORS.darkOpacity,
    padding: 10,
  },
  bc1: {
    position: 'absolute',
    top: '-35%',
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
  },
  bc2: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
    backgroundColor: COLORS.darkOpacity,

  },
  blockInput: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: COLORS.light100,
    borderRadius: SAID.borderLight,
  },
  item: {
    position: 'relative',
    marginBottom: 10
  },
  input: {
    fontSize: FONT.fsMedium,
    backgroundColor: COLORS.dark100,
    borderRadius: SAID.borderLight,
    paddingVertical: 5,
    paddingRight: 45,
    paddingLeft: 5,
  },
  iconsInput: {
    position: 'absolute',
    right: 5,
    top: '15%',
    fontSize: FONT.fsBig,
    color: COLORS.error
  },
})