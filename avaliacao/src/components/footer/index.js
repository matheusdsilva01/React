import React from 'react'
import './footer.scss'
export default function index() {
    return (
        <footer id="footer" class="d-flex flex-wrap justify-content-around align-items-center">
            <div class="col-md-4  d-flex text-align-center">
                <p>© Matheus Silva</p>
            </div>
            <ul class="nav col-md-4 justify-content-end align-items-center list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="https://www.github.com/matheusdsilva01" target="_blank">
                    <img src="https://img.icons8.com/material-sharp/24/000000/github.png" rel="noreferrer" alt="git-hub" />
                </a>
                </li>
                <li class="ms-3"><a class="text-muted" href="mailto:ms25022003@gmail.com" target="_blank">
                    <img src="https://img.icons8.com/ios/24/000000/gmail--v2.png" alt="gmail" />
                </a>
                </li>
                <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/matheus-silva-ti/" target="_blank">
                    <img src="https://img.icons8.com/material-rounded/24/000000/linkedin--v2.png" alt="linkedin" />
                </a>
                </li>
            </ul>
        </footer>
    )
}
