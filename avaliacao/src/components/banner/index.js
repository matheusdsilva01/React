import React from 'react'
import './banner.scss'

export default function index() {
    return (
        <>
            <div id="banner" className="row text-center justify-content-center align-itens-center">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <section>
                        <img className="rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4E03AQHkoeQBYzglTw/profile-displayphoto-shrink_200_200/0/1625514487779?e=1642636800&v=beta&t=tqv6UiPoNuBAfcf9-Ex1N7IUsRGCNhKLC07wZx96_x8" />
                        <h1>Hello World! Me chamo Matheus</h1>
                        <p>Sou um desenvolvedor Frond end junior.</p>
                    </section>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
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
