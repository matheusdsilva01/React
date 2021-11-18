import React, { Component } from 'react'

export default class Repositorio extends Component {
    render() {
        return (
            <ul key={this.props.cep}>
                <li>Cep: {this.props.cep}</li>
                <li>Esdereço: {this.props.logradouro}</li>
                <li>Cidade: {this.props.localidade}</li>
            </ul>
        )
    }
}
