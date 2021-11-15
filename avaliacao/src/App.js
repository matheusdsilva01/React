import './App.scss';
import Header from './components/header'
import Banner from './components/banner'
import Projects from './components/projects'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
