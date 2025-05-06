import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  // Importando o Link do React Router

export function Disciplinas() {
  const [disciplinas, setDisciplinas] = useState([]);

  // Carregar todas as disciplinas ao montar o componente
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/disciplina/")  // Substitua pela URL correta do seu endpoint
      .then((response) => setDisciplinas(response.data))
      .catch((error) => console.error("Erro ao carregar disciplinas:", error));
  }, []);

  return (
    <div className="disciplinas-container">
      <h2>Disciplinas</h2>

      {/* Lista de disciplinas */}
      <div className="disciplinas-list">
        {disciplinas.map((disciplina) => (
          <div key={disciplina.id} className="disciplina-card">
            <h3>{disciplina.nome}</h3>
            <p>{disciplina.curso}</p>
            <p>{disciplina.cargaHoraria} horas</p>
            <p>{disciplina.descricao}</p>
            <p>{disciplina.professor}</p>
          </div>
        ))}
      </div>

      {/* Botão para redirecionar para o cadastro de disciplina */}
      <Link to="/cadastro-disciplina">
        <button className="botao-cadastro">Cadastrar Nova Disciplina</button>
      </Link>
    </div>
  );
}
