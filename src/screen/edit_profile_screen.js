import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Container, Input, Item, Button, Icon, Right, Label } from 'native-base';



class EditProfile extends React.Component {


  constructor(props) {
    
    super(props)
 
    this.state = {
      Holder: ''
    }
 
  }

  render() {
    console.disableYellowBox=true;
    const { navigation } = this.props;
    const user = (navigation.getParam('user', 'Anonym'));

    return (

      <Container style={{backgroundColor:''}}>
        <View style={styles.content}>
          <View style={styles.User}>
            <Icon name='contact' style={{fontSize:100, color:'#f64747'}}></Icon>
          </View>
          <View style={{alignItems:'center'}}>
          <Item rounded style={styles.input}>
          <Input placeholder={user} onChangeText={(text)=>{this.setState({Holder:text})}} value={this.state.Holder}/>
            </Item>
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
    height: 50,
    backgroundColor: '#f64747',
    borderTopWidth:2,
    borderTopColor:'#f3f1ef',
    justifyContent:'center',
    flexDirection:'row'
  },
  menu2: {
    height: 50,
    backgroundColor: '#f64747',
    borderTopWidth:2,
    borderTopColor:'#f3f1ef',
    justifyContent:'center'
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
    color: 'white',
    marginStart: 10,
  },
  input : {
    borderRadius:10,
    borderColor:'black',
    width:270
  }
})


export default EditProfile;