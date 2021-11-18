import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Repository extends Component {

  render() {
    return (
      <>
        <Link to={`/viacep`}>Ir para Via cep</Link>
        <br />
        <Link to={`/brasilcep`}>Ir para Brasil cep</Link>
        <br />
        Escolhe uma rota ai doidão
      </>
    );
  }
}