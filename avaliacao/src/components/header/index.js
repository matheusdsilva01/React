import React from 'react'
import './header.scss'
import Logosvg from '../../Component 1 (3).svg'

export default function index() {
    return (
        <header>
            <img src={ Logosvg } alt="logo" />
            <ul>
                <li>Sobre mim</li>
                <li>Meus Projetos</li>
                <li>Contatos</li>
            </ul>
        </header>
    )
}
