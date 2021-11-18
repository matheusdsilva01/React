import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import Cep from './components/cep'
import Swal from 'sweetalert2';
import api from '../../services/apiBrasil';

export default class Repository extends Component {
  constructor() {
    super();
    this.state = {
      endereco: [],
    }
  }

  handleSubmit = async ({ cep }) => {
    if (cep !== '') {
      try {
        const response = await api.get(`/${cep}`);
        var newEndereco = this.state.endereco;
        newEndereco.push(response.data);
        this.setState({ endereco: newEndereco });
      } catch (error) {
        Swal.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        });
      }
    }
  }

  render() {
    return (
      <>
        <div className="col-md-4 col-sm-6 my-3 container text-center">
        <Link to={`/viacep`}>Ir para Via cep</Link>
          <br />
          <Link to={`/`}>Ir para a Principal</Link>
          <br />
          <h2>Buscar endereço na Brasil Cep</h2>
          <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
            <Form>
              <Field placeholder="Insira o cep" required type="text" name="cep" id="cep" className="form-control" />
              <button type="submit" className="btn btn-primary my-4">Pesquisar</button>
            </Form>
          </Formik>
          {this.state.endereco && (

            this.state.endereco.map(({ cep, street, city}) => {
              return (
                <Cep key={cep} cep={cep} street={street} city={city}/>
              )
            })

          )}
        </div>
      </>
    );
  }
}