/** @jsx React.DOM */
var React = require('react');
var TopBar = require('./TopBar.js');

var DesignerPage = React.createClass({
  getInitialState: function() {
    var state = {
    };
    return state;
  },
  render: function() {
    return (
      <div>
        <TopBar />
      </div>
    )
  }
});

module.exports = DesignerPage;
