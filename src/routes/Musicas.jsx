import { MusicasStyle } from "../css/MusicasStyle"
import rock from "../assets/img/rock.jpg";
import pop from "../assets/img/pop.png";
import jazz from "../assets/img/jazz.jpg";
import { Link } from 'react-router-dom';
const Musicas =()=>{
    return(
     <MusicasStyle>
      <div className="background">
        <div className="container">
            <h1>Rock</h1>
            <img src={rock}></img>
            <p>Um album de músicas cheio de metal pesado que vai fazer você pular!</p>
            <Link>Compre Aqui!</Link>
        </div>
        <div className="container">
            <h1>Pop</h1>
            <img src={pop}></img>
            <p>Se anime com essa playlist de pop para festejar!</p>
            <Link>Compre Aqui!</Link>
        </div>
        <div className="container">
            <h1>Jazz</h1>
            <img src={jazz}></img>
            <p>Aquela trilha sonora relaxante pra quem curte um bom jazz.</p>
            <Link>Compre Aqui!</Link>
        </div>
      </div>
     </MusicasStyle>
      
    )
}
export default Musicas