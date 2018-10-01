import React, { Component } from 'react';

import get from 'util/get';

class VisualDetailView extends Component {
  render() {
    const { model, visual } = this.props;
    if (model.isError) return <h1>Error</h1>;
    if (!visual) return <h1>visual not found</h1>;
    return (
      <div className="w100 bg-white">
        { visual.title }
      </div>
    );
  }
}

export default VisualDetailView;