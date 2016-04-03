import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
  propTypes: {
    winner: React.PropTypes.string
  },
  render: function () {
    return <div>
      {this.props.winner
        ? <Winner ref='winner' winner={this.props.winner} />
        : <Vote {...this.props} />}
    </div>;
  }
});
