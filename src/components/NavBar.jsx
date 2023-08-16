import icone from "../assets/game-controller-bolds.svg"
export function NavBar () {
    return (
        <div className="container">
            <div className="content">
                    <h1>Nova Era Gamers</h1>
                <div/>
                <div className="logo">
                            <img src={icone}/>
                    </div>
                    <div>
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="./departamentos">Departamentos</a></li>
                            <li><a href="./lançamentos">Lançamentos</a></li>
                            <li><a href="./baixe o app">Baixe o App</a></li>
                            <li><a href="./login">Login</a></li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}