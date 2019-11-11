import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,Dimensions, Share, Image, TouchableOpacity} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text, Header, FooterTab, Footer } from 'native-base';
import * as actionWebtoon from '../redux/actions/actionWebtoon'
import { connect } from 'react-redux'
import Moment from 'moment'

function AddFav( title, x ) {
  return (
    <View onPress={() => x.navigate('DetailEpisode')}> 
      <View onPress={() => x.navigate('DetailEpisode')} style={styles.item}>
      <TouchableOpacity onPress={() => x.navigate('DetailEpisode', {
              titleWebtoon: title.title,
              episodeId: title.id,
              webtoonId: title.webtoon_id,
              otherParam: 'anything you want here',
            })}>
        <Image source={{uri: title.image }} style={styles.Image} />
        </TouchableOpacity>
        <View style={styles.list}>
          <Text onPress={() => x.navigate('DetailEpisode',{titleWebtoon:title.title})} style={styles.episodeTitle}>{title.title}</Text>
          <Text onPress={() => x.navigate('DetailEpisode',{titleWebtoon:title.title})} style={styles.episode}>{Moment(title.updatedAt).format('LL')}</Text>
        </View>
      </View>
    </View>
  );
}

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
class Detail extends React.Component {

  constructor()
  {
    super();
 
    this.state = { 
      favorite: false,
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('titleWebtoon', 'No Title'),
    };
  };

  async componentDidMount(){
    const { navigation } = this.props;
    const webtoon_id = navigation.getParam('webtoon_id', 'NO-ID');
    await this.props.getDetailWebtoon(webtoon_id)
  }

  onFavorite = () => {
    this.setState({ favorite: !this.state.favorite});
  }

  render() {
    Moment.locale(); 
    const detailWebtoon = this.props.detailWebtoonLocal.detailWebtoon
    console.disableYellowBox=true;
    const { navigation } = this.props;
    const urlWebtoon = navigation.getParam('urlWebtoon', 'NO-ID');

  console.disableYellowBox=true;
  return (
    <Container style={{backgroundColor:''}}>
      <Content>
        <View style={{borderRadius:50, marginTop:-10}}>
        <Image source={{uri: urlWebtoon}}
        style={styles.detail}/>
        </View>
        <View style={styles.content}>

    <SafeAreaView>
      <Label style={{marginStart:15, fontWeight:'bold', marginBottom:10}}></Label>  
      <FlatList
        data={detailWebtoon}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        keyExtractor={item => item.page}
      />
    </SafeAreaView>
        </View>    
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor:'white', flex:1}}>
            <Button style={{flex:1}}>
              <Icon onPress={onShare} light name='share' style={{color:'grey'}}/>
              <Text style={{color:'grey'}}>Bagikan</Text>
            </Button>
            <Button style={{flex:1}}>
              <Icon onPress={this.onFavorite} light name='heart' style={
                (this.state.favorite) ? { color:'#f64747'} : { color:'grey'} }/>
              <Text style={{color:'grey'}}>Favorit</Text>
            </Button>
            <View style={{flex:2, padding:8}}>
            <Button style={{backgroundColor:'#f64747', borderRadius:20}}>
              <Text style={{color:'white'}}>Lanjut baca episode 1</Text>
            </Button>
            </View>
          </FooterTab>
        </Footer>
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
    detailWebtoonLocal: state.detailWebtoon,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDetailWebtoon:(id)=> dispatch(actionWebtoon.handleGetDetailWebtoon(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);