import React, { Component } from 'react';

import get from './../util/get';
import BlockSwitch from './../components/BlockSwitch';

class GenericPageView extends Component {
  render() {
    const { blocks, actions, pushOffFromMenu } = this.props;
    return (
      <div className={`GenericPageView flex flex-column flex-grow justify-center${pushOffFromMenu ? ' pushFromNav' : '' }`}>
        <div>
          {blocks &&
            blocks.map((block, i) => (
              <BlockSwitch
                key={`${i}-${get(block, 'sys.id', i)}`}
                block={block}
                actions={actions}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default GenericPageView;
