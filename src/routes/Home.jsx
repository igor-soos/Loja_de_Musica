import { HomeStyle } from "../css/HomeStyle"
import { Link } from 'react-router-dom';

const Home =()=>{
    return(
        <HomeStyle>
            <section className="background">
                <h1>Loja de Música</h1>
                <div className="caixa_texto">   
                    <p>Venha ouvir as melhores músicas do mundo!</p>
                    <p>Música de qualidade é só aqui na Loja de Música, compre nossos álbuns para apreciar o melhor que a música tem a oferecer!</p>
                    <div className="login_button">
                        <Link to= '/Login'>Compre Aqui!</Link>
                    </div>
                </div>
            </section>
        </HomeStyle>
    )
}
export default Home