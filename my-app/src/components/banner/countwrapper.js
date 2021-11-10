import { Component } from 'react';
class CounterWrapper extends Component {
    constructor() {
        super();
        this.state = {
            cronometro: 60
        }
    }
    componentDidMount() {
        this.time = setInterval(() => this.tick(), 1000);
    }
    //metodo 1
    /*componentDidUpdate() {
        if (this.state.cronometro === 0) {
            clearInterval(this.time);
        }
    } */
    tick() {
        //metodo 2
        if (this.state.cronometro !== 0) {
            this.setState({
                cronometro: this.state.cronometro - 1
            });
        } else {
            clearInterval(this.time);
        }
    }
    render() {
        return (
            <>
                <h1>Contador:</h1>
                <h2>{this.state.cronometro}</h2>
            </>
        );
    }
}
export default CounterWrapper;