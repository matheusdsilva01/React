import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import api from '../../services/viaCep';

const Index = () => {
  const [endereco, setEndereco] = useState()
  const { cep } = useParams()

  useEffect(() => {
    if (cep != null)
      handleSubmit(cep)
  }, [cep])

  async function handleSubmit({cep}){
    if (cep !== '') {
      try {
        const response = await api.get(`/ws/${cep}/json`);
        setEndereco(response.data);
      } catch (error) {
        Swal.fire({
          title: "deu ruim",
          icon: 'error',
          text: "amigao"
        });
      }
    }
  }


  return (
    <>
      <div className="col-md-4 col-sm-6 my-3 container text-center">
        <Link to={`/brasilcep`}>Ir para Brasil cep</Link>
        <br />
        <Link to={`/`}>Ir para a Principal</Link>
        <br />
        <h2>Buscar endereço na Via Cep</h2>
        <Formik initialValues={{ cep: '' }} onSubmit={handleSubmit}>
          <Form>
            <Field placeholder="Insira o cep" required type="text" name="cep" id="cep" className="form-control" />
            <button type="submit" className="btn btn-primary my-4">Pesquisar</button>
          </Form>
        </Formik>
        {endereco && (
          <>
            <li>cep: {endereco.cep}</li>
            <li>logradouro: {endereco.logradouro}</li>
            <li>localidade: {endereco.localidade}</li>
          </>
        )}
      </div>
    </>
  );
}
export default Index;