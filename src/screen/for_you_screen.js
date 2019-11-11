import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, route, TouchableOpacity} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text, Fab} from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import * as actionWebtoons from '../redux/actions/actionWebtoon'
import { connect } from 'react-redux'



function AddFav( title, x ) {
  return (
    <View style={{flex:1}}> 
      <View style={styles.item}>
      <TouchableOpacity onPress={() => x.navigate('Detail', {
              titleWebtoon: title.title,
              urlWebtoon: title.image,
              webtoon_id: title.id,
              otherParam: 'anything you want here',
            })}>
        <Image source={{uri: title.image }}
            style={{width: "100%", height: 130, borderRadius:4}} />
      </TouchableOpacity>
        <View style={styles.list}>
          <Text style={{width:"100%", fontSize:14}} onPress={() => x.navigate('Detail')}>{title.title}</Text>
            {/* <Button style={styles.favorite}>
              <Text style={{fontSize:12}}> + Favorite</Text>
            </Button> */}
        </View>
      </View>
    </View>
  );
}

function Fav(title, x) {
  return (
    <View> 
      <View style={styles.FavItem}>
      <TouchableOpacity onPress={() => x.navigate('Detail', {
              titleWebtoon: title.title,
              urlWebtoon: title.image,
              webtoon_id: title.id,
              image:title.image,
              otherParam: 'anything you want here',
            })}>
        <Image source={{uri: title.image}}
            style={{width: 150, height: 90, borderRadius:6}} />
        </TouchableOpacity>
        <View style={styles.ListFav}>
          <Text style={{width:150, fontSize:14}} onPress={() => x.navigate('Detail')}>{title.title}</Text>
        </View>
      </View>
    </View>
  ); 
}

class ForYou extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [{
      title: '',
      url: 'https://akcdn.detik.net.id/visual/2019/05/28/f5bf410e-9c4d-43d7-8682-e964311ebd01_169.jpeg?w=900&q=90'
}, {
      title: '',
      url: 'https://www.inibaru.id/nuploads/46/virgo.jpg'
}, {
      title: '',
      url: 'https://obs.line-scdn.net/0hrDZnnvgBLWtnFwZnDb1SPF1BLgRUez5oAyF8dTd5c18fIDk6XSY3XksUIQ9DJWo1CSVgCUsfNload2w0DyU3/w580'
}],
    };
  }
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }
 
 async componentDidMount(){
 await this.props.handleGetWebtoons()
  }
  
componentWillUnmount() {
  clearInterval(this.state.interval);
  }


  render() {
    const webtoons=this.props.webtoonsLocal.webtoons
    console.disableYellowBox=true;
    return (
      <Container>
      <Content>
        <View>
        <Fab  position='topRight' style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
          <Icon name='search'/>
        </Fab>
          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}> */}
            <Slideshow
            dataSource={webtoons}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })} />
          {/* </TouchableOpacity> */}
        </View>    


    <SafeAreaView>
      <View>
      <Label style={{marginStart:10, marginTop:10, fontWeight:'bold'}}>Paling Populer</Label> 
      </View>  
      <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        data={webtoons}
        renderItem={({ item }) => Fav(item, this.props.navigation)}
        keyExtractor={item => item.title}
      />
      
      <Label style={{marginStart:10, fontWeight:'bold', marginTop:15}}>Semua</Label>
      <FlatList
        data={webtoons}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        numColumns={2}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
        
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
    flex:1
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
    marginTop:20,
    justifyContent: 'center',
    borderRadius: 1,
    backgroundColor:'#f64747', 
    height:30, 
    width:100,
    borderRadius:5
  },
  list: {
    marginStart: 0,
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
  }
});

const mapStateToProps = state => {
  return {
    webtoonsLocal: state.webtoons,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetWebtoons:()=> dispatch(actionWebtoons.handleGetWebtoons())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForYou);

