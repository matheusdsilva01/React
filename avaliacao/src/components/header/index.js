import React from 'react'
import './header.scss'
import Logo from '../../logo.svg'

export default function index() {
    return (
        <header>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <img src={Logo} alt="logo" ></img>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarsExample03">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#banner">Sobre mim</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projects">Meus projetos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#footer">Contatos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
