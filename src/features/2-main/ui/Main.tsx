import React, {useState} from 'react';
import {FlatList, Text, View} from "react-native";
import {Form} from "@/common/components/Form";
import {MaterialCommunityIcons} from "@expo/vector-icons";


export type ListType = {
  id: string,
  text: string,
  image: any
}
export const Main = () => {

  const [list, setList] = useState<ListType[]>([
    {id: '1', text: 'By milk', image: null},
    {id: '2', text: 'Clean car', image: null},
    {id: '3', text: 'By potato', image: null},
    {id: '4', text: 'Stain milliners', image: null},
  ])

  console.log(list)


  return (
    <View>
      <Form setList={setList} list={list}/>
      <FlatList data={list}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View>
                    <View>
                      <MaterialCommunityIcons name={item.image} size={24} color="black"/>
                    </View>
                    <Text>
                      {item.text}
                    </Text>
                  </View>
                )}
      />
    </View>
  );
};
