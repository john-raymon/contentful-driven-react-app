import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import withTumblr from './withTumblr'

class VisualRecapVideosContainer extends Component {
  render() {
    return(
      <Fragment>
      {JSON.stringify(this.props.videos)}
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  videos: state.videos.recap_videos
})
export default connect(mapStateToProps)(withTumblr(VisualRecapVideosContainer))