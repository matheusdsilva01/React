import React, { Component } from 'react'
import './mesa.css'
export default class mesa extends Component {
    constructor() {
        super();
        this.state = {
            valor: 0,
            lista: [{
                id: 1,
                nome: 'Arroz',
                imagem: 'https://vivareceita-cdn.s3.amazonaws.com/uploads/2020/11/Aprenda-como-fazer-um-arroz-dos-deuses.-Fonte-Pinterest.jpg'
            },
            {
                id: 2,
                nome: 'Bifé',
                imagem: 'https://swiftbr.vteximg.com.br/arquivos/ids/178617-768-768/bife-alcatra-swift-900g-616163-1.jpg?v=637704160149470000'
            }]
        };
    }
    render() {
        const removerNome = (idItem) => {
            console.log(this.state.lista);
            const lista = this.state.lista.filter(({ id }) => id !== idItem);
            this.setState({ lista: lista });
        }

        const mostrarLista = () => {
            this.setState(
                {
                    lista: [{
                        id: 1,
                        nome: 'Arroz',
                        imagem: 'https://vivareceita-cdn.s3.amazonaws.com/uploads/2020/11/Aprenda-como-fazer-um-arroz-dos-deuses.-Fonte-Pinterest.jpg',
                        mostrar: true
                    },
                    {
                        id: 2,
                        nome: 'Bifé',
                        imagem: 'https://swiftbr.vteximg.com.br/arquivos/ids/178617-768-768/bife-alcatra-swift-900g-616163-1.jpg?v=637704160149470000',
                        mostrar: true
                    }]
                }
            )
            }

        return (
            <>
                <h1>Mesa de trabalho</h1>
                    <button onClick={() => mostrarLista()}>
                        Voltar
                    </button>
                <div>
                    {this.state.lista.map(({ id, nome, imagem }) => {
                        return (
                            <div key={id} onClick={() => removerNome(id)}>
                                <h3>{nome}</h3>
                                <img src={imagem} alt={nome} />
                            </div>
                        )
                    })}
                </div> 
            </>
        )
    }
}


