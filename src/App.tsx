
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPrincipale from './components/MenuPrincipale';
import MenuAjout from './components/MenuAjout';
import AffichageRecette from './components/AffichageRecette';
import RechercheRecette from './components/RechercheAffichage';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrincipale />} />
        <Route path="/Ajouter" element={<MenuAjout />} />
        <Route path="/recette/:id" element={<AffichageRecette />} />
        <Route path="/recherche" element={<RechercheRecette/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
