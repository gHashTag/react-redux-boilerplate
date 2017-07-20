import React, { Component } from 'react'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  LayoutAnimation,
  Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

const win = Dimensions.get('window');

const CONTENT =[
  {
   "poster": require('../../img/shakti/1.png'),
  },
  {
    "poster": require('../../img/shakti/2.png'),
  },
  {
    "poster": require('../../img/shakti/3.png'),
  },
  {
    "poster": require('../../img/shakti/4.png'),
  },
  {
    "poster": require('../../img/shakti/5.png'),
   },
  {
    "poster": require('../../img/shakti/6.png'),
  },
  {
    "poster": require('../../img/shakti/7.png'),
  },
  {
    "poster": require('../../img/shakti/8.png'),
  },
  {
    "poster": require('../../img/shakti/9.png'),
  },
  {
    "poster": require('../../img/shakti/10.png'),
  }
]

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  renderDescription() {
    const { library, expanded } = this.props
    const { textDescription } = styles

    if (expanded) {
      return (
        <CardSection>
          <Text style={textDescription}>
            {library.description}
          </Text>
        </CardSection>
      )
    }
  }

  render() {
    const { event, titleStyle } = styles
    const { id, title, poster } = this.props.library

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
           <Image style={event} source={require(poster)} >
            <Text style={titleStyle}>
              {title}
            </Text>
           </Image>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontFamily: 'AvenirNextCondensed-UltraLight',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#fff',
    fontSize: 16,
    marginLeft: 20,
    paddingTop: win.width-40,
    paddingLeft: 15,
  },
  textDescription: {
   flex: 1,
   padding: 15 
  },
  event: {
    alignSelf: 'stretch',
    width: win.width,
    height: win.width 
  },
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
