import React from 'react';
import TemperatureInput from './TemperatureInput';
import Boiling from './Boiling';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {celsius: '', farenheit: ''}
    }
    handleChange = (temperature, type) => {
        console.log(type, temperature);
        let celsius = '';
        let farenheit = '';
        temperature = parseFloat(temperature);

        if(Number.isNaN(temperature)){
            temperature = '';
            type = '';
        }
        if(type === 'c'){
            celsius = temperature;
            farenheit = celsius * 9 / 5 + 32;
            farenheit = Math.round(farenheit * 100) / 100;
        }
        if(type === 'f'){
            farenheit = temperature;
            celsius = (farenheit - 32) * 5 / 9;
            celsius = Math.round(celsius * 100) / 100;
        }
        this.setState({
            celsius: celsius,
            farenheit: farenheit
        });
    }
    render(){
        return(
            <div className="mt-5">
                <TemperatureInput title="Celsius" temperature={this.state.celsius} onTemperatureChange={(e) => this.handleChange(e, 'c')} />
                <TemperatureInput title="Farenheit" temperature={this.state.farenheit} onTemperatureChange={(e) => this.handleChange(e, 'f')} />
                <Boiling celsius={this.state.celsius} />
            </div>
        )
    }
}
export default Calculator;