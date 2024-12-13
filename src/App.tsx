import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPrincipale from './components/MenuPrincipale';
import MenuAjout from './components/MenuAjout';
import AffichageRecette from './components/AffichageRecette';
import RechercheRecette from './components/RechercheAffichage';
import Login from './components/Login';
import Inscription from './components/Inscription';


const App = () => {
  return (
    <>
    <Router>
        <div className="flex-1 ">
          <Routes>
            <Route path="/" element={<MenuPrincipale />} />
            <Route path="https://finaldev3.netlify.app/Ajouter" element={<MenuAjout />} />
            <Route path="https://finaldev3.netlify.app/recette/:id" element={<AffichageRecette />} />
            <Route path="https://finaldev3.netlify.app/recherche" element={<RechercheRecette />} />
            <Route path="https://finaldev3.netlify.app/login" element={<Login/>} />
            <Route path="https://finaldev3.netlify.app/inscription" element={<Inscription />} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
