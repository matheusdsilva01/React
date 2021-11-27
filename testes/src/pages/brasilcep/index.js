import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/apiBrasil';

const Index = () => {
  const [endereco, setEndereco] = useState()
  const { cep } = useParams()
  useEffect(() => {
    if (cep != null)
      handleSubmit(cep)
  }, [cep])

  async function handleSubmit({cep}) {
    if (cep !== '') {
      try {
        const response = await api.get(`/${cep}`);
        setEndereco(response.data);
        console.log(cep)
        console.log(response.data)
      } catch (error) {
        Swal.fire({
          title: "deu ruim",
          icon: 'error',
          text: "amigão"
        });
      }
    }
  }

  return (
    <>
      <div className="col-md-4 col-sm-6 my-3 container text-center">
        <Link to={`/viacep`}>Ir para Via cep</Link>
        <br />
        <Link to={`/`}>Ir para a Principal</Link>
        <br />
        <h2>Buscar endereço na Brasil Cep</h2>
        <Formik initialValues={{ cep: '' }} onSubmit={handleSubmit}>
          <Form>
            <Field placeholder="Insira o cep" required type="text" name="cep" id="cep" className="form-control" />
            <button type="submit" className="btn btn-primary my-4">Pesquisar</button>
          </Form>
        </Formik>
        {endereco && (
          <>
            <li>cep: {endereco.cep}</li>
            <li>logradouro: {endereco.street}</li>
            <li>localidade: {endereco.city}</li>
          </>
        )
        }
      </div>
    </>
  );
}
export default Index;