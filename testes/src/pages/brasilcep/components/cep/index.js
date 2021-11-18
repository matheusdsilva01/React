import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <ul>
                <li key={this.props.cep}>{this.props.cep}</li>
                <li key={this.props.cep}>{this.props.street}</li>
                <li key={this.props.cep}>{this.props.city}</li>
            </ul>
        )
    }
}
