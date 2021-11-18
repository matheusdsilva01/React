import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ViaCep from '../pages/viacep';
import BrasilCep from '../pages/brasilcep';
import Principal from '../pages/principal';

const RouteList = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/viacep" element={<ViaCep />} />
      <Route path="/brasilcep" element={<BrasilCep />} />
    </Routes>
  </Router>
);

export default RouteList;