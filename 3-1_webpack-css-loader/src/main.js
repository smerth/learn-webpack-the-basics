var React = require('react');
var ReactDOM = require('react-dom');
require('./style.css');

class Message extends React.Component {
	render() {
		return (<div>
					<h1>{this.props.title}</h1>
					<p>{this.props.message}</p>
				</div>);
	}
}

ReactDOM.render(<Message title="Styled with CSS" message="This page was styled with CSS."/>, 
	document.getElementById('react-container'));