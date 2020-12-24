/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity} from "react-native-gesture-handler";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          component={FirstScreen}
        />
        <Stack.Screen name="Welcome" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const AppButton1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer1}>
    <Text style={styles.appButtonText1}>{title}</Text>
  </TouchableOpacity>
);

const FirstScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  return (
          <View style={{ flex: 1, paddingTop: 200, justifyContent: 'center', alignItems: "center" , backgroundColor: "white", flexDirection:'row'}}>
          <Text style={styles.white1}>The weather App</Text>
          <TextInput
                  style={{
                    paddingHorizontal:10,
                    position: 'absolute',
                    top: 170,
                    fontSize: 18,
                    height: 60,
                    width: 360,
                    color: 'silver',
                    borderColor: 'silver',
                    backgroundColor: 'white',
                    borderWidth: 1
                  }}
                  placeholder="Name"
                  onChangeText={text => setText(text)}
                  defaultValue={text}
          />
          <Text style={styles.white1}> </Text>
          <TextInput
                  style={{
                    paddingHorizontal:10,
                    position: 'absolute',
                    top: 230,
                    fontSize: 18,
                    height: 60,
                    width: 360,
                    color: 'black',
                    borderColor: 'silver',
                    backgroundColor: 'white',
                    borderWidth: 1
                  }}
                  placeholder="Email"
                  onChangeText={text => setText(text)}
                  defaultValue={text}
          />
          <View>
          <AppButton
            title="C R E A T E     A C C O U N T"
            onPress={() =>
              navigation.navigate('Welcome', { name: 'Jane' })
            }
          />
          <View style={{paddingLeft: 0, alignItems: "center", flexDirection:'row'}}>
          <Text style={{paddingTop: 15, fontSize:15}}>By signing up you agree to the </Text>
          
          <Text style={styles.white3}>and agree to receive updates from weather. You</Text>
          <Text style={styles.white2}>can unsubcribe anytime.</Text>
          <AppButton1
            title="Term & Conditions"
            onPress={() =>
              navigation.navigate('Welcome', { name: 'Jane' })
            }
          />
          </View>
          </View>
          </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
    return (
            <View style={{ flex: 1, paddingTop: 200, alignItems: "center" , backgroundColor: "white"}}>
            <Image
            source={require('./Alo.png')}
              style={styles.image}
            />
            <Text style={{position: 'absolute', top: 350, fontWeight: "200", fontSize:40}}>You've got mail</Text>
            <Text style={{paddingTop: 210, paddingHorizontal: 0, fontSize: 18}}>An magic link to access your account</Text>
            <Text style={{paddingTop: 5, paddingRight: 120, fontSize: 18}}>has been sent to </Text>
            <Text style={{position: 'absolute', top: 437, paddingLeft: 158, fontSize: 17.5,color: 'orange', fontWeight: 'bold'}}>you@gmail.com </Text>
            <Text style={{position: 'absolute', bottom: 280, fontSize:18}}>Open the link in your email to continue</Text>
            <Text style={{position: 'absolute', bottom: 150, fontSize:18}}>Haven't received an email? Please check</Text>
            <Text style={{position: 'absolute', bottom: 125,paddingRight: 180, fontSize:18}}>your junk folder or</Text>
            <Text style={{position: 'absolute', bottom: 125,paddingLeft: 155, fontSize:18, textDecorationLine: 'underline'}}>request another email</Text>
            </View>
            );
};


const styles = StyleSheet.create({
  image:{
    position: 'absolute',
    top: 100,
    width: 240,
    height:200
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "grey",
    borderRadius: 6,
    paddingVertical: 20,
    paddingHorizontal: 12,
    
  },
  appButtonText: {
    marginHorizontal: 45,
    color: "#fff",
    fontWeight: "200",
    paddingHorizontal: 20,
    fontSize: 18,
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonContainer1: {
    paddingTop: 15,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 6,

  },
  appButtonText1: {
    color: "black",
    paddingHorizontal: 0,
    fontSize: 14.5,
    textDecorationLine: 'underline'
  },
  white1: {
    color: 'black',
    fontSize: 25,
    padding: 60,
    position: 'absolute',
    top: 0,
  },
  white3: {
    color: 'black',
    fontSize: 15,
    padding: 40,
    paddingHorizontal: 0,
    position: 'absolute',
    top: 0,
  },
  white2: {
  color: 'black',
  fontSize: 15,
  padding: 60,
  paddingHorizontal: 0,
  position: 'absolute',
  top: 0,
  },
});



export default App;
