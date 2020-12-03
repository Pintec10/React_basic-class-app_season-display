import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Loader from './components/Loader';


class App extends React.Component {

	state = {
		lat: null,
		errorMessage: ''
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message }) 
		);
	}

	renderContent() {
		if(this.state.errorMessage) {
			return <div>Error: {this.state.errorMessage}</div>;
		} else if (this.state.lat) {
			return <SeasonDisplay lat={this.state.lat}/>
		}

		return <Loader message='Getting your season, please allow us to know your position if asked!'/>;
	}



	render() {
		return(
			<div>
				{this.renderContent()}
			</div>
		)
	}
}





ReactDOM.render(
	<App />,
	document.querySelector("#root")
); 