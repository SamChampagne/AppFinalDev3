import React, { useEffect, useState } from 'react';
import { IRecette } from '../model/recette';
import { useParams } from 'react-router-dom';
import { getRecetteById } from '../apiService';

const AffichageRecette = () => {
    const { id } = useParams<{ id: string }>();
    const [recette, setRecette] = useState<IRecette | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecette = async () => {
            try {
                setLoading(true);
                const fetchedData = await getRecetteById(id!);
                console.log("JSON de la recette :", fetchedData); // Vérifiez la structure ici
    
                
                
            } catch (err) {
                console.error("Erreur lors de la récupération de la recette :", err);
                setError("Erreur lors de la récupération de la recette");
            } finally {
                setLoading(false);
            }
        };
    
        fetchRecette();
    }, [id]);
    

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;
    if (!recette) return <p>Aucune recette trouvée</p>;

    return (
        <div className="flex min-h-screen w-screen">
            {/* Barre de navigation latérale */}
            <aside className="w-1/5 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-5">Menu</h2>
                <nav>
                    <ul>
                        <li className="mb-2"><a href="/" className="text-gray-300 hover:text-white">Accueil</a></li>
                        <li className="mb-2"><a href="/ajouter" className="text-gray-300 hover:text-white">Ajout</a></li>
                        <li className="mb-2"><a href="/recherche" className="text-gray-300 hover:text-white">Recherche</a></li>
                    </ul>
                </nav>
            </aside>

            {/* Contenu principal de la recette */}
            <div className="w-4/5 p-6 bg-white rounded-lg shadow-md overflow-y-auto">
                <h2 className="text-2xl font-bold text-black mb-4">{recette.titre}</h2>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Informations générales</h3>
                    <p className="text-black"><strong>Temps de préparation :</strong> {recette.tempsPreparation} minutes</p>
                    <p className="text-black"><strong>Temps de cuisson :</strong> {recette.tempsCuisson} minutes</p>
                    <p className="text-black"><strong>Portions :</strong> {recette.portions}</p>
                    {recette.auteur && <p><strong>Auteur :</strong> {recette.auteur}</p>}
                    {recette.dateCreation && (
                        <p><strong>Date de création :</strong> {new Date(recette.dateCreation).toLocaleDateString()}</p>
                    )}
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Ingrédients</h3>
                    <ul className="list-disc list-inside text-black">
                        {recette.ingredients?.map((ingredient) => (
                            <li key={ingredient._id}>
                                {ingredient.nom} - {ingredient.quantite}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Étapes</h3>
                    <ol className="list-decimal list-inside text-black">
                        {recette.etapes?.sort((a, b) => a.ordre - b.ordre).map((etape) => (
                            <li key={etape._id} className="mb-2">
                                {etape.description}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default AffichageRecette;
