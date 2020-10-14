import React from 'react';
import marked from 'marked';
class MarkeddownReader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.rawMarkup = this.rawMarkup.bind(this);
  }
  rawMarkup() {
    let rawMarkup = marked(this.props.data, {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return <div className="post">
     <span dangerouslySetInnerHTML={this.rawMarkup()} />;
    </div>;
  }
}

export default MarkeddownReader;