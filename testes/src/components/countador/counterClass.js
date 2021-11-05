import { Component } from 'react'

export default class main extends Component {
    constructor() {
        super();
        this.state = { 
            contador: 1,
            nome: false 
        };
    }
    tick() {
        this.setState({ contador: + 6 });
    }
    alternador(){
        this.setState({ nome: !this.state.nome });
    }

    render() {
        return (
            <>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.contador}.</h2>
                <button onClick={() => this.tick()}>Click me</button>

                {this.state.nome && (<h2>Eu</h2>)}
                <br/>
                <button onClick={() => this.alternador()}>Click me</button>
            </>
        )
    }
}
