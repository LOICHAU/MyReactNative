/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TextInput, Button, StyleSheet } from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
    <Text style={{position: 'absolute', top: 70, left: 50, fontSize: 40}}>The Weather App</Text>
    <TextInput
            style={{
            paddingHorizontal:10,
            position: 'absolute',
            top: 150,
            left: 27.5,
            fontSize: 18,
            height: 60,
            width: 360,
            color: 'black',
            borderColor: 'silver',
            backgroundColor: 'white',
            borderWidth: 1
            }}
            placeholder="Latitude"
            onChangeText={text => setText(text)}
            defaultValue={text}
    />
    <TextInput
            style={{
            paddingHorizontal:10,
            position: 'absolute',
            top: 210,
            left: 27.5,
            fontSize: 18,
            height: 60,
            width: 360,
            color: 'black',
            borderColor: 'silver',
            backgroundColor: 'white',
            borderWidth: 1
            }}
            placeholder="Longitude"
            onChangeText={text1 => setText1(text1)}
            defaultValue={text1}
    />
    <Button
            title="S U B M I T"
            onPress={() => <fetching lat = {text}/>}
    />
    </View>
  );
};

const fetching =(lat)=> {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
ß
    const url = 'http://api.openweathermap.org/data/2.5/air_pollution?lat='+
      {lat} + '&lon=50&appid=08e5a19eb67b152c39695604f761586e';
    useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json.list))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);
    return (
    <View style = {{flex: 1, alignItem:'center'}}>
    {isLoading ? <ActivityIndicator/> : (
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
        <Text style={{position: 'absolute', top: 400, left: 200}}>{item.dt}</Text>
        )}
      />
    )}
    </View>
            );
};


const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 1,
    backgroundColor: "grey",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 300,
    left: 80
    
  },
  buttonText: {
    marginHorizontal: 45,
    color: "#fff",
    fontWeight: "200",
    paddingHorizontal: 20,
    fontSize: 20,
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

export default App;
