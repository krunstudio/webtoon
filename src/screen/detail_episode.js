import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text } from 'native-base';
import * as actionWebtoons from '../redux/actions/actionWebtoon'
import { connect } from 'react-redux'

function AddFav( title ) {
  return (
    <View> 
      <View style={styles.item}>
        <Image source={{uri: title.image }}
        style={{width: '100%', height: 400}} />
      </View>
    </View>
  );
}

class DetailEpisode extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('titleWebtoon', 'No Title'),
    };
  };

    async componentDidMount(){
    const { navigation } = this.props;
    const episodeId = navigation.getParam('episodeId', 'NO-ID');
    const webtoonId = navigation.getParam('webtoonId', 'NO-ID');
    await this.props.handleGetDetailEpisode(webtoonId,episodeId)
     }

  render() {
    const detailEpisode = this.props.detailEpisodeLocal.detailEpisode
    console.disableYellowBox=true;
    
  return (
    <Container style={{backgroundColor:''}}>
      <Content>
        <View style={styles.content}>

          <SafeAreaView>
            <FlatList
              data={detailEpisode}
              renderItem={({ item }) => AddFav(item)}
              keyExtractor={item => item.page}
            />
          </SafeAreaView>
        </View>
        </Content>
      </Container>
  );
  }
  
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: 'white',
    marginTop: 8,

    flexDirection:'row'
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
  },content: {
    flex : 1,
    margin:10
  },
  input: {
    height: 40,
    marginBottom:15,
    borderRadius:15
  },
  icon: {
    marginEnd:10
  }
});

const mapStateToProps = state => {
  return {
    detailEpisodeLocal: state.detailEpisode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetDetailEpisode:(id,episodeId)=> dispatch(actionWebtoons.handleGetDetailEpisode(id,episodeId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailEpisode);
