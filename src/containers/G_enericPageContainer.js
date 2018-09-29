import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import { fetchGenericPage } from './../state/actions/genericPageActions';

import GenericPageView from './../views/GenericPageView';

import get from './../util/get';
import _isEmpty from 'lodash/isEmpty';

import { FULFILLED, IDLE, PENDING, REJECTED } from './../constants/Status';

class GenericPageContainer extends Component {
  componentDidMount() {
    const {
      actions,
      match: { params: { slug } }
    } = this.props;
    const path = slug.replace(/^\//, '');
    console.log(this.props)
    actions.fetchGenericPage(path);
    console.log('mounted')
  }

  render() {

    const { genericPageStatus, doesSlugExist } = this.props;

    if (genericPageStatus !== FULFILLED) {
      return <p>Loading</p>
    } else {
      if (doesSlugExist) {
        return <GenericPageView { ...this.props } />   
      } else {
        return <Redirect to='not-found' />;      
      } 
    }

  }
}

const mapStateToProps = state => {
  return {
    pushOffFromMenu: get(state, 'genericPage.items[0].fields.pushOffFromMenu', true),
    blocks: get(state, 'genericPage.items[0].fields.contentBlocks', []),
    doesSlugExist: _isEmpty(get(state, 'genericPage.items', [])) ? false : true,
    genericPageStatus: get(state, 'status.genericPage', IDLE)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchGenericPage
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericPageContainer);
