import React from 'react'
import './banner.scss'

export default function index() {
    return (
        <>
            <div id="banner" class="row text-center justify-content-center align-itens-center">
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <section>
                    <h1>Hello World! Me chamo Matheus</h1>
                    <p>Sou um desenvolvedor Frond end junior.</p>
                    </section>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <section>
                    <h1>Compêtencias</h1>

                    <img src="https://img.icons8.com/color/48/000000/javascript--v2.png" alt="js" />
                    <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html-5" />
                    <img src="https://img.icons8.com/color/48/000000/css3.png" alt="css-3" />
                    <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="react" />
                    <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" alt="java" />
                    <img src="https://img.icons8.com/color/48/000000/git.png" alt="git" />
                    </section>
                </div>
            </div>
        </>
    )
}
