import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {ListType} from "@/features/2-main/ui/Main";
import {COLORS, SAID} from "@/assets/styles/styles";
import {FONT} from "@/assets/typography/typography";
import {Btn} from "@/common/components/Btn";
import {MaterialIcons} from "@expo/vector-icons";
import {IconsForm} from "@/features/2-main/ui/form/ui/IconsForm";

type Props = {
  list: ListType[],
  setList: (text: any) => void
}


export const Form = ({setList, list}: Props) => {
  const [value, setValue] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [showIcons, setShowIcons] = useState(false)

  const clickHandle = () => {
    if (value !== '' || selectedIcon !== '') {
      setList([{id: value + Date.now(), text: value, image: selectedIcon}, ...list]);
      setValue('');
      setSelectedIcon('');
    }
  }


  return (
    <View style={styles.container}>

      <View style={styles.blockInput}>

        <View style={styles.item}>
          <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder={'What to do?'}/>

          <Text style={styles.iconsInput} onPress={() => {
            setSelectedIcon('');
          }}>{selectedIcon ? '🖼️' + ' x' : ''}</Text>
        </View>

        <Btn title={'ADD'} onPress={clickHandle}>
          <MaterialIcons name="post-add" size={24} color={COLORS.light100}/>
        </Btn>

      </View>

      <IconsForm setSelectedIcon={setSelectedIcon}
                 setShowIcons={setShowIcons}
                 showIcons={showIcons}
                 />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkOpacity,
    padding:10
  },
  blockInput: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: COLORS.light100,
    borderRadius: SAID.borderLight
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
    paddingLeft: 5
  },
  iconsInput: {
    position: 'absolute',
    right: 5,
    top: '15%',
    fontSize: FONT.fsBig,
    color: COLORS.error
  },
})