import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HugoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Meu amigo Enzo, eu confio nele pois passei os meus dois anos até agora com ele e ele faz as lições e os trabalhos mesmo que isso possa demorar</Text>
      <Text>Seria maneiro o meu colega imitar um avião</Text>
      <Button
        title="Enzo meu colega"
        onPress={() => navigation.navigate('Enzo')} />
    </View>
  );
}

function EnzoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Confio no meu amigo Hugo pois ele esteve comigo desde o inicio do ano me ajudando principalmente no Primeiro ano</Text>
      <Text>Seria interessante ver o Hugo imitando </Text>
      <Button
        title="Porquê não voltar para o Enzo"
        onPress={() => navigation.push('Enzo')}
      />
      <Button title="Ir para home" onPress={() => navigation.navigate('Home')} />
      <Button title="Voltar para o Enzo" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Hugo" component={HugoScreen} />
        <Stack.Screen name="Enzo" component={EnzoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
