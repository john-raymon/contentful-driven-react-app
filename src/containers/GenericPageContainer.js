import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchGenericPage } from 'state/actions/genericPageActions';

import globals from 'state/selectors/globals'

import { IDLE } from 'constants/Status';
import get from 'util/get';

class GenericPageContainer extends ContainerBase {
  view = import('views/GenericPageView');

  model = () => {
    const {
      actions,
      match: { path }
    } = this.props;

    const slug = path === '/' ? 'home' : path.replace(/^\//, '');
    console.log('this is the slug', slug)
    return actions.fetchGenericPage(slug);
  };
}

const mapStateToProps = state => {
  return {
    pushOffFromMenu: get(state, 'genericPage.items[0].fields.pushOffFromMenu', true),
    blocks: get(state, 'genericPage.items[0].fields.contentBlocks', []),
    globals: globals(state)

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