import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <ul key={this.props.cep}>
                <li>Cep: {this.props.cep}</li>
                <li>Endereço: {this.props.street}</li>
                <li>Cidade: {this.props.city}</li>
            </ul>
        )
    }
}
