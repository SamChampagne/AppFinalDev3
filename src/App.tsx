
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPrincipale from './components/MenuPrincipale';
import MenuAjout from './components/MenuAjout';
import AffichageRecette from './components/AffichageRecette';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrincipale />} />
        <Route path="/Ajouter" element={<MenuAjout />} />
        <Route path="/recette/:id" element={<AffichageRecette />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
