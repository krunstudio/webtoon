import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text, Fab } from 'native-base';
import * as actionWebtoons from '../redux/actions/actionWebtoon'
import { connect } from 'react-redux'
import Moment from 'moment'




function AddFav( title, x ) {
  return (
    <View onPress={() => x.navigate('DetailEpisode')}> 
      <View onPress={() => x.navigate('DetailEpisode')} style={styles.item}>
      <TouchableOpacity onPress={() => x.navigate('EditWebtoon', {
              titleWebtoon: title.title,
              user_id: title.created_by,
              webtoon_id: title.id,
              otherParam: 'anything you want here',
            })}>
        <Image source={{uri: title.image }} style={styles.Image} />
        </TouchableOpacity>
        <View style={styles.list}>
          <Text onPress={() => x.navigate('EditWebtoon',{titleWebtoon:title.title})} style={styles.episodeTitle}>{title.title}</Text>
          <Text onPress={() => x.navigate('EditWebtoon',{titleWebtoon:title.title})} style={styles.episode}>{Moment(title.updatedAt).format('LL')}</Text>
        </View>
      </View>
    </View>
  );
}

class CreationScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('titleWebtoon', 'No Title'),
    };
  };

  async componentDidMount(){
    const dataLogin = this.props.loginLocal.login
    await this.props.getMyCreation(dataLogin.user.id)
     }

  render() {
    Moment.locale(); 
    const myCreation = this.props.myCreationLocal.myCreation
    console.disableYellowBox=true;
    return (
      <Container style={{backgroundColor:''}}>
      <Content>    
        <View style={styles.content}>
        </View>

      <SafeAreaView>
        <FlatList
          data={myCreation}
          renderItem={({ item }) => AddFav(item , this.props.navigation)}
          keyExtractor={item => item}
        />
      </SafeAreaView>
        </Content>
        <View>
        <Fab onPress={() => this.props.navigation.navigate('CreateWebtoon')} position='bottomRight' style={{backgroundColor:'#f64747'}}><Icon name='add'/></Fab>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  item: {
    padding: 4,
    marginHorizontal: 10,
    flexDirection:'row',
    borderBottomWidth:0.3,
    borderBottomColor:'grey'
  },
  FavItem: {
    backgroundColor: 'white',
    padding: 5,
    marginTop: 8,
    marginHorizontal: 2,
    marginStart: 10
  },
  title: {
    fontSize: 32,
  },
  favorite: {
    marginTop:1,
    height:20,
    justifyContent: 'center',
    borderRadius: 1
  },
  list: {
    marginStart: 15,
  },
  ListFav: {
    textAlign:'center'
  },
  content: {
    flex : 1,
    margin:10,
    marginTop: 30
  },
  input: {
    height: 40,
    marginBottom:15,
    borderRadius:15
  },
  icon: {
    marginEnd:10
  },
  Label: {
    flex:5,
    textAlignVertical:'center',
    justifyContent:'center',
    color: 'white',
    fontWeight:'bold',
    marginLeft:10
  },detail: {
    height: 200,
    borderWidth:2,
  },
  episode : {
    marginTop:2,
    color:'grey', 
    fontSize:13
  },
  Image : {
    width: 40,
     height: 45,
     borderRadius:3 
  },
  episodeTitle : {
    marginTop:2, 
    fontSize:15,
    fontWeight:'bold'
  }
});

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
)(CreationScreen);

