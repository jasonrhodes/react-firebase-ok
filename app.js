let React = require('react');
let ReactDOM = require('react-dom');
let Firebase = require('firebase');

let fdb = new Firebase('https://incandescent-torch-664.firebaseio.com/');

let Playlist = require('./app/Playlist')(fdb);

fdb.set({
  songs: [
    { title: 'Things' },
    { title: 'Stuff is Good' },
    { title: 'OK!' }
  ]
});

ReactDOM.render(
  <Playlist />,
  document.getElementById('TADA')
);
