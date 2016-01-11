let React = require('react');

module.exports = function(fdb) {

  return React.createClass({
    render: function() {
      return <li>{this.props.data.title}</li>;
    }
  });
  
};
