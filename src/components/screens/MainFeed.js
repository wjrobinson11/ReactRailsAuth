import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import config from '../../config';
import { PostFeed } from '../container'

class MainFeed extends Component {
  render(){
    return(
      <View style={{flex: 1, width: 100+'%', height: 100+'%'}}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <PostFeed />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100+'%',
    height: config.styleConstants.rowHeight,
    marginTop: 44,
    backgroundColor: 'rgb(250,250,250)',
    borderColor: config.styleConstants.defaultBorderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default MainFeed
