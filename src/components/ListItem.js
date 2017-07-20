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
    const { id, title } = this.props.library

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Image style={event} source={require('../../img/gameSquare.png')}>
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
