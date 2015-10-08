var React = require('react');
var timerMixin = require('./timerMixin');

module.exports = function() {
	mixins: [ timerMixin ],

	render: function() {
		//pass in duration in miliseconds
		var time = this.turnTimeToSecond(this.props.data.duration);

		return(
			<div>
				{time}
			</div>
		)

	}

}