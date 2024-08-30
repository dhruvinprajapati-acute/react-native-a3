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

const Stack = createNativeStackNavigator();

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
          name="MealCategories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
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
