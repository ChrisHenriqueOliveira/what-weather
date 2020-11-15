import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Home from '../screens/Home';
import CityInfo from '../../src/screens/CityInfo';

import Favorites from '../../src/screens/Favorites';

import { BottomTabParamList, SearchParamList, FavoritesParamList } from '../../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Search"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-heart" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more Favorites this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Home}
        options={
          { 
            headerShown: false,
          }
        }
      />
      <SearchStack.Screen
        name="CityInfo"
        component={CityInfo}
        options={
          { 
            headerShown: true,
          }
        }
      />
    </SearchStack.Navigator>
  );
}

const FavoritesStack = createStackNavigator<FavoritesParamList>();

function FavoritesNavigator() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name="Favorites"
        component={Favorites}
        options={
          { 
            headerShown: false,
          }
        }
      />
      <FavoritesStack.Screen
        name="CityInfo"
        component={CityInfo}
        options={
          { 
            headerShown: false,
          }
        }
      />
    </FavoritesStack.Navigator>
  );
}