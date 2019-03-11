import React from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  render() {
    return (
        <div>
            <TemperatureInput scale='c' />
            <TemperatureInput scale='f'/>
        </div>
    );
  }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature {scaleNames[scale]}:</legend>
        <input value={temperature}
            onChange={this.handleChange} />
      </fieldset>
    );
  }
}


export default Calculator;
