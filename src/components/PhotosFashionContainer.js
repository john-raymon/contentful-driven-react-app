import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import withTumblr from './withTumblr'
import { fetchPost } from '../actions/index'

class PhotosFashionContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.fetchObject))
  }
  render() {
    return(
      <Fragment>
        {JSON.stringify(this.props.photos)}
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  photos: state.photos
})
export default connect(mapStateToProps)(withTumblr(PhotosFashionContainer))