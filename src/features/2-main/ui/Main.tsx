import React, {useState} from 'react';
import {FlatList, View} from "react-native";
import {Form} from "@/features/2-main/ui/form/ui/Form";
import {List} from "@/features/2-main/ui/list/List";
import {IconsType} from "@/features/2-main/ui/form/ui/Icons";


export type ListType = {
  id: string,
  text: string,
  image: IconsType
}
export const Main = () => {

  const [list, setList] = useState<ListType[]>([
    {id: '1', text: 'By milk', image: undefined},
    {id: '2', text: 'Clean car', image: undefined},
    {id: '3', text: 'By potato', image: undefined},
    {id: '4', text: 'Stain milliners', image: undefined},
  ])


  return (
    <View style={{flex:1}}>

      <Form setList={setList} list={list}/>

      <FlatList data={list}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <List item={item}/>
                )}/>
    </View>
  );
};


