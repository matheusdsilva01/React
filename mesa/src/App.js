import Header from './components/header/header'
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div class="App">
      <Header />
      <Banner>
        <h1>Hello World</h1>
        <button>Click Me</button>
      </Banner>
      <Footer>
        Matheus Tech, 2020 - Todos os direitos reservados
      </Footer>
    </div>
  );
}

export default App;
