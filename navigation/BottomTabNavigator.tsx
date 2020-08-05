import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, TabFourParamList, TabFiveParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import { Image } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import OrdersScreen from '../screens/OrdersScreen';
import HelpScreen from '../screens/HelpScreen';
import InboxScreen from '../screens/InboxScreen';
import AccountScreen from '../screens/AccountScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors['light'].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Image source={useIsFocused() ? require("./../assets/icon/home-active.png") : require("./../assets/icon/home.png")} />,
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Image source={useIsFocused() ? require("./../assets/icon/order-active.png") : require("./../assets/icon/order.png")} />,
        }}
      />
      <BottomTab.Screen
        name="Help"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Image source={useIsFocused() ? require("./../assets/icon/help-active.png") : require("./../assets/icon/help.png")} />,
        }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <Image source={useIsFocused() ? require("./../assets/icon/inbox-active.png") : require("./../assets/icon/inbox.png")} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color }) => <Image source={useIsFocused() ? require("./../assets/icon/account-active.png") : require("./../assets/icon/account.png")} />,
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
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Gojek', headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={OrdersScreen}
        options={{ headerTitle: 'Orders' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={HelpScreen}
        options={{ headerTitle: 'Chat' }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={InboxScreen}
        options={{ headerTitle: 'Inbox' }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator<TabFiveParamList>();

function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="TabFiveScreen"
        component={AccountScreen}
        options={{ headerTitle: 'Account' }}
      />
    </TabFiveStack.Navigator>
  );
}