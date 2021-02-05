import React from 'react'
import { TouchableOpacity, TouchableHighlight, View, Text, StyleSheet, GestureResponderEvent, Dimensions, Animated } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// lib
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

// screen
import HomeScreen from '../screens/homeScreen'
import SearchScreen from '../screens/searchScreen'
import NotificationScreen from '../screens/notificationScreen'
import MessageScreen from '../screens/messageScreen'
import CreateTweetScreen from '../screens/createTweetScreen'
import TweetScreen from '../screens/tweetScreen'

// components
import ScaleButton from '../components/atoms/scaleButton'

const Stack = createStackNavigator()

const TimelineStackNavigator = () => (
  <Stack.Navigator initialRouteName="Main" headerMode="float" screenOptions={{ headerTitleAlign: 'center' }}>
    <Stack.Screen
      name="Main"
      component={HomeScreen}
      options={{
        headerTitle: () => <AntDesign name="twitter" size={30} color="#1da1f2" />,
        headerLeft:  () => <MaterialIcons style = {{paddingLeft : 10}} name="dehaze" size={30} color="#1da1f2" />,
        headerRight:  () => <MaterialIcons style = {{paddingRight : 10}} name="flare" size={30} color="#1da1f2" />,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="CreateTweet"
      component={CreateTweetScreen}
      options={{
        headerTitle: 'CreateTweet',
        headerBackTitleVisible: false,
      }}
    />

    <Stack.Screen
      name="Tweet"
      component={TweetScreen}
      options={{
        headerTitle: 'Tweet',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
)

const HomeStackNavigator = () => (
  <Stack.Navigator initialRouteName="Main" headerMode="float" screenOptions={{ headerTitleAlign: 'center' }}>
    <Stack.Screen
      name="Main"
      component={TimelineStackNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="CreateTweet"
      component={CreateTweetScreen}
      options={{
        headerTitle: 'CreateTweet',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
)

const SearchStackNavigator = () => (
  <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleAlign: 'center' }}>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerTitle: () => <Text>Search</Text>,
        headerLeft:  () => <MaterialIcons style = {{paddingLeft : 10}} name="dehaze" size={30} color="#1da1f2" />,
        headerRight:  () => <MaterialCommunityIcons style = {{paddingRight : 10}} name="cog-outline" size={30} color="#1da1f2" />,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="CreateTweet"
      component={CreateTweetScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

  const NotificationStackNavigator = () => (
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        headerTitle: () => <Text>Notification</Text>,
        headerLeft:  () => <MaterialIcons style = {{paddingLeft : 10}} name="dehaze" size={30} color="#1da1f2" />,
        headerRight:  () => <MaterialCommunityIcons style = {{paddingRight : 10}} name="cog-outline" size={30} color="#1da1f2" />,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="CreateTweet"
      component={CreateTweetScreen}
      options={{
        headerShown: false,
      }}
    />
    </Stack.Navigator>
  )

  const MessageStackNavigator = () => (
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen
      name="Message"
      component={MessageScreen}
      options={{
        headerTitle: () => <Text>Message</Text>,
        headerLeft:  () => <MaterialIcons style = {{paddingLeft : 10}} name="dehaze" size={30} color="#1da1f2" />,
        headerRight:  () => <MaterialCommunityIcons style = {{paddingRight : 10}} name="cog-outline" size={30} color="#1da1f2" />,
        headerBackTitleVisible: false,
      }}
    />
    </Stack.Navigator>
  )

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeTab"
    tabBarOptions={{ showLabel: false, animationEnabled: true }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        if (route.name === 'HomeTab') {
          return <MaterialCommunityIcons name="home" size={24} color={focused ? '#1da1f2' : 'gray'} />
        }
        if (route.name === 'SearchTab') {
          return <MaterialIcons name="search" size={24} color={focused ? '#1da1f2' : 'gray'} />
        }
        if (route.name === 'NotificationTab') {
          return <MaterialCommunityIcons name="bell-outline" size={24} color={focused ? '#1da1f2' : 'gray'} />
        }
        if (route.name === 'MessageTab') {
          return <MaterialCommunityIcons name="email" size={24} color={focused ? '#1da1f2' : 'gray'} />
        }
      },
      tabBarButton: props => <ScaleButton {...props} />,
      // tabBarBadge: "",
      // tabBarBadgeStyle: {backgroundColor: '#1da1f2'}
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
    <Tab.Screen name="SearchTab" component={SearchStackNavigator} />
    <Tab.Screen name="NotificationTab" component={NotificationStackNavigator} />
    <Tab.Screen name="MessageTab" component={MessageStackNavigator} />
  </Tab.Navigator>
)

export default TabNavigator