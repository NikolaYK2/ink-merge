import React, {useState} from 'react';
import {FlatList, Text, View} from "react-native";

export const Main = () => {

  const [list, setList] = useState([
    {id: '1', text: 'By milk'},
    {id: '2', text: 'Clean car'},
    {id: '3', text: 'By potato'},
    {id: '4', text: 'Stain milliners'},
  ])


  return (
    <View>
      <FlatList data={list}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View>
                    <Text>
                      {item.text}
                    </Text>
                  </View>
                )}
      />
    </View>
  );
};
