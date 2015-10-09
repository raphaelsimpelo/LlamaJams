module.exports = {

	turnTimeToSecond: function(time){
		// Turn duration pass into minutes
		var minutes = Math.floor(time / (60 * 1000));

		// Get left over second from the song
		var leftOver = Math.ceil(time % (60 * 1000));

		var time = '';

		time += this.timeMinuteAndSecond(minutes) + ":" + this.timeMinuteAndSecond(leftOver);

		return time;
	},

	timeMinuteAndSecond: function(time){
		// Time less than one second
		if(time < 1){
			return "00";
		} else if (time < 10){
			return "0" + time;
		} else {
			return time;
		}
	}

}
