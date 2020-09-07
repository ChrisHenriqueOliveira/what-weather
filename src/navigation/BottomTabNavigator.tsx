import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Home from '../../src/screens/Home';
import CityInfo from '../../src/screens/CityInfo';

import About from '../../src/screens/About';

import { BottomTabParamList, HomeParamList, AboutParamList } from '../../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={AboutNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-help-circle" color={color} />,
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

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={
          { 
            headerShown: false,
          }
        }
      />
      <HomeStack.Screen
        name="CityInfo"
        component={CityInfo}
        options={
          { 
            headerShown: true,
          }
        }
      />
    </HomeStack.Navigator>
  );
}

const AboutStack = createStackNavigator<AboutParamList>();

function AboutNavigator() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="About"
        component={About}
        options={
          { 
            headerShown: false,
          }
        }
      />
    </AboutStack.Navigator>
  );
}