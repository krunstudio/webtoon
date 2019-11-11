import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text } from 'native-base';

const DATA = [
  {
    url : 'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
    title : 'Dr.Stone',
    genre : 'Sci-Fi',
  },
  {
    url : 'https://i.kym-cdn.com/entries/icons/original/000/030/978/demon-slayer-poster-1163650-1280x0.jpeg',
    title : 'Kimetsu No Yaiba',
    genre : 'Sci-Fi',
  },
  {
    url : 'https://electricbento.com/wp-content/uploads/2019/07/Attack-on-titan-2-final-battle-1.jpg',
    title : 'Attack On Titan',
    genre : 'Sci-Fi',
  },
  {
    url : 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABf_Q6TuJMGayw1sOFrsEpAXK4TwRtwJjaQ5N1ovAn02CeyfJzoAyHtGu4Rx6NnH1jPb9LsGIwidYfbl2jgtqQG8jKq7i-fmd_Q.jpg?r=d7c',
    title : 'One Punch Man',
    genre : 'Sci-Fi',
  }
]

function AddFav( title, x ) {
  return (
    <View> 
      <View style={styles.item}>
      <TouchableOpacity onPress={() => x.navigate('Detail', {
              titleWebtoon: title.title,
              otherParam: 'anything you want here',
            })}>
        <Image source={{uri: title.url }}
            style={{width: 75, height: 80, borderRadius:8}} />
      </TouchableOpacity>
        <View style={styles.list}>
          <Text style={{width:200, fontSize:14, fontWeight:'bold'}} onPress={() => x.navigate('Detail')}>{title.title}</Text>
          <Text style={{width:200, fontSize:14}} onPress={() => x.navigate('Detail')}>{title.genre}</Text>
            <Button style={styles.favorite}>
              <Text style={{fontSize:12}}>Unfavorit</Text>
            </Button>
        </View>
      </View>
    </View>
  );
}



export default function app() {
console.disableYellowBox=true;
return (
<Container>
<Content style={{marginTop:'7%'}}>

  <View style={styles.content}>
    <View>
      <Item rounded style={styles.input}>
      <Input/>
      <Right><Icon name='search' style={styles.icon}/></Right>
      </Item>
    </View>
  </View>

<SafeAreaView>
<FlatList
  data={DATA}
  renderItem={({ item }) => AddFav(item)}
  keyExtractor={item => item}
/>
</SafeAreaView>
  
  </Content>
</Container>


);

}

const styles = StyleSheet.create({

  item: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 8,
    marginHorizontal: 5,
    flexDirection:'row'
  },
  imageFav: {
    
  },
  FavItem: {
    marginTop: 8,
    marginHorizontal:10

  },
  title: {
    fontSize: 32,
  },
  favorite: {
    justifyContent: 'center',
    borderRadius: 1,
    backgroundColor:'#f64747', 
    height:30, 
    width:100,
    borderRadius:5
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
    marginHorizontal:10,
    borderRadius:10,
    borderWidth:2,
    borderColor:'grey'
  },
  icon: {
    marginEnd:10,
    color:'grey'
  },
favorite: {
  marginTop:10,
  justifyContent: 'center',
  borderRadius: 1,
  backgroundColor:'#f64747', 
  height:30, 
  width:100,
  borderRadius:5
}
});

