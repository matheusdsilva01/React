import React, { Component } from 'react'

export default class Repositorio extends Component {
    render() {
        return (
            <div>
                <ul key={this.props.cep}>
                      <li>{this.props.cep}</li>
                      <li>{this.props.logradouro}</li>
                      <li>{this.props.localidade}</li>
                    </ul>
            </div>
        )
    }
}
