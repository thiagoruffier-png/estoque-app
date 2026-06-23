import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CadastroScreen from '../screens/CadastroScreen';
import EstoqueScreen from '../screens/EstoqueScreen';
import SobreScreen from '../screens/SobreScreen';

const Tab = createBottomTabNavigator();


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#4F46E5',
          tabBarInactiveTintColor: '#94A3B8',
          tabBarStyle: {
            paddingTop: 6,
            height: 64,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'Cadastrar') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Estoque') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Sobre') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Cadastrar" component={CadastroScreen} />
        <Tab.Screen name="Estoque" component={EstoqueScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
