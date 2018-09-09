import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/index'

const withTumblr = (WrappedComponent) => {
  return class extends Component {
    componentDidMount(){
      console.log('my props now!!!', this.props)
      const { dispatch } = this.props;
      dispatch(fetchPost(this.props.fetchObject))
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}
export default withTumblr;

// const VisualMusicVideosContainer = wrappedTumblr(VisualMusicVideosContainer)