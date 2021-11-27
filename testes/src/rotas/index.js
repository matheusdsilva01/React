import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViaCep from '../pages/viacep';
import BrasilCep from '../pages/brasilcep';
import Principal from '../pages/principal';
import NotFound from '../pages/notFound';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/viacep/:cep" element={<ViaCep />} />
      <Route path="/viacep/" element={<ViaCep />} />
      <Route path="/brasilcep/:cep" element={<BrasilCep />} />
      <Route path="/brasilcep/" element={<BrasilCep />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;