import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/index'
class VisualMusicVideosContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPost({postType: 'video', tags: ['musicvideos'], requestType: 'video/musicvideos'}))
  }
  render() {
    return(
      <Fragment>
      </Fragment>
    )
  }
}

export default connect()(VisualMusicVideosContainer)