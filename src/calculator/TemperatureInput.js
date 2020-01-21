import React from 'react';

class TemperatureInput extends React.Component{

    handleChange = (event) => {
        this.props.onTemperatureChange(event.target.value);
    }
    render(){
        return(
            <div>
                <label>{this.props.title}</label>
                <input type="text" value={this.props.temperature} onChange={this.handleChange} />
            </div>
        );
    }
}
export default TemperatureInput;