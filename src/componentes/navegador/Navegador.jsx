import { Link } from "react-router-dom" 
import "./Navegador.css"

const Navegador = () => {  
    return(
        <nav>
            <ul className="menuSuperior">
                <li> <Link className="menuTexto" to="/" > Inicio </Link> </li> 
                <li> <Link className="menuTexto" to="/razas" > Razas </Link> </li> 
                <li> <Link className="menuTexto" to="/tienda" > Tienda </Link> </li> 
                
            </ul> 

        </nav>
    )
}
export default Navegador
