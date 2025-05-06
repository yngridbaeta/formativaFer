import { Link } from 'react-router-dom';
import estilos from './BarraNavegacao.module.css';

export function BarraNavegacao() {
    return (
        <nav className={estilos.conteiner}>
            <ul>
                <li><Link to="/" className={estilos.active}>Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="#">Visão</Link></li>
                <li><Link to="#">Valores</Link></li>
            </ul>
        </nav>
    );
}
