import './SeasonDisplay.css';



const seasonConfig = {
	warm: {
		text: 'This is the warm season!',
		icon: 'orange sun'
	},
	cold: {
		text: 'It\'s chilly outside.',
		icon: 'blue snowflake'
	}
}

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'warm' : 'cold';
	} else {
		return lat > 0 ? 'cold' : 'warm';
	}
}



const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, icon } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${icon} loading icon`} />
			<h1 className="ui header">{text}</h1>
			<p>This is a very simple React app that uses class-based components and lifecycle events. 
				It uses the geolocation API to determine, based on the current month, whether it is the cold or warm season.
			</p>
			<i className={`icon-right massive ${icon} loading icon`} />
		</div>
	);
};



export default SeasonDisplay;