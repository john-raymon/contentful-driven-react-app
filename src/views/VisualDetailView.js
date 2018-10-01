import React, { Component } from 'react';

import get from 'util/get';
import VisualTypeSwitch from 'components/VisualTypeSwitch'

class VisualDetailView extends Component {

  render() {
    const { model, visual } = this.props;
    if (model.isError) return <h1>Error</h1>;
    if (!visual) return <h1>visual not found</h1>;
    const type = get(this.props, 'match.params.visualType', '')
    return (
      <div className="w100 pushFromNav">
        <VisualTypeSwitch 
          visual={visual}
          type={type}
        />
      </div>
    );
  }
}

export default VisualDetailView;