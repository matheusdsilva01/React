import '../styles/App.css';
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

function App() {
  const convidados = [
    {
      nome: 'Nicolas',
      estaNaLista: true,
      tarefa: 'batata-frita'
    },
    {
      nome: 'Pedro',
      estaNaLista: false,
      tarefa: 'pizza'
    },
    {
      nome: 'Carolina',
      estaNaLista: true,
      tarefa: 'bebidas'
    },
    {
      nome: 'Silva',
      estaNaLista: true,
      tarefa: 'Refrigerante'
    }];

  return (
    <div className="App">
      <h3>Convidado:</h3>
      {convidados.map((convidado, i) => (
        <ClassComponent key={i} nome={convidado.nome} estaNaLista={convidado.estaNaLista} />
      )
      )}
      <h3>Tarefas:</h3>
      {convidados.map((convidado, i) => (
        <FunctionComponent key={i} nome={convidado.nome} tarefa={convidado.tarefa} />
      )
      )}
    </div>
  );
}

export default App;
