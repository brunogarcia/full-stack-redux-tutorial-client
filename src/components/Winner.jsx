import React from 'react';

export default React.createClass({
  propTypes: {
    winner: React.PropTypes.string
  },
  render: function () {
    return <div className='winner'>
      Winner is {this.props.winner}!
    </div>;
  }
});
