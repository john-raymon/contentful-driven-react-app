import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VisualDetailView from 'views/VisualDetailView'

import getVisual from 'state/selectors/getVisual';

class VisualDetailContainer extends ContainerBase {
  view = import('views/VisualDetailView');

  model = () => {};
}

const mapStateToProps = (state, props) => {
  return {
    visual: getVisual(state, props),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({}, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisualDetailContainer);