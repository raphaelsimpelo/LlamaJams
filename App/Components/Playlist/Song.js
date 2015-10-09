var React = require('react');
// var ReactFire = require('reactfire');

//the purpose of Song is to render our songs in a uniform way, songEntry uses this structure to render
var Song = React.createClass({
	// mixins: [ReactFire],

	getDefaultProps: function() {
    return {
      thatVoteCount: 0
    }
  },

  componentWillMount: function() {
	  // this.firebaseRef = new Firebase("https://magpiejammies.firebaseio.com");
	  // this.bindAsArray(this.firebaseRef, "items");
	},

  handleThatClick: function() {
  	// alert('dude, something happened!');
  	this.props.thatVoteCount++;
  	alert("count is now: " + this.props.thatVoteCount);
  },

  handleThatThingUp: function() {
  	this.props.onThatClickUp({key: this.props.data.key});
  },

  handleThatThingDown: function() {
  	this.props.onThatClickDown({key: this.props.data.key});
  },

  handleThatDelete: function() {
    this.props.onThatDeleteClick({key: this.props.data.key});
  },

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
          {this.props.data.song}
          <img className="thumbs-up" src="../../assets/img/thumbs-up.png" onClick={this.handleThatThingUp}/>
          <img className="thumbs-down" src="../../assets/img/thumbs-down.png" onClick={this.handleThatThingDown}/>
          <img className="delete" src="../../assets/img/x.png" style={display} onClick={this.handleThatDelete}/>
        </div>
      </div>
    )
  }
})

module.exports = Song;