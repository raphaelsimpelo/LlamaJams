var React = require('react');

//the purpose of Song is to render our songs in a uniform way, songEntry uses this structure to render
var Song = React.createClass({

  handleThatThingUp: function() {
  	this.props.onThatClickUp({key: this.props.data.key});
  },

  handleThatThingDown: function() {
  	this.props.onThatClickDown({key: this.props.data.key});
    console.log('onThatClickDown: Does this happen twice?')
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
          {this.props.data.voteSum}
          <img className="thumbs-down" src="../../assets/img/thumbs-down.png" onClick={this.handleThatThingDown}/>
          <img className="delete" src="../../assets/img/x.png" style={display} onClick={this.handleThatDelete}/>
        </div>
      </div>
    )
  }
})

module.exports = Song;