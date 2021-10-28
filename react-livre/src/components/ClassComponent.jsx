
const ClassComponent = (props) => {
       return (
       <li>{props.nome} {props.estaNaLista ? "está" : "não está"} convidado para a festa</li>
       )
   }
export default ClassComponent;