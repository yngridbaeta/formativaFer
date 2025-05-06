import { useState } from 'react';
import estilos from './Login.module.css';

export function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você faria a autenticação
        console.log('Usuário:', usuario);
        console.log('Senha:', senha);
    };

    return (
        <div className={estilos.container}>
            <form className={estilos.formulario} onSubmit={handleSubmit}>
                <h2 className={estilos.titulo}>Login</h2>
                <input
                    type="text"
                    placeholder="Usuário"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    className={estilos.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className={estilos.input}
                    required
                />
                <button type="submit" className={estilos.botao}>Entrar</button>
            </form>
        </div>
    );
}
