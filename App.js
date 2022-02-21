import * as React from 'react';
import { Text, View, TextInput, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createTabNavigator } from '@react-navigation/tab';
import { createDrawerNavigator } from '@react-navigation/drawer';

//const Tab = createBottonTabNavigator();
const Drawer = createDrawerNavigator();

function Principal() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Cadastro' component={Cadastro}/>
        <Drawer.Screen name='Listar' component={Listar}/>
      </Drawer.Navigator>
    </NavigationContainer>
    
  )
};

function Cadastro () {
  return (
    <View>
      <Text>Cadastro de clientes</Text>
      <Text></Text>
      <Text>Nome:</Text>
      <TextInput/>
      <Text>Telefone:</Text>
      <TextInput/>
      <Button title='Salvar'></Button>
    </View>
  )
};

function Listar () {
  return (
    <View>
      <Text>Listar</Text>
      <Text></Text>
      <Text>João Silva</Text>
      <Text>(11)2223-2342</Text>
      <Text></Text>
      <Text>Maria Silva</Text>
      <Text>(11)4444-3433</Text>
      <Text></Text>
      <Text>Arnaldo Neto</Text>
      <Text>(11)4454-5565</Text>
    </View>
  )
};


export default Principal;