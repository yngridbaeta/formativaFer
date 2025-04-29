import estilos from './Menu.module.css';

export function Menu() {
    return (
        <div className={estilos.conteiner}>
            <table>
                <tbody>
                    <tr>
                        <td>Professores</td>
                        <td>Gestores</td>
                    </tr>
                    <tr>
                        <td>Disciplina</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
