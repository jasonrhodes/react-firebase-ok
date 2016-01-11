let React = require('react');

module.exports = function(fdb) {

  let Song = require('./Song')(fdb);

  return React.createClass({
    getInitialState: function() {
      return {
        songs: []
      };
    },
    componentWillMount: function() {
      fdb.child('songs').on('value', (snapshot) => {
        this.setState({ songs: snapshot.val() || [] });
      });
    },
    render: function() {
      return (
        <ul>
          {this.state.songs.map((song) => {
            return <Song key={song.title} data={song} />;
          })}
        </ul>
      );
    }
  });

};
