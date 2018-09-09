import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import withTumblr from './withTumblr'
import { fetchPost } from '../actions/index'

class VisualProjVideosContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.fetchObject))
  }
  render() {
    return(
      <Fragment>
        {JSON.stringify(this.props.videos)}
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  videos: state.videos.proj_videos
})
export default connect(mapStateToProps)(withTumblr(VisualProjVideosContainer))