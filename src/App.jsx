import { BarraNavegacao } from "./Componentes/BarraNavegacao";
import { Cabecalho } from "./Componentes/Cabecalho";
import { Conteudo } from "./Componentes/Conteudo";
import { Rodape } from "./Componentes/Rodape";
import { Disciplinas } from "./Paginas/Disciplinas";  // Importe a página de disciplinas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from "./Componentes/Menu";
function App() {
  return (
    <Router>
      <BarraNavegacao />
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Conteudo />} />
        <Route path="/menu" element={<Menu />} />  {/* Página de menu */}
        <Route path="/disciplinas" element={<Disciplinas />} />  {/* Página de disciplinas */}
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;
