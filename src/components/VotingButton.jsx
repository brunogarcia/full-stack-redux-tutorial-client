import React from 'react';

export default React.createClass({
  propTypes: {
    entry: React.PropTypes.string.isRequired,
    vote: React.PropTypes.func
  },
  handleClick: function () {
    this.props.vote(this.props.entry);
  },
  render: function () {
    return (
      <button onClick={this.handleClick}>
        <h1>{this.props.entry}</h1>
      </button>
    );
  }
});
