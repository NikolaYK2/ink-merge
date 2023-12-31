import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {ListType} from "@/features/2-main/ui/Main";
import {COLORS, SAID} from "@/assets/styles/styles";
import {Btn} from "@/common/components/Btn";
import {FONT} from "@/assets/typography/typography";


type Props = {
  list:ListType[],
  item: ListType,
  setList: (obj: any) => void
}
export const List = ({item,setList,list}: Props) => {

  const deleteTaskHandle = () => {
  setList(list.filter(list=> list.id !== item.id))
  }

  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons name={item.image} size={24} color={COLORS.light100}/>
      </View>
      <Text style={styles.text}>
        {item.text}
      </Text>
      <Btn onLongPress={deleteTaskHandle} className={styles.btn}>
        <MaterialCommunityIcons name="delete-forever-outline" size={FONT.fsBig} color={COLORS.error}/>
      </Btn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: COLORS.darkOpacity,
    paddingLeft:10,
    marginHorizontal:10,
    marginVertical:5,
    borderRadius: SAID.borderLight,
  },
  text: {
    flex:1,
    marginLeft: 10,
    color: COLORS.light100,
    fontSize:FONT.fsMedium
  },
  btn:{
    backgroundColor:'transparent',
  }
})