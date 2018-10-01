import React, { Component } from 'react';
import marked from 'marked';


import get from 'util/get';

class Markdown extends Component {
  render() {
    console.log('this is the markdown cont,', this.props);
    const markdown = get(this.props, 'block.fields.copy', '');

    return (
      <div className="MarkdownBlock bg-white px3 py2">
          <div
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            className="MarkdownBlock__markdown worksans text-black max-width-3 mx-auto"
          />
      </div>
    );
  }
}


export default Markdown;