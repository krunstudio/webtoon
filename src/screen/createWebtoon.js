import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const DATA = [
  {
    url : 'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
    title : 'Episode 1 : Stone World',
    lastUpdate : '05 juli 2019'
  },
  {
    url : 'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
    title : 'Episode 2 : King of the Stone World',
    lastUpdate : '12 juli 2019'
  },
  {
    url : 'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
    title : 'Episode 3 : Weapons of Science',
    lastUpdate : '19 juli 2019'
  },
  {
    url : 'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
    title : 'Episode 4 : Fire the Smoke Signal',
    lastUpdate : '26 juli 2019'
  }
]

function AddFav( title, x ) {
    return (
      <View onPress={() => x.navigate('DetailEpisode')}> 
        <View onPress={() => x.navigate('DetailEpisode')} style={styles.item}>
        <TouchableOpacity onPress={() => x.navigate('DetailEpisode', {
              titleWebtoon: title.title,
              otherParam: 'anything you want here',
            })}>
        <Image source={{uri: title.url }} style={styles.Image} />
        </TouchableOpacity>
        <View style={styles.list}>
          <Text onPress={() => x.navigate('DetailEpisode')} style={styles.episodeTitle}>{title.title}</Text>
          <Text onPress={() => x.navigate('DetailEpisode')} style={styles.episode}>{title.lastUpdate}</Text>
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
      <Container>
      <Content>
        <View style={styles.content}>     
        <View style={styles.content}>
        <Label style={{ fontWeight:'bold', marginTop:15}}>Title</Label>
        <View style={{alignItems:'center'}}>
          <Item rounded style={styles.input}>
            <Input/>
            </Item>
          </View>
          
        </View>

        <SafeAreaView>  
      <FlatList
      
        data={DATA}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        keyExtractor={item => item}
      />
    </SafeAreaView>
        </View>
        <View>
        <Button onPress={() => this.props.navigation.navigate('CreateEpisode')} style={styles.Button} ><Text style={{color:'white'}} > + Add </Text></Button>
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
  },
  episode : {
    marginTop:2,
    color:'grey', 
    fontSize:12
  },
  episodeTitle : {
    marginTop:2, 
    fontSize:15,
    fontWeight:'bold'
  },
  Image : {
    width: 40,
     height: 45,
     borderRadius:3 
  }
});

export default DetailScreen;
