import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/viaCep';
import Cep from './components/cep';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      endereco: [],
    }
  }

  handleSubmit = async ({ cep }) => {
    if (cep !== '') {
      try {
        const response = await api.get(`/ws/${cep}/json`);
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
          <Link to={`/brasilcep`}>Ir para Brasil cep</Link>
          <br />
          <Link to={`/`}>Ir para a Principal</Link>
          <br/>
          <h2>Buscar endereço na Via Cep</h2>
          <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
            <Form>
              <Field placeholder="Insira o cep" required type="text" name="cep" id="cep" className="form-control" />
              <button type="submit" className="btn btn-primary my-4">Pesquisar</button>
            </Form>
          </Formik>
          {this.state.endereco && (

            this.state.endereco.map(({ cep, logradouro, localidade}) => {
              return (
                <Cep key={cep} cep={cep} logradouro={logradouro} localidade={localidade}/>
              )
            })

          )}
        </div>
      </>
    );
  }
}