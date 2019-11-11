import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const DATA = [
  'https://swebtoon-phinf.pstatic.net/20190116_203/15476092508381Ywkd_JPEG/10_ipad.jpg',
  'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
  'http://st.cdjapan.co.jp/pictures/l/08/09/2019CL-40.jpg?v=1',

]

function AddFav( title, x ) {
    return (
      <View onPress={() => x.navigate('DetailEpisode')}> 
        <View onPress={() => x.navigate('DetailEpisode')} style={styles.item}>
          <Image onPress={() => x.navigate('DetailEpisode')} source={{uri: title }}
          style={{width: 40, height: 45, borderWidth:2, borderColor:'grey'}} />
          <View style={styles.list}>
            <Text onPress={() => x.navigate('DetailEpisode')}>1.imagefile.png</Text>
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
        <Label style={{ fontWeight:'bold', marginTop:15}}>Name</Label>
        <View style={{alignItems:'center'}}>
          <Item rounded style={styles.input}>
            <Input placeholder='EP.1'/>
            </Item>
          </View>
          
        </View>

        <SafeAreaView>  
        <Label style={{marginStart:20, fontWeight:'bold'}}>Add Image</Label>
        <FlatList

        data={DATA}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        keyExtractor={item => item}
      />
    </SafeAreaView>
        </View>
        <View>
        <Button style={styles.Button1} ><Text style={{color:'black'}} > + Image</Text></Button>
        <Button style={styles.Button2} ><Text style={{color:'white'}} > Delete Episode</Text></Button>
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

export default DetailScreen;
