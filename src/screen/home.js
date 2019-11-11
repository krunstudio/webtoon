import React from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import  ForYouScreen from './for_you_screen';
import  MyFavouriteScreen from './my_favourite_episode';
import  ProfileScreen from './profile_screen';


export default createMaterialBottomTabNavigator(
    {
      ForYouScreen: { 
        screen: ForYouScreen,
        navigationOptions:{  
          tabBarLabel:'For You',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
              </View>) 
        }  
      },
      MyFavouriteScreen : {
        screen : MyFavouriteScreen,
        navigationOptions:{  
          tabBarLabel:'Favorite',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'heart'}/>  
              </View>) 
        }  
      },
      ProfileScreen: { 
        screen: ProfileScreen,
        navigationOptions:{  
          tabBarLabel:'Profile',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'person'}/>  
              </View>) 
        }  
      }
    },
    {
      initialRouteName: 'ForYouScreen',
      activeColor: '#f64747',
      inactiveColor: 'grey',
      barStyle: { backgroundColor: 'white' },
    }
  );