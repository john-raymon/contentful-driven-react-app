import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import announcement from 'state/selectors/announcement';
import announcements from 'state/selectors/announcements';

class AnnouncementContainer extends ContainerBase {
  view = import('views/AnnouncementView');

  model = () => {};
}

const mapStateToProps = (state, props) => {
  return {
    announcement: announcement(state, props)
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
)(AnnouncementContainer);