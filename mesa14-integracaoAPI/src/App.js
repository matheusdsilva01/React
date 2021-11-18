import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from './services/api';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      endereco: []
    }
  }

  handleSubmit = async ({ cep }) => {
    if (cep !== '') {
      try {
        const response = await api.get(`/ws/${cep}/json`);
        this.setState({ endereco: response.data });
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
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Buscar endereço</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o cep" required type="text" name="cep" id="cep" className="form-control" />
                <button type="submit" className="btn btn-primary my-4">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.endereco && (
              <div>
                {this.state.endereco.map(({ cep, logradouro, complemento, bairro, localidade, uf }) => {
                  return (
                    <div key={cep}>
                      <p>{cep}</p>
                      <p>{logradouro}</p>
                      <p>{complemento}</p>
                      <p>{bairro}</p>
                      <p>{localidade}</p>
                      <p>{uf}</p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </main>
      </>
    );
  }
}