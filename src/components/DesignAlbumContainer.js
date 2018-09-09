import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import withTumblr from './withTumblr'
import { fetchPost } from '../actions/index'

class DesignAlbumContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.fetchObject))
  }
  render() {
    return(
      <Fragment>
        {JSON.stringify(this.props.designs)}
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  designs: state.designs
})
export default connect(mapStateToProps)(withTumblr(DesignAlbumContainer))