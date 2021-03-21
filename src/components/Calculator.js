import { Component } from 'react';
import '../css/Calculator.css'

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            initial: 0,
            rate: 10,
            goal: 0,
            calculated: 0
        };

        this.handleInitialChange = this.handleInitialChange.bind(this)
        this.handleRateChange = this.handleRateChange.bind(this)
        this.handleGoalChange = this.handleGoalChange.bind(this)
        this.calculate = this.calculate.bind(this);
    };

    handleInitialChange = (e) => {
        let value = parseInt(e.target.value);
        this.setState({ initial: value })
    }

    handleRateChange = (e) => {
        let value = parseInt(e.target.value);
        this.setState({ rate: value })
    }

    handleGoalChange = (e) => {
        let value = parseInt(e.target.value);
        this.setState({ goal: value })
    }

    calculate = () => {
        let count = 0;
        let initial = parseInt(this.state.initial);
        let sum = initial;
        let rate = parseInt(this.state.rate)/100;
        let trueRate = (rate+1)
        let goal = parseInt(this.state.goal);

        while (sum < goal) {
            count ++; 
            sum = sum*trueRate;
        }
        
        this.setState({
            calculated: count
        })
    }

    render() {
        return(
            <div className="calculator">
                <label>
                    Initial Investment
                </label><br/>
                $ <input onChange={ this.handleInitialChange } value={ this.state.initial }></input><br/><br/>
                <label>
                    Interest Rate
                </label><br/>
                % <input onChange={ this.handleRateChange } value={ this.state.rate }></input><br/><br/>
                <label>
                    Goal
                </label><br/>
                $ <input onChange={ this.handleGoalChange } value={ this.state.goal }></input><br/><br/>
                <button onClick={ this.calculate }>
                    Calculate
                </button>
                <h1>
                    Trades Necessary: { this.state.calculated === 0 ? "" : this.state.calculated }
                </h1>
            </div>
        )
    }
}

export default Calculator;