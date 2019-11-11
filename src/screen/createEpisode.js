import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const DATA = [
  'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
  'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
  'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',

]

function AddFav( title, x ) {
    return (
      <View onPress={() => x.navigate('DetailEpisode')}> 
        <View onPress={() => x.navigate('DetailEpisode')} style={styles.item}>
          <Image onPress={() => x.navigate('DetailEpisode')} source={{uri: title }}
          style={{width: 75, height: 80, borderWidth:2, borderColor:'grey'}} />
          <View style={styles.list}>
            <Text onPress={() => x.navigate('DetailEpisode')}>1.Cover.png</Text>
            <Button style={{backgroundColor:'#f64747', height:30, borderRadius:5, marginTop:20}}>
            <Text>Delete</Text>
            </Button>
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
  render() {
    console.disableYellowBox=true;
    return (
      <Container style={{backgroundColor:''}}>
      <Content>
        <View style={styles.content}>     
        <View style={styles.content}>
        <Label style={{ fontWeight:'bold'}}>Title</Label>
        <View style={{alignItems:'center'}}>
          <Item rounded style={styles.input}>
            <Input/>
            </Item>
          </View>
          
        </View>

    <SafeAreaView> 
      <Label style={{marginStart:20, fontWeight:'bold'}}>Add Images</Label>  
      <FlatList
      
        data={DATA}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        keyExtractor={item => item}
      />
    </SafeAreaView>
        </View>
        <View>
        <Button onPress={() => this.props.navigation.navigate('CreateEpisode')} style={styles.Button} ><Text style={{color:'white'}} > + Image</Text></Button>
        </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 8,
    marginHorizontal: 10,
    flexDirection:'row'
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
  Button: {
    height: 55,
    margin:15,
    borderRadius:10,
    backgroundColor:'#f64747',
    justifyContent:'center',
  }
});

export default DetailScreen;
