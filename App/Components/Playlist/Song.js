// The purpose of Song.js is to render each song in a uniform way, songEntry uses this structure to render

var timer = require('./timerMixin');
var React = require('react');


var Song = React.createClass({

  mixins: [timer],

  // [Created from scratch]
  // a callback function to notify SongEntry.js that a song's "thumbs up" was clicked
  handleThatThingUp: function() {
    this.props.onThatClickUp({key: this.props.data.key});
  },

  // [Created from scratch]
  // a callback function to notify SongEntry.js that a song's "thumbs down" was clicked
  handleThatThingDown: function() {
    this.props.onThatClickDown({key: this.props.data.key});
    console.log('onThatClickDown: Does this happen twice?')
  },

  // [Created from scratch]
  // a callback function to notify SongEntry.js that a song's "X" was clicked
  handleThatDelete: function() {
    this.props.onThatDeleteClick({key: this.props.data.key});
  },

  // [Modified to accomodate voting feature]
  // Renders an individual song unto the page
  render: function() {
    var jwt = window.localStorage.getItem('token');
    if (jwt) {
      var display = {
        display: 'inline-block'
      }
    }
    else {
      var display = {
        display: 'none'
      }
    }
    return (
      <div className='container-playlist'>
        <div className='song-view'>
          {this.turnTimeToSecond(this.props.data.duration)} {this.props.data.song}
          <img className="thumbs-up" src="../../assets/img/thumbs-up.png" onClick={this.handleThatThingUp}/>
          {this.props.data.voteSum}
          <img className="thumbs-down" src="../../assets/img/thumbs-down.png" onClick={this.handleThatThingDown}/>
          <img className="delete" src="../../assets/img/x.png" style={display} onClick={this.handleThatDelete}/>
        </div>
      </div>
    )
  }
})

module.exports = Song;
