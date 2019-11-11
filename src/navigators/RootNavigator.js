import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screen/loginWebtoon';
import ForYouScreen from '../screen/for_you_screen';
import MyFavouriteScreen from '../screen/my_favourite_episode';
import DetailScreen from '../screen/detail_webtoon_screen';
import DetailEpisodeScreen from '../screen/detail_episode';
import ProfileScreen from '../screen/profile_screen';
import EditProfileScreen from '../screen/edit_profile_screen';
import MyCreationScreen from '../screen/creationScreen';
import CreateWebtoonScreen from '../screen/createWebtoon';
import CreateEpisodeScreen from '../screen/createEpisode';
import EditWebtoonScreen from '../screen/edit_webtoon';
import DetailEditScreen from '../screen/detail_edit_episode';
import HomeScreen from '../screen/home';
import { Icon } from 'native-base';
import {Share,Text,TouchableOpacity} from 'react-native';

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions : {
      header : null
    }
  },  
  Detail: {
    screen: DetailScreen,
    navigationOptions : {
      headerStyle: {
        backgroundColor:'#f64747',
      },
      // headerRight: <Icon onPress={onShare} light name='share' style={{margin:15, color:'white'}}/>,
      headerTintColor:'white'
    }
  },
  ForYou : {
    screen: ForYouScreen,
    navigationOptions : {
      header : null
    }
  },
  MyFavourite : {
    screen: MyFavouriteScreen,
    navigationOptions : {
      header : null
    }
  },
  Home : {
    screen: HomeScreen,
    navigationOptions : {
      header : null
    }
  },
  DetailEpisode: {
    screen: DetailEpisodeScreen,
    navigationOptions : {
      headerStyle: {
        backgroundColor:'#f64747',
      },
      headerRight: <Icon onPress={onShare} light name='share' style={{margin:15, color:'white'}}/>,
      headerTintColor:'white'
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
      navigationOptions : {
        header : null
        }
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions : {
      headerStyle: {
        backgroundColor:'#f64747',
      },
      headerTintColor:'white',
      headerTitle: <Text style={{fontWeight:'bold', fontSize:18, color:'white' }}>Profile</Text>,
      headerRight: <Icon onPress={() => this.props.navigation.navigate('EditProfile')} light name='create' style={{margin:15, color:'white'}}/>
  },
  },
  MyCreation: {
    screen: MyCreationScreen,
      navigationOptions : {
        headerStyle: {
          backgroundColor:'#f64747',
        },
        headerTintColor:'white',
        headerTitle: <Text style={{fontWeight:'bold', fontSize:18, color:'white' }}>My Creation</Text>,
      },
  },
  CreateWebtoon: {
    screen: CreateWebtoonScreen,
      navigationOptions : {
        headerStyle: {
          backgroundColor:'#f64747',
        },
        headerTintColor:'white',
        headerTitle: <Text style={{fontWeight:'bold', fontSize:18, color:'white' }}>Create Webtoon</Text>,
        headerRight: <Icon onPress={() => this.props.navigation.navigate('Home')} light name='checkmark' style={{margin:15, color:'white'}}/>
    },
  },
  CreateEpisode: {
    screen: CreateEpisodeScreen,
      navigationOptions : {
        headerStyle: {
          backgroundColor:'#f64747',
        },
        headerTintColor:'white',
        headerTitle: <Text style={{fontWeight:'bold', fontSize:18, color:'white' }}>Create Episode</Text>,
        headerRight: <Icon light name='checkmark' style={{margin:15, color:'white'}}/>
    },
  },
  EditWebtoon: {
    screen: EditWebtoonScreen,
      navigationOptions : {
        headerStyle: {
          backgroundColor:'#f64747',
        },
        headerTintColor:'white',
        headerTitle: <Text style={{fontWeight:'bold', fontSize:18, color:'white' }}>Edit Webtoon</Text>,
        headerRight: <Icon light name='checkmark' style={{margin:15, color:'white'}}/>
    },
  },
  DetailEdit: {
    screen: DetailEditScreen,
      navigationOptions : {
        headerStyle: {
          backgroundColor:'#f64747',
        },
        headerTintColor:'white',
        headerTitle: <Text style={{fontWeight:'bold', fontSize:18, color:'white' }}>Edit Webtoon</Text>,
        headerRight: <Icon light name='checkmark' style={{margin:15, color:'white'}}/>
    },
  },
});

export default createAppContainer(RootStack);