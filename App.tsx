/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
import { Button, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation(){
  return <Drawer.Navigator screenOptions={{
    headerStyle: {backgroundColor: '#351401'},
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#3f2f25'},
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreen}/>
  </Drawer.Navigator>;
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MealCategories"
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25'},
        }}
      >
        <Stack.Screen
          name="Drawerss"
          component={DrawerNavigation}
          options={{
            title: 'All Categories',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
