import React from 'react'
import './projects.scss'
import Calculadora from '../../calc-area.png'
import Landing from '../../landing-page.png'
import Youtube from '../../youtube.png'
export default function index() {
    const list = [
        {
            name: 'Projeto calculadora de areas',
            imagem: Calculadora,
            link: 'https://github.com/Matheusdsilva01/Calculadora-de-areas',
            descricao: 'Site desenvolvido com objetivo de colocar em praticas conhecimentos de DOM'
        },
        {
            name: 'Projeto landing page',
            imagem: Landing,
            link: 'https://github.com/Matheusdsilva01/landing-page',
            descricao: 'Proposta para desenvolvimento de landing page'
        },
        {
            name: 'You Tube',
            imagem: Youtube,
            link: 'https://www.youtube.com',
            descricao: 'Site fictício'
        }
    ]


    return (
        <>
            <h2 id="projects" class="d-flex justify-content-center">Projects</h2>
            <div class="container d-flex align-items-center ">
                <div class="row d-flex justify-content-between">
                    <div>
                        {list.map(item => {
                            return (
                                <div class="col mb-5">
                                    <a href={item.link} target="_blank">
                                        <img src={item.imagem} alt="" />
                                    </a>
                                    <section class="d-flex justify-content-center">
                                        <h4>{item.name}</h4>
                                        <p>{item.descricao}</p>
                                    </section>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
