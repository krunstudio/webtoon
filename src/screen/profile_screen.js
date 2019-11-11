import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { Container, Input, Item, Button, Icon, Right, Header, Left, Card, CardItem, Body } from 'native-base';
import * as actionWebtoons from '../redux/actions/actionWebtoon'
import { connect } from 'react-redux'


class ProfileScreen extends React.Component {

  render() {
    const dataLogin = this.props.loginLocal.login
    console.disableYellowBox=true;
    return (

      <Container style={{backgroundColor:''}}>
        <View style={styles.content}>
          <Header style={{backgroundColor:'#f64747'}}>
              <Left><Text style={{color:'white', fontSize:20}}>Profile</Text></Left>
              <Right><Icon style={{color:'white'}} onPress={() => this.props.navigation.navigate('EditProfile', {
              user: user,
              otherParam: 'anything you want here',
            })} name='create'/></Right>
          </Header>
                <View style={styles.User}>
                  <Icon name='contact' style={{fontSize:100, color:'#f64747'}}></Icon>
                  <Text style={styles.YourName}>{dataLogin.user.name}</Text>
                </View>  
            <View>        
            <Card>
              <CardItem>
                <Body>
                  <View style={styles.menu1}>
                  <View style={{flex:1, alignItems:'flex-start', justifyContent:'center'}}>
                  <Text onPress={() => this.props.navigation.navigate('MyCreation')}  style={styles.Text}>My Webtoon Creation</Text>
                  </View>
                  <View style={{justifyContent:'center', marginEnd:10}}>
                  <Icon onPress={() => this.props.navigation.navigate('MyCreation')} name='arrow-dropright-circle' style={{color:'red'}} />
                  </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <View style={styles.menu2}>
                  <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.Text}>Log Out</Text>
                  </View>
            </Body>
            </CardItem>
            </Card>
          </View>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex : 1,
  },
  menu1: {
    height:20,
    justifyContent:'center',
    flexDirection:'row'
  },
  menu2: {
    justifyContent:'center',
    height:20
  },
  User: {
    alignItems: 'center',
    margin: 10,
    paddingBottom: 50
  },
  YourName : {
    fontSize: 25,
  },
  Text : {
    color: 'black',
    marginStart: 10,
  }
})



const mapStateToProps = state => {
  return {
    myCreationLocal: state.myCreation,
    loginLocal: state.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMyCreation:(id)=> dispatch(actionWebtoons.handleGetMyCreation(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);