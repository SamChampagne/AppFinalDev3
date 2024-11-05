import { useEffect, useState } from 'react';
import { getRecettes } from '../apiService';
import RecetteComponent from './recetteComponents';
import { IRecette } from '../model/recette';

const MenuPrincipale = () => {
  const [recettes, setRecettes] = useState<IRecette[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRecettes()
      .then((data) => {
        console.log("Fetched Recettes:", data);
        setRecettes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des recettes:', error);
        setError('Erreur de chargement des recettes.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen w-screen flex bg-gray-100">
      <aside className="w-1/6 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-5">Menu</h2>
        <nav>
          <ul>
            <li className="mb-2"><a href="/" className="text-gray-300 hover:text-white">Accueil</a></li>
            <li className="mb-2"><a href="/ajouter" className="text-gray-300 hover:text-white">Ajout</a></li>
            <li className="mb-2"><a href="/recherche" className="text-gray-300 hover:text-white">Recherche</a></li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-10 flex flex-col items-center">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">CookBookPro</h1>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {loading ? (
            <p>Chargement des recettes...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            recettes.map((recette) => (
              <RecetteComponent key={recette._id} {...recette} />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default MenuPrincipale;
