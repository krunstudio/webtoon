import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import * as actionWebtoon from '../redux/actions/actionWebtoon'
import { connect } from 'react-redux'
import Moment from 'moment'


const DATA = [
  'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
  'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
  'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',

]

function AddFav( title, x ) {
  return (
    <View onPress={() => x.navigate('DetailEpisode')}> 
      <View onPress={() => x.navigate('DetailEpisode')} style={styles.item}>
        <Image source={{uri: title.image }} style={styles.Image} />
        <View style={styles.list}>
          <Text onPress={() => x.navigate('EditWebtoon',{titleWebtoon:title.title})} style={styles.episodeTitle}>{title.title}</Text>
          <Text onPress={() => x.navigate('EditWebtoon',{titleWebtoon:title.title})} style={styles.episode}>{Moment(title.updatedAt).format('LL')}</Text>
        </View>
      </View>
    </View>
  );
}


function Fav(title) {
  return (
    <View> 
      <View style={styles.FavItem}>
        <Image source={{uri: title}}
        style={{width: 100, height: 100, borderWidth:2, borderColor:'#f64747'}} />
        <View style={styles.ListFav}>
          <Text>Judul Webtoon</Text>
        </View>
      </View>
    </View>
  ); 
}

class DetailScreen extends React.Component {

  async componentDidMount(){
    const { navigation } = this.props;
    const dataLogin = this.props.loginLocal.login
    const webtoon_id = navigation.getParam('webtoon_id', 'NO-ID');
    await this.props.getUpdateWebtoon(dataLogin.user.id,webtoon_id)
  }

  render() {
    Moment.locale(); 
    const updateWebtoon = this.props.updateWebtoonLocal.updateWebtoon
    console.disableYellowBox=true;
    return (
      <Container style={{backgroundColor:''}}>
      <Content>
        <View style={styles.content}>     
        <View style={styles.content}>
        <Label style={{ fontWeight:'bold', marginTop:15}}>Title</Label>
        <View style={{alignItems:'center'}}>
          <Item rounded style={styles.input}>
            <Input placeholder='Add Title'/>
            </Item>
          </View>
          
        </View>

        <SafeAreaView>  
        <Label style={{marginStart:10, fontWeight:'bold'}}>Episode</Label>
        <FlatList

        data={updateWebtoon}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        keyExtractor={item => item}
      />
    </SafeAreaView>
        </View>
        <View>
        <Button style={styles.Button1} ><Text style={{color:'black'}} > + Add Episode</Text></Button>
        <Button style={styles.Button2} ><Text style={{color:'white'}} > Delete Episode</Text></Button>
        </View>
        </Content>
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
    marginTop: 8,
    marginHorizontal: 15

  },
  title: {
    fontSize: 32,
  },
  favorite: {
    marginTop:1,
    height:20,
    justifyContent: 'center',
    borderRadius: 1,
    backgroundColor:'#f64747'
  },
  Image : {
    width: 40,
     height: 45,
     borderRadius:3 
  },
  list: {
    marginStart: 15,
  },
  ListFav: {
    textAlign:'center'
  },content: {
    flex : 1,
    margin:10
  },
  input: {
    height: 40,
    margin:15,
    borderRadius:10,
    borderWidth:2,
    borderColor:'#f64747',
  },
  icon: {
    marginEnd:10,
    color:'grey'
  },
  Button1: {
    height: 55,
    marginBottom:15,
    marginHorizontal:20,
    borderRadius:10,
    backgroundColor:'#eeeeee',
    justifyContent:'center',
  },
  Button2: {
    height: 55,
    marginBottom:15,
    marginHorizontal:20,
    borderRadius:10,
    backgroundColor:'#f64747',
    justifyContent:'center',
  }
});

const mapStateToProps = state => {
  return {
    updateWebtoonLocal: state.updateWebtoon,
    loginLocal: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUpdateWebtoon:(user_id,webtoon_id)=> dispatch(actionWebtoon.handleGetUpdateWebtoon(user_id,webtoon_id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailScreen);
